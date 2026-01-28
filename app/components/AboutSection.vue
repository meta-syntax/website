<template>
  <div class="grid lg:grid-cols-3 gap-12">
    <!-- プロフィール -->
    <div class="lg:col-span-1">
      <div class="sticky top-24">
        <div class="w-32 h-32 bg-[#111] border border-[#2a2a2a] flex items-center justify-center mb-6">
          <UIcon
            name="i-lucide-user"
            class="w-12 h-12 text-[#404040]"
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
        <div class="flex items-center gap-4 mb-4">
          <span class="text-sm font-mono text-[#404040]">01</span>
          <h4 class="text-lg font-semibold text-[#e8e8e8]">経歴</h4>
        </div>
        <p class="text-[#a0a0a0] leading-relaxed pl-10">
          8年間の実務経験を通じて、Webアプリケーションから業務システムまで幅広いプロジェクトに携わってきました。チーム開発やクライアントワークの中で、技術力だけでなく、コミュニケーション能力や課題解決力も磨いています。
        </p>
      </div>

      <!-- 働き方 -->
      <div class="group">
        <div class="flex items-center gap-4 mb-4">
          <span class="text-sm font-mono text-[#404040]">02</span>
          <h4 class="text-lg font-semibold text-[#e8e8e8]">働き方</h4>
        </div>
        <p class="text-[#a0a0a0] leading-relaxed pl-10">
          企業でのチーム開発を経て、フリーランスエンジニアとして活動しています。小規模ならではの小回りの良さを活かし、迅速な対応と柔軟なコミュニケーションを大切にしています。
        </p>
      </div>

      <!-- 専門領域 -->
      <div class="group">
        <div class="flex items-center gap-4 mb-4">
          <span class="text-sm font-mono text-[#404040]">03</span>
          <h4 class="text-lg font-semibold text-[#e8e8e8]">専門領域</h4>
        </div>
        <div class="pl-10">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 text-sm border border-[#22c55e] text-[#22c55e]">
              フロントエンド開発
            </span>
            <span class="px-3 py-1 text-sm border border-[#2a2a2a] text-[#a0a0a0]">
              アーキテクチャ設計
            </span>
          </div>
          <p class="text-[#a0a0a0] leading-relaxed">
            Vue.js/Nuxtを中心としたモダンなフロントエンド開発と、スケーラブルなシステムアーキテクチャの設計を得意としています。
          </p>
        </div>
      </div>

      <!-- 価値観 -->
      <div class="group">
        <div class="flex items-center gap-4 mb-4">
          <span class="text-sm font-mono text-[#404040]">04</span>
          <h4 class="text-lg font-semibold text-[#e8e8e8]">大切にしていること</h4>
        </div>
        <p class="text-[#a0a0a0] leading-relaxed pl-10">
          <span class="text-[#e8e8e8]">保守性と可読性</span>を重視した開発を心がけています。長期的に運用しやすく、チームメンバーが理解しやすいコードを書くことで、プロジェクトの持続的な成長をサポートします。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
