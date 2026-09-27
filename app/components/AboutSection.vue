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
            alt="小林 聡太のアイコン"
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

    <!-- 詳細 -->
    <div class="lg:col-span-8">
      <div class="grid sm:grid-cols-2 gap-x-10 gap-y-8">
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
              <span class="text-[15px] leading-relaxed text-[#55555a]">2018年からWeb開発の仕事をしています。</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">2024年からは業務システムのリプレイスで、Nuxt と TypeScript を使って画面と共通コンポーネントを作っています。</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span class="text-[15px] leading-relaxed text-[#55555a]">同じ現場で、コードレビューも担当しています。</span>
            </li>
          </ul>
        </div>

        <div
          class="reveal border-t border-[rgba(17,17,17,0.15)] pt-[18px]"
          data-idx="3"
        >
          <h4 class="flex items-baseline gap-2.5 text-base font-bold tracking-[0.02em] text-[#111] mb-3">
            <span class="inline-block w-[18px] h-[3px] bg-[#111] shrink-0 -translate-y-1" />
            仕事の進め方
          </h4>
          <ul class="space-y-2.5">
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span
                class="text-[15px] leading-relaxed text-[#55555a]"
              >懸念事項があるときは、代替案と一緒に迅速に共有します。</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span
                class="text-[15px] leading-relaxed text-[#55555a]"
              >複雑な技術の話は、相手の立場に合わせた言葉で説明します。</span>
            </li>
            <li class="flex gap-3">
              <span class="w-2 h-px bg-[#111] shrink-0 mt-[0.85em]" />
              <span
                class="text-[15px] leading-relaxed text-[#55555a]"
              >作業に入る前に見積もりを出して、共有してから着手します。</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
