<template>
  <div class="grid lg:grid-cols-2 gap-12 items-start">
    <!-- プロフィール画像エリア -->
    <div class="flex justify-center lg:justify-start lg:sticky lg:top-24">
      <UCard class="profile-image-card">
        <div class="relative">
          <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl ring-4 ring-cyan-500/20 dark:ring-cyan-500/30 profile-image">
            <div class="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <UIcon
                name="i-lucide-user"
                class="w-32 h-32 sm:w-40 sm:h-40 text-gray-400 dark:text-gray-600"
              />
            </div>
          </div>
          <!-- 装飾要素 -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl" />
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-2xl" />
        </div>
        <template #footer>
          <div class="text-center">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              小林 聡太
            </h3>
            <UBadge
              color="primary"
              variant="subtle"
              size="lg"
            >
              高品質な開発を迅速に提供
            </UBadge>
          </div>
        </template>
      </UCard>
    </div>

    <!-- プロフィール情報 -->
    <div class="space-y-6">
      <!-- 経歴 -->
      <UCard class="profile-section group">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <UIcon
                name="i-lucide-briefcase"
                class="w-6 h-6 text-white"
              />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              経歴
            </h4>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          8年間の実務経験を通じて、Webアプリケーションから業務システムまで幅広いプロジェクトに携わってきました。
          チーム開発やクライアントワークの中で、技術力だけでなく、コミュニケーション能力や課題解決力も磨いています。
        </p>
      </UCard>

      <!-- 働き方 -->
      <UCard class="profile-section group">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <UIcon
                name="i-lucide-user-circle"
                class="w-6 h-6 text-white"
              />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              働き方
            </h4>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          企業でのチーム開発を経て、フリーランスエンジニアとして活動しています。
          小規模ならではの小回りの良さを活かし、迅速な対応と柔軟なコミュニケーションを大切にしています。
          実務で培った技術力とクライアントに寄り添う姿勢で、プロジェクトの成功を全力でサポートします。
        </p>
      </UCard>

      <!-- 強み -->
      <UCard class="profile-section group">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <UIcon
                name="i-lucide-zap"
                class="w-6 h-6 text-white"
              />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              専門領域・強み
            </h4>
          </div>
        </template>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <UBadge
              color="primary"
              variant="soft"
              size="md"
            >
              <UIcon
                name="i-lucide-monitor"
                class="w-4 h-4 mr-1"
              />
              フロントエンド開発
            </UBadge>
            <UBadge
              color="primary"
              variant="soft"
              size="md"
            >
              <UIcon
                name="i-lucide-building-2"
                class="w-4 h-4 mr-1"
              />
              アーキテクチャ設計
            </UBadge>
          </div>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Vue.js/Nuxtを中心としたモダンなフロントエンド開発と、
            スケーラブルなシステムアーキテクチャの設計を得意としています。
          </p>
        </div>
      </UCard>

      <!-- 価値観 -->
      <UCard class="profile-section group">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <UIcon
                name="i-lucide-heart"
                class="w-6 h-6 text-white"
              />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              大切にしていること
            </h4>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          <strong class="text-gray-900 dark:text-white">保守性と可読性</strong>を重視した開発を心がけています。
          長期的に運用しやすく、チームメンバーが理解しやすいコードを書くことで、
          プロジェクトの持続的な成長をサポートします。
        </p>
      </UCard>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* プロフィール画像カードのアニメーション */
.profile-image-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
}

/* プロフィール画像のアニメーション */
.profile-image {
  opacity: 0;
  transform: scale(0.9);
  animation: fadeInScale 0.8s ease-out 0.5s forwards;
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* プロフィールセクションのアニメーション */
.profile-section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.profile-section:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.7s forwards;
}

.profile-section:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.85s forwards;
}

.profile-section:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 1s forwards;
}

.profile-section:nth-child(4) {
  animation: fadeInUp 0.8s ease-out 1.15s forwards;
}

/* プロフィールセクションのホバー効果 */
.profile-section:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04);
}

.dark .profile-section:hover {
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.3), 0 8px 8px -5px rgba(0, 0, 0, 0.2);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* モーション削減の対応 */
@media (prefers-reduced-motion: reduce) {
  .profile-image-card,
  .profile-image,
  .profile-section {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
