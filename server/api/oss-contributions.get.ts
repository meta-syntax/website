// 外部リポジトリに出したPRを GitHub の検索APIから取る
// ページ（/）は ISR で1時間ごとに作り直すので、PRを出してもステータスが変わってもファイルの修正は要らない

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
  // Conventional Commits の括弧の中（例: fix(useElementSize): ... → useElementSize）
  scope: string | null
  title: string
  url: string
  // 並べ替え用。merged はマージ日、open は作成日
  date: string
}

// fix(scope): subject / fix(scope)!: subject を scope と subject に分ける
const parseTitle = (title: string) => {
  const match = title.match(/^\w+\(([^)]+)\)!?:\s*(.+)$/)
  return match ? { scope: match[1]!, title: match[2]! } : { scope: null, title }
}

// 自分のリポジトリ（-user:）は除く。下書きと、マージされずに閉じたPRは出さない
const toContribution = (item: SearchItem): OssContribution | null => {
  const mergedAt = item.pull_request?.merged_at
  if (item.draft) return null
  if (item.state === 'closed' && !mergedAt) return null

  return {
    repo: item.repository_url.replace('https://api.github.com/repos/', ''),
    number: item.number,
    status: mergedAt ? 'merged' : 'open',
    ...parseTitle(item.title),
    url: item.html_url,
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
  return items
    .map(toContribution)
    .filter((c): c is OssContribution => c !== null)
    .sort((a, b) =>
      a.status !== b.status
        ? (a.status === 'merged' ? -1 : 1)
        : b.date.localeCompare(a.date)
    )
}, {
  // /api/oss-contributions を直接叩かれても GitHub に毎回は行かない
  maxAge: 60 * 60,
  name: 'oss-contributions'
})
