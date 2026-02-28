// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image'
  ],

  ssr: true,

  devtools: {
    enabled: true
  },

  // セルフホストフォント（Zen Kaku Gothic New）
  css: [
    '@fontsource/zen-kaku-gothic-new/400.css',
    '@fontsource/zen-kaku-gothic-new/700.css',
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    slackBotToken: '',
    slackChannelId: ''
  },

  compatibilityDate: '2025-01-15',

  // 静的サイト生成設定
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    compressPublicAssets: true
  },

  // Vite最適化設定
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    // 画像最適化設定
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }
})
