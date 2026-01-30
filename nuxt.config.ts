// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': {
      prerender: true
    }
  },

  // 実験的機能の有効化
  experimental: {
    payloadExtraction: false
  },

  compatibilityDate: '2025-01-15',

  // 静的サイト生成設定
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    compressPublicAssets: true,
    minify: true
  },

  // Vite最適化設定
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@vue') || id.includes('vue')) {
                return 'vendor-vue'
              }
              return 'vendor'
            }
          }
        }
      }
    },
    css: {
      devSourcemap: false
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
    dir: 'public'
  }
})
