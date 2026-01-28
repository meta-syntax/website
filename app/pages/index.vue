<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950"
    role="main"
  >
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden py-24 sm:py-32 lg:py-40"
      aria-label="ヒーローセクション"
    >
      <UContainer class="relative z-10">
        <div class="mx-auto max-w-4xl">
          <div class="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start lg:gap-12">
            <!-- Avatar -->
            <div class="hero-avatar mb-8 lg:mb-0 shrink-0">
              <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 p-1 shadow-lg ring-4 ring-cyan-500/20 dark:ring-cyan-500/30">
                <div class="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <UIcon
                    name="i-lucide-user"
                    class="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 dark:text-gray-600"
                  />
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 hero-content">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
                <span class="block hero-title-line-1">
                  あなたの<span class="text-cyan-600 dark:text-cyan-400">アイデア</span>を、
                </span>
                <span class="block hero-title-line-2">
                  一緒に形に
                </span>
              </h1>
              <p class="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl hero-description">
                経験豊富なフリーランスエンジニアとして、お手伝いします
              </p>
              <div class="mt-10 flex items-center justify-center lg:justify-start hero-buttons">
                <UButton
                  size="xl"
                  color="primary"
                  aria-label="お問い合わせセクションへスクロール"
                  @click="scrollToContact"
                >
                  相談する
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Tech Stack Section -->
    <section
      id="tech-stack"
      class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50"
      aria-labelledby="tech-stack-heading"
    >
      <UContainer>
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2
            id="tech-stack-heading"
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            技術スタック
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            最新のテクノロジーを活用して、スケーラブルで保守性の高いソリューションを構築します
          </p>
        </div>

        <TechStack />
      </UContainer>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <UContainer>
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2
            id="about-heading"
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            自己紹介
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            フリーランスエンジニアとして、お客様のプロジェクトを成功に導きます
          </p>
        </div>

        <AboutSection />
      </UContainer>
    </section>

    <!-- Services Section -->
    <section
      id="services"
      class="py-24 sm:py-32"
      aria-labelledby="services-heading"
    >
      <UContainer>
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2
            id="services-heading"
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            サービス・専門性
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            お客様のニーズに合わせた柔軟な開発サービスを提供します
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <UCard
            v-for="(service, index) in services"
            :key="index"
            class="service-card group"
            :aria-label="`${service.title}の詳細`"
          >
            <template #header>
              <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <UIcon
                  :name="service.icon"
                  class="w-7 h-7 text-white"
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {{ service.title }}
              </h3>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              {{ service.description }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50"
      aria-labelledby="contact-heading"
    >
      <UContainer>
        <div class="mx-auto max-w-3xl">
          <div class="text-center mb-12">
            <h2
              id="contact-heading"
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              お問い合わせ
            </h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
              プロジェクトのご相談やお見積もりは、お気軽にお問い合わせください
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 items-start">
            <!-- Contact Info -->
            <UCard>
              <template #header>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  連絡先
                </h3>
              </template>
              <div class="space-y-4 mb-6">
                <a
                  href="mailto:souta.k@meta-syntax.biz"
                  class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  aria-label="メールで連絡する"
                >
                  <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-cyan-500 to-blue-600 group-hover:scale-110 transition-transform">
                    <UIcon
                      name="i-lucide-mail"
                      class="w-5 h-5 text-white"
                    />
                  </div>
                  <span class="text-lg text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    souta.k@meta-syntax.biz
                  </span>
                </a>
              </div>
              <div class="pt-6 border-t border-gray-200 dark:border-gray-800">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  ソーシャルメディア
                </p>
                <SocialMediaButtons />
              </div>
            </UCard>

            <!-- Contact Form -->
            <UCard>
              <template #header>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  メッセージを送る
                </h3>
              </template>
              <form
                class="space-y-5"
                @submit.prevent="handleSubmit"
              >
                <div class="space-y-2">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    お名前
                  </label>
                  <UInput
                    id="name"
                    v-model="formState.name"
                    placeholder="山田 太郎"
                    size="lg"
                    class="w-full"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    メールアドレス
                  </label>
                  <UInput
                    id="email"
                    v-model="formState.email"
                    type="email"
                    placeholder="your@email.com"
                    size="lg"
                    class="w-full"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    メッセージ
                  </label>
                  <UTextarea
                    id="message"
                    v-model="formState.message"
                    placeholder="プロジェクトの詳細をご記入ください..."
                    :rows="5"
                    size="lg"
                    class="w-full"
                    required
                  />
                </div>
                <UButton
                  type="submit"
                  color="primary"
                  size="lg"
                  block
                  :loading="isSubmitting"
                  trailing-icon="i-lucide-send"
                >
                  送信する
                </UButton>
              </form>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-900 dark:bg-black border-t border-gray-800">
      <UContainer>
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-center md:text-left">
            <p class="text-lg font-semibold text-white mb-1">
              MetaSyntax
            </p>
            <p class="text-sm text-gray-400">
              © {{ new Date().getFullYear() }} MetaSyntax. All rights reserved.
            </p>
          </div>
          <SocialMediaButtons />
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Web開発',
    icon: 'i-lucide-globe',
    description: 'レスポンシブで高速なWebアプリケーションの開発'
  },
  {
    title: 'API開発',
    icon: 'i-lucide-plug',
    description: 'RESTful API、GraphQL などのバックエンドAPI開発'
  },
  {
    title: 'システム設計',
    icon: 'i-lucide-building-2',
    description: 'スケーラブルで保守性の高いシステムアーキテクチャ設計'
  },
  {
    title: '技術コンサル',
    icon: 'i-lucide-lightbulb',
    description: '技術選定や開発プロセスの改善に関するコンサルティング'
  }
]

const formState = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const scrollToContact = () => {
  if (import.meta.client) {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  // フォーム送信処理（実際の実装ではAPIエンドポイントに送信）
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert('メッセージを送信しました。ありがとうございます！')
  formState.value = { name: '', email: '', message: '' }
  isSubmitting.value = false
}

onMounted(() => {
  // ページロード時のアニメーションをトリガー
  if (import.meta.client) {
    document.body.classList.add('page-loaded')
  }
})
</script>

<style scoped>
/* Hero Section Animations */
.hero-avatar {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

.hero-title-line-1 {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

.hero-title-line-2 {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
}

.hero-description {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.8s forwards;
}

.hero-buttons {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 1s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Service Cards */
.service-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dark .service-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

/* Section Transitions */
section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.page-loaded section {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animation for sections */
.page-loaded section:nth-child(1) { transition-delay: 0s; }
.page-loaded section:nth-child(2) { transition-delay: 0.1s; }
.page-loaded section:nth-child(3) { transition-delay: 0.2s; }
.page-loaded section:nth-child(4) { transition-delay: 0.3s; }

/* Performance optimizations */
.hero-avatar,
.service-card,
section {
  will-change: transform, opacity;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .hero-avatar,
  .hero-title-line-1,
  .hero-title-line-2,
  .hero-description,
  .hero-buttons,
  section {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
