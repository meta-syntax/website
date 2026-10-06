// OSSセクションと GitHub プロフィールの README（meta-syntax/meta-syntax）が、/api/oss-contributions 経由でこの内容を使う

interface Description {
  // 一覧に出すAPI名。無ければ PR タイトルの括弧の中（例: fix(useElementSize) → useElementSize）
  api?: string
  summary?: string
  note?: string
}

// 日本語の説明。キーは `リポジトリ#番号`。ここに無い PR は英語の PR タイトルで出る
export const descriptions: Record<string, Description> = {
  'vueuse/vueuse#5524': {
    summary: 'box: \'border-box\' を指定すると v-element-size のハンドラが呼ばれない不具合を修正',
    note: 'v14.4.0 でリリース'
  },
  'vuejs/core#15663': {
    summary: 'Vapor モードでハイドレーションした要素のスタイルが、本番ビルドでリアクティブに更新されない不具合を修正'
  },
  'vueuse/vueuse#5645': {
    summary: 'クエリを続けて書き換えると、遷移の完了前に書いた値が失われる不具合を修正'
  },
  'nitrojs/nitro#4549': {
    api: 'dev server',
    summary: '開発サーバーで、サーバー内部から public のファイルを fetch すると 404 になる不具合を修正'
  },
  'vueuse/vueuse#5497': {
    summary: 'deep: true のとき、shouldCommit に新旧で同じオブジェクトが渡る不具合を修正'
  }
}

// プロジェクトの表示名。並びは導入文（Vue.js 本体や VueUse、Nitro）に合わせる。
// ここに無いリポジトリは `owner/name` のまま後ろに並ぶ
export const projectNames: Record<string, string> = {
  'vuejs/core': 'Vue.js',
  'vueuse/vueuse': 'VueUse',
  'nitrojs/nitro': 'Nitro'
}
