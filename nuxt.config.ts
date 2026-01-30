// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image'
  ],

  compatibilityDate: '2025-01-15',

  ssr: true,

  devtools: {
    enabled: true
  },

  // セルフホストフォントを追加
  css: [
    '@fontsource-variable/noto-sans-jp/wght.css',
    '~/assets/css/main.css'
  ],

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
      minify: 'esbuild',
      // チャンク分割最適化
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
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
    dir: 'public',
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
