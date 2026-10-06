// 外部リポジトリに出したPRを GitHub の検索APIから取り、日本語の説明を付けて返す
// ページ（/）は ISR で1時間ごとに作り直すので、PRを出してもステータスが変わってもファイルの修正は要らない
// GitHub プロフィールの README（meta-syntax/meta-syntax）も、Actions からこの API を読んで書き直す
import { descriptions, projectNames } from '../data/oss-descriptions'

const AUTHOR = 'meta-syntax'

interface SearchItem {
  number: number
  title: string
  html_url: string
  repository_url: string
  state: 'open' | 'closed'
  draft?: boolean
  created_at: string
  pull_request?: { merged_at: string | null }
}

export interface OssContribution {
  repo: string
  number: number
  status: 'merged' | 'open'
  url: string
  // GitHub 上の PR タイトルそのまま（例: fix(useElementSize): prefill size based on box option）
  title: string
  // タイトルから型と括弧を外した部分（例: prefill size based on box option）
  subject: string
  api: string | null
  // 日本語の説明。oss-descriptions.ts に無い PR は null
  summary: string | null
  note: string | null
  // 並べ替え用。merged はマージ日、open は作成日
  date: string
}

export interface OssProject {
  repo: string
  name: string
  url: string
}

// fix(scope): subject / fix(scope)!: subject を scope と subject に分ける
const parseTitle = (title: string) => {
  const match = title.match(/^\w+\(([^)]+)\)!?:\s*(.+)$/)
  return match ? { scope: match[1]!, subject: match[2]! } : { scope: null, subject: title }
}

// 自分のリポジトリ（-user:）は検索で除く。下書きと、マージされずに閉じたPRは出さない
const toContribution = (item: SearchItem): OssContribution | null => {
  const mergedAt = item.pull_request?.merged_at
  if (item.draft) return null
  if (item.state === 'closed' && !mergedAt) return null

  const repo = item.repository_url.replace('https://api.github.com/repos/', '')
  const { scope, subject } = parseTitle(item.title)
  const description = descriptions[`${repo}#${item.number}`]

  return {
    repo,
    number: item.number,
    status: mergedAt ? 'merged' : 'open',
    url: item.html_url,
    title: item.title,
    subject,
    api: description?.api ?? scope,
    summary: description?.summary ?? null,
    note: description?.note ?? null,
    date: mergedAt ?? item.created_at
  }
}

export default defineCachedEventHandler(async () => {
  const { githubToken } = useRuntimeConfig()

  const { items } = await $fetch<{ items: SearchItem[] }>('https://api.github.com/search/issues', {
    query: {
      q: `author:${AUTHOR} type:pr is:public -user:${AUTHOR}`,
      per_page: 100
    },
    headers: {
      'Accept': 'application/vnd.github+json',
      'User-Agent': AUTHOR,
      // 未認証だと検索APIは IP 単位で1分10回まで。Vercel は IP を共有するのでトークンを渡す
      ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {})
    }
  })

  // マージ済みを先に、それぞれ新しい順
  const contributions = items
    .map(toContribution)
    .filter((c): c is OssContribution => c !== null)
    .sort((a, b) =>
      a.status !== b.status
        ? (a.status === 'merged' ? -1 : 1)
        : b.date.localeCompare(a.date)
    )

  // projectNames にあるリポジトリをその順で先に、無いものは後ろに
  const repos = new Set(contributions.map(c => c.repo))
  const projects: OssProject[] = [
    ...Object.keys(projectNames).filter(repo => repos.has(repo)),
    ...[...repos].filter(repo => !(repo in projectNames))
  ].map(repo => ({
    repo,
    name: projectNames[repo] ?? repo,
    url: `https://github.com/${repo}`
  }))

  return { projects, contributions }
}, {
  // /api/oss-contributions を直接叩かれても GitHub に毎回は行かない
  maxAge: 60 * 60,
  // 返す形を変えたら上げる（古い形のキャッシュを読まないため）
  name: 'oss-contributions-v2'
})
