<template>
  <div class="grid lg:grid-cols-12 gap-10">
    <!-- プロフィール -->
    <div
      class="reveal lg:col-span-4"
      data-idx="1"
    >
      <div class="border-t border-[rgba(17,17,17,0.15)] pt-6">
        <div class="w-26 h-26 border border-[#111] overflow-hidden mb-5">
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
        <h3 class="text-xl font-bold text-[#111] mb-1">
          小林 聡太
        </h3>
        <p class="text-[11px] tracking-[0.12em] text-[#55555a]">
          Freelance Engineer
        </p>
      </div>
    </div>

    <!-- 詳細（2×2グリッド） -->
    <div class="lg:col-span-8">
      <div class="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        <!-- 経歴 -->
        <div
          class="reveal border-t border-[rgba(17,17,17,0.15)] pt-[18px]"
          data-idx="2"
        >
          <h4 class="flex items-baseline gap-2.5 text-base font-bold tracking-[0.02em] text-[#111] mb-3">
            <span class="inline-block w-[18px] h-[3px] bg-[#111] shrink-0 -translate-y-1" />
            経歴
          </h4>
          <ul class="space-y-2.5">
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">8年間の実務経験を通じて、Webアプリケーションから業務システムまで幅広いプロジェクトに携わる</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">チーム開発とクライアントワークで技術力とコミュニケーション能力を研鑽</span>
            </li>
          </ul>
        </div>

        <!-- 働き方 -->
        <div
          class="reveal border-t border-[rgba(17,17,17,0.15)] pt-[18px]"
          data-idx="3"
        >
          <h4 class="flex items-baseline gap-2.5 text-base font-bold tracking-[0.02em] text-[#111] mb-3">
            <span class="inline-block w-[18px] h-[3px] bg-[#111] shrink-0 -translate-y-1" />
            働き方
          </h4>
          <ul class="space-y-2.5">
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">フリーランスエンジニアとして柔軟な働き方を実現</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">小回りの良さを活かした迅速な対応と密なコミュニケーション</span>
            </li>
          </ul>
        </div>

        <!-- 専門領域 -->
        <div
          class="reveal border-t border-[rgba(17,17,17,0.15)] pt-[18px]"
          data-idx="4"
        >
          <h4 class="flex items-baseline gap-2.5 text-base font-bold tracking-[0.02em] text-[#111] mb-3">
            <span class="inline-block w-[18px] h-[3px] bg-[#111] shrink-0 -translate-y-1" />
            専門領域
          </h4>
          <ul class="space-y-2.5">
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">Vue.js / Nuxt を中心としたモダンなフロントエンド開発</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">スケーラブルで保守性の高いアーキテクチャ設計</span>
            </li>
          </ul>
        </div>

        <!-- 価値観 -->
        <div
          class="reveal border-t border-[rgba(17,17,17,0.15)] pt-[18px]"
          data-idx="5"
        >
          <h4 class="flex items-baseline gap-2.5 text-base font-bold tracking-[0.02em] text-[#111] mb-3">
            <span class="inline-block w-[18px] h-[3px] bg-[#111] shrink-0 -translate-y-1" />
            大切にしていること
          </h4>
          <ul class="space-y-2.5">
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">保守性と可読性を重視した、長期運用に耐えるコード品質</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">チーム全体が理解しやすい設計で、プロジェクトの持続的成長を支援</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
