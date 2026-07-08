<script setup lang="ts">
interface Work {
  title: string
  description: string
  url: string
  tags: string[]
}

const works: Work[] = [
  {
    title: 'Tana',
    description: '個人向けブックマーク管理Webアプリ。URLを入力するとタイトル・説明・画像を自動取得し、リッチに表示。OGP自動取得、検索機能、ユーザー認証を備え、RLSでデータ保護。レスポンシブ対応。',
    url: 'https://tana.meta-syntax.biz/',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Supabase', 'Tailwind CSS']
  }
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="(work, index) in works"
      :key="index"
      class="reveal"
      :data-idx="index + 1"
    >
      <a
        :href="work.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group block h-full p-6 border border-[#111] hover:bg-[#111] transition-colors duration-200"
      >
        <!-- ヘッダー -->
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center gap-3">
            <span class="text-sm text-[#55555a] tabular-nums group-hover:text-[#1d4ed8] transition-colors">0{{ index + 1 }}</span>
            <h3 class="text-xl font-bold text-[#111] group-hover:text-[#1d4ed8] transition-colors">
              {{ work.title }}
            </h3>
          </div>
          <UIcon
            name="i-lucide-external-link"
            class="w-5 h-5 text-[#111] group-hover:text-[#f6f6f4] transition-colors"
          />
        </div>

        <!-- 説明 -->
        <p class="text-[#55555a] leading-relaxed mb-6 group-hover:text-[#f6f6f4] transition-colors">
          {{ work.description }}
        </p>

        <!-- タグ -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in work.tags"
            :key="tag"
            class="px-2.5 py-1 text-[11px] font-medium text-[#111] border border-[#111] group-hover:text-[#f6f6f4] group-hover:border-[#f6f6f4] transition-colors"
          >
            {{ tag }}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>
