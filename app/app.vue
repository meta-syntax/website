<script setup lang="ts">
// OGP・canonical はクローラーが絶対URLしか解釈しないため、公開URLを基点にする
const siteUrl = 'https://meta-syntax.biz'

useHead({
  htmlAttrs: {
    lang: 'ja',
    style: 'scroll-behavior: smooth;'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'MetaSyntax' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'canonical', href: `${siteUrl}/` }
    // フォントはセルフホスト（@fontsource/zen-kaku-gothic-new）
  ]
})

const title = 'MetaSyntax | フリーランスソフトウェアエンジニア'
const description = 'フリーランスエンジニア小林聡太（MetaSyntax）のサイトです。Vue.js / Nuxt を中心に、Webアプリの設計から実装までを請け負います。VueUse や Vue 本体に修正のプルリクエストを出しています。'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${siteUrl}/`,
  ogSiteName: 'MetaSyntax',
  ogLocale: 'ja_JP',
  ogImage: `${siteUrl}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: '複雑さを紐解き、組み上げる。MetaSyntax 小林 聡太',
  twitterImage: `${siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  keywords: 'フリーランス, フロントエンドエンジニア, Vue.js, Nuxt, TypeScript, Laravel, VueUse, OSS'
})
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
