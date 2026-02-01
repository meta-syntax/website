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
    <a
      v-for="(work, index) in works"
      :key="index"
      :href="work.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group block p-6 bg-[#111] border border-[#1a1a1a] hover:border-[#22c55e] transition-all duration-300"
    >
      <!-- ヘッダー -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <span class="text-sm font-mono text-[#404040]">0{{ index + 1 }}</span>
          <h3 class="text-xl font-semibold text-[#e8e8e8] group-hover:text-[#22c55e] transition-colors">
            {{ work.title }}
          </h3>
        </div>
        <UIcon
          name="i-lucide-external-link"
          class="w-5 h-5 text-[#404040] group-hover:text-[#22c55e] transition-colors"
        />
      </div>

      <!-- 説明 -->
      <p class="text-[#a0a0a0] leading-relaxed mb-6">
        {{ work.description }}
      </p>

      <!-- タグ -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in work.tags"
          :key="tag"
          class="px-3 py-1 text-xs font-mono text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/5"
        >
          {{ tag }}
        </span>
      </div>
    </a>
  </div>
</template>
