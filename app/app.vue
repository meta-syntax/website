<script setup lang="ts">
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
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // フォントはセルフホスト（@fontsource-variable/noto-sans-jp）に移行
  ]
})

const title = 'MetaSyntax | フリーランスソフトウェアエンジニア'
const description = 'MetaSyntaxは、プロフェッショナルなソフトウェア開発サービスを提供するフリーランスエンジニアです。Vue.js、Nuxt、TypeScript、Node.jsなどのモダンな技術スタックで、高品質なWebアプリケーション開発を承ります。'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  keywords: 'フリーランス, ソフトウェアエンジニア, Web開発, Vue.js, Nuxt, TypeScript, Node.js, プログラミング, 開発サービス'
})
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
