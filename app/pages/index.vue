<template>
  <div
    class="min-h-screen bg-[#0a0a0a]"
    role="main"
  >
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center"
      aria-label="ヒーローセクション"
    >
      <!-- グリッド背景 -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-size-[60px_60px]"
      />

      <UContainer class="relative z-10 py-20">
        <div class="max-w-3xl">
          <!-- ステータスバッジ -->
          <div class="hero-eyebrow flex items-center gap-2 mb-8">
            <span class="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
            <span class="text-sm text-[#22c55e] font-mono tracking-wide">AVAILABLE FOR WORK</span>
          </div>

          <!-- メインタイトル -->
          <h1 class="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8e8e8] leading-[1.1] tracking-tight">
            複雑を<span class="text-[#22c55e]">紐解き</span>、<br>
            組み上げる
          </h1>

          <p class="hero-description mt-8 text-lg sm:text-xl text-[#a0a0a0] max-w-xl leading-relaxed">
            8年の経験を持つフリーランスエンジニア。<br>
            Vue.js / Nuxt を中心に、設計から実装まで。
          </p>

          <!-- CTA -->
          <div class="hero-buttons mt-12 flex flex-wrap gap-4">
            <button
              class="px-8 py-4 bg-[#22c55e] text-[#0a0a0a] font-semibold rounded-none hover:bg-[#16a34a] transition-colors"
              @click="scrollToContact"
            >
              仕事の相談をする
            </button>
            <button
              class="px-8 py-4 border border-[#2a2a2a] text-[#e8e8e8] font-semibold rounded-none hover:border-[#22c55e] hover:text-[#22c55e] transition-colors"
              @click="scrollToAbout"
            >
              詳しく見る
            </button>
          </div>
        </div>
      </UContainer>

      <!-- スクロールインジケーター -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div class="w-px h-16 bg-linear-to-b from-[#22c55e] to-transparent" />
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section
      id="tech-stack"
      class="py-32 border-t border-[#1a1a1a]"
      aria-labelledby="tech-stack-heading"
    >
      <UContainer>
        <div class="mb-16">
          <span class="text-sm font-mono text-[#22c55e] tracking-wider">01 / SKILLS</span>
          <h2
            id="tech-stack-heading"
            class="mt-4 text-3xl sm:text-4xl font-bold text-[#e8e8e8]"
          >
            技術スタック
          </h2>
        </div>

        <TechStack />
      </UContainer>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="py-32 border-t border-[#1a1a1a]"
      aria-labelledby="about-heading"
    >
      <UContainer>
        <div class="mb-16">
          <span class="text-sm font-mono text-[#22c55e] tracking-wider">02 / ABOUT</span>
          <h2
            id="about-heading"
            class="mt-4 text-3xl sm:text-4xl font-bold text-[#e8e8e8]"
          >
            自己紹介
          </h2>
        </div>

        <AboutSection />
      </UContainer>
    </section>

    <!-- Works Section -->
    <section
      id="works"
      class="py-32 border-t border-[#1a1a1a]"
      aria-labelledby="works-heading"
    >
      <UContainer>
        <div class="mb-16">
          <span class="text-sm font-mono text-[#22c55e] tracking-wider">03 / WORKS</span>
          <h2
            id="works-heading"
            class="mt-4 text-3xl sm:text-4xl font-bold text-[#e8e8e8]"
          >
            個人開発
          </h2>
        </div>

        <WorksSection />
      </UContainer>
    </section>

    <!-- Services Section -->
    <section
      id="services"
      class="py-32 border-t border-[#1a1a1a]"
      aria-labelledby="services-heading"
    >
      <UContainer>
        <div class="mb-16">
          <span class="text-sm font-mono text-[#22c55e] tracking-wider">04 / SERVICES</span>
          <h2
            id="services-heading"
            class="mt-4 text-3xl sm:text-4xl font-bold text-[#e8e8e8]"
          >
            サービス
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a]">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group p-8 bg-[#0a0a0a] hover:bg-[#111] transition-colors"
          >
            <div class="flex items-start gap-4">
              <span class="text-sm font-mono text-[#404040]">0{{ index + 1 }}</span>
              <div>
                <h3 class="text-xl font-semibold text-[#e8e8e8] mb-3 group-hover:text-[#22c55e] transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-[#a0a0a0] leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-32 border-t border-[#1a1a1a]"
      aria-labelledby="contact-heading"
    >
      <UContainer>
        <div class="mb-16">
          <span class="text-sm font-mono text-[#22c55e] tracking-wider">05 / CONTACT</span>
          <h2
            id="contact-heading"
            class="mt-4 text-3xl sm:text-4xl font-bold text-[#e8e8e8]"
          >
            お問い合わせ
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div>
            <p class="text-[#a0a0a0] text-lg leading-relaxed mb-8">
              プロジェクトのご相談、お見積もりなど<br>
              お気軽にご連絡ください。
            </p>

            <a
              href="mailto:souta.k@meta-syntax.biz"
              class="inline-flex items-center gap-3 text-[#e8e8e8] hover:text-[#22c55e] transition-colors group"
            >
              <span
                class="w-10 h-10 flex items-center justify-center border border-[#2a2a2a] group-hover:border-[#22c55e] transition-colors"
              >
                <UIcon
                  name="i-lucide-mail"
                  class="w-5 h-5"
                />
              </span>
              <span class="text-lg">souta.k@meta-syntax.biz</span>
            </a>

            <div class="mt-8 pt-8 border-t border-[#1a1a1a]">
              <p class="text-sm text-[#606060] mb-4 font-mono">
                SOCIAL
              </p>
              <SocialMediaButtons />
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-[#111] p-8">
            <form
              class="space-y-6"
              @submit.prevent="handleSubmit"
            >
              <div>
                <label
                  for="name"
                  class="block text-sm font-mono text-[#606060] mb-2"
                >
                  NAME
                </label>
                <input
                  id="name"
                  v-model="formState.name"
                  type="text"
                  placeholder="山田 太郎"
                  class="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-[#e8e8e8] placeholder-[#404040] focus:border-[#22c55e] focus:outline-none transition-colors"
                  required
                >
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-mono text-[#606060] mb-2"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  v-model="formState.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-[#e8e8e8] placeholder-[#404040] focus:border-[#22c55e] focus:outline-none transition-colors"
                  required
                >
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-mono text-[#606060] mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  v-model="formState.message"
                  rows="5"
                  placeholder="プロジェクトの詳細をご記入ください..."
                  class="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-[#e8e8e8] placeholder-[#404040] focus:border-[#22c55e] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full px-8 py-4 bg-[#22c55e] text-[#0a0a0a] font-semibold hover:bg-[#16a34a] transition-colors disabled:opacity-50"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? '送信中...' : '送信する' }}
              </button>
            </form>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-[#1a1a1a]">
      <UContainer>
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-[#606060] font-mono">
            © {{ new Date().getFullYear() }} METASYNTAX
          </p>
          <SocialMediaButtons />
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'フロントエンド開発',
    description: 'Vue.js/Nuxtを使ったモダンなWebアプリケーション開発。コンポーネント設計からパフォーマンス最適化まで対応します。'
  },
  {
    title: 'UI/UX実装',
    description: 'デザインシステムの構築やアクセシビリティに配慮したユーザーインターフェースの実装を行います。'
  },
  {
    title: '技術選定・設計',
    description: 'プロジェクトの要件に合わせた技術スタックの選定と、スケーラブルなアーキテクチャの設計を支援します。'
  },
  {
    title: 'パフォーマンス最適化',
    description: 'Core Web Vitalsの改善やバンドルサイズの削減など、Webアプリケーションの速度向上を実現します。'
  }
]

const formState = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const toast = useToast()

const scrollToContact = () => {
  if (import.meta.client) {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToAbout = () => {
  if (import.meta.client) {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: formState.value
    })
    toast.add({
      title: '送信完了',
      description: 'メッセージを送信しました。ありがとうございます！',
      color: 'success'
    })
    formState.value = { name: '', email: '', message: '' }
  } catch {
    toast.add({
      title: '送信エラー',
      description: '送信に失敗しました。時間をおいて再度お試しください。',
      color: 'error'
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Hero Animations */
.hero-eyebrow {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease-out 0.1s forwards;
}

.hero-title {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeIn 0.6s ease-out 0.2s forwards;
}

.hero-description {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeIn 0.6s ease-out 0.3s forwards;
}

.hero-buttons {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeIn 0.6s ease-out 0.4s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-eyebrow,
  .hero-title,
  .hero-description,
  .hero-buttons {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
