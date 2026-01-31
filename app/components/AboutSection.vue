<template>
  <div class="grid lg:grid-cols-3 gap-12">
    <!-- プロフィール -->
    <div class="lg:col-span-1">
      <div class="sticky top-24">
        <div class="w-32 h-32 border border-[#2a2a2a] overflow-hidden mb-6">
          <NuxtImg
            src="/SNS-icon-2505-162.webp"
            alt="Profile Icon"
            width="128"
            height="128"
            sizes="128px"
            format="webp"
            quality="80"
            loading="lazy"
            class="w-full h-full object-cover"
          />
        </div>
        <h3 class="text-2xl font-bold text-[#e8e8e8] mb-2">
          小林 聡太
        </h3>
        <p class="text-[#22c55e] font-mono text-sm">
          Freelance Engineer
        </p>
      </div>
    </div>

    <!-- 詳細 -->
    <div class="lg:col-span-2 space-y-12">
      <!-- 経歴 -->
      <div class="group">
        <div class="flex items-center gap-4 mb-6">
          <UIcon
            name="i-lucide-briefcase"
            class="w-5 h-5 text-[#22c55e]"
          />
          <h4 class="text-lg font-semibold text-[#e8e8e8]">
            経歴
          </h4>
        </div>
        <ul class="pl-9 space-y-3">
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">8年間の実務経験を通じて、Webアプリケーションから業務システムまで幅広いプロジェクトに携わる</span>
          </li>
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">チーム開発とクライアントワークで技術力とコミュニケーション能力を研鑽</span>
          </li>
        </ul>
      </div>

      <!-- 働き方 -->
      <div class="group">
        <div class="flex items-center gap-4 mb-6">
          <UIcon
            name="i-lucide-users"
            class="w-5 h-5 text-[#22c55e]"
          />
          <h4 class="text-lg font-semibold text-[#e8e8e8]">
            働き方
          </h4>
        </div>
        <ul class="pl-9 space-y-3">
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">フリーランスエンジニアとして柔軟な働き方を実現</span>
          </li>
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">小回りの良さを活かした迅速な対応と密なコミュニケーション</span>
          </li>
        </ul>
      </div>

      <!-- 専門領域 -->
      <div class="group">
        <div class="flex items-center gap-4 mb-6">
          <UIcon
            name="i-lucide-code"
            class="w-5 h-5 text-[#22c55e]"
          />
          <h4 class="text-lg font-semibold text-[#e8e8e8]">
            専門領域
          </h4>
        </div>
        <ul class="pl-9 space-y-3">
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">Vue.js / Nuxt を中心としたモダンなフロントエンド開発</span>
          </li>
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">スケーラブルで保守性の高いアーキテクチャ設計</span>
          </li>
        </ul>
      </div>

      <!-- 価値観 -->
      <div class="group">
        <div class="flex items-center gap-4 mb-6">
          <UIcon
            name="i-lucide-heart"
            class="w-5 h-5 text-[#22c55e]"
          />
          <h4 class="text-lg font-semibold text-[#e8e8e8]">
            大切にしていること
          </h4>
        </div>
        <ul class="pl-9 space-y-3">
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">保守性と可読性を重視した、長期運用に耐えるコード品質</span>
          </li>
          <li class="flex gap-3">
            <span class="text-[#22c55e] leading-relaxed">•</span>
            <span class="text-[#a0a0a0] leading-relaxed">チーム全体が理解しやすい設計で、プロジェクトの持続的成長を支援</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
