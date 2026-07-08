<template>
  <div
    class="min-h-screen bg-[#f6f6f4] text-[#111]"
    role="main"
  >
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center overflow-hidden"
      aria-label="ヒーローセクション"
    >
      <UContainer class="relative z-10 py-20">
        <div class="max-w-3xl">
          <!-- ステータスバッジ -->
          <div
            class="reveal inline-flex items-center gap-2.5 border-[1.5px] border-[#111] px-3.5 py-2 mb-10"
            data-idx="0"
          >
            <span class="w-2 h-2 bg-[#1d4ed8]" />
            <span class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111]">AVAILABLE FOR WORK</span>
          </div>

          <!-- メインタイトル -->
          <h1
            class="reveal text-[clamp(56px,8.5vw,108px)] font-black text-[#111] leading-[1.08] tracking-[-0.03em]"
            data-idx="1"
          >
            複雑を<span class="text-[#1d4ed8]">紐解き</span>、<br>
            組み上げる
          </h1>

          <p
            class="reveal mt-9 text-[clamp(16px,1.6vw,19px)] text-[#55555a] max-w-[640px] leading-[1.9]"
            data-idx="2"
          >
            8年の経験を持つフリーランスエンジニア。<br>
            Vue.js / Nuxt を中心に、設計から実装まで。
          </p>

          <!-- CTA -->
          <div
            class="reveal mt-11 flex flex-wrap gap-4"
            data-idx="3"
          >
            <button
              class="px-7 py-[18px] bg-[#1d4ed8] text-white font-bold border-[1.5px] border-[#1d4ed8] hover:bg-[#111] hover:border-[#111] transition-colors"
              @click="scrollToContact"
            >
              仕事の相談をする
            </button>
            <button
              class="link-underline px-7 py-[18px] border-[1.5px] border-[#111] text-[#111] font-bold hover:bg-[#111] hover:text-[#f6f6f4] transition-colors"
              @click="scrollToAbout"
            >
              詳しく見る
            </button>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Tech Stack Section -->
    <section
      id="tech-stack"
      class="relative overflow-hidden py-32 border-t-[3px] border-[#111]"
      aria-labelledby="tech-stack-heading"
    >
      <span
        class="ghost"
        aria-hidden="true"
      >01</span>
      <UContainer class="relative z-10">
        <div
          class="reveal mb-16"
          data-idx="0"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111]">
            01 / SKILLS
          </p>
          <h2
            id="tech-stack-heading"
            class="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#111]"
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
      class="relative overflow-hidden py-32 border-t-[3px] border-[#111]"
      aria-labelledby="about-heading"
    >
      <span
        class="ghost"
        aria-hidden="true"
      >02</span>
      <UContainer class="relative z-10">
        <div
          class="reveal mb-16"
          data-idx="0"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111]">
            02 / ABOUT
          </p>
          <h2
            id="about-heading"
            class="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#111]"
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
      class="relative overflow-hidden py-32 border-t-[3px] border-[#111]"
      aria-labelledby="works-heading"
    >
      <span
        class="ghost"
        aria-hidden="true"
      >03</span>
      <UContainer class="relative z-10">
        <div
          class="reveal mb-16"
          data-idx="0"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111]">
            03 / WORKS
          </p>
          <h2
            id="works-heading"
            class="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#111]"
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
      class="relative overflow-hidden py-32 border-t-[3px] border-[#111]"
      aria-labelledby="services-heading"
    >
      <span
        class="ghost"
        aria-hidden="true"
      >04</span>
      <UContainer class="relative z-10">
        <div
          class="reveal mb-16"
          data-idx="0"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111]">
            04 / SERVICES
          </p>
          <h2
            id="services-heading"
            class="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#111]"
          >
            サービス
          </h2>
        </div>

        <div class="svc-table">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="svc-cell reveal"
            :data-idx="index + 1"
          >
            <span class="svc-num">0{{ index + 1 }}</span>
            <h3 class="svc-title">
              {{ service.title }}
            </h3>
            <p class="svc-desc">
              {{ service.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="relative overflow-hidden py-32 border-t-[3px] border-[#111]"
      aria-labelledby="contact-heading"
    >
      <span
        class="ghost"
        aria-hidden="true"
      >05</span>
      <UContainer class="relative z-10">
        <div
          class="reveal mb-16"
          data-idx="0"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111]">
            05 / CONTACT
          </p>
          <h2
            id="contact-heading"
            class="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#111]"
          >
            お問い合わせ
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div
            class="reveal"
            data-idx="1"
          >
            <p class="text-[#55555a] text-lg leading-relaxed mb-8">
              プロジェクトのご相談、お見積もりなど<br>
              お気軽にご連絡ください。
            </p>

            <a
              href="mailto:souta.k@meta-syntax.biz"
              class="group inline-flex items-center gap-3 text-[#111] hover:text-[#1d4ed8] transition-colors"
            >
              <span
                class="w-10 h-10 flex items-center justify-center border border-[#111] group-hover:border-[#1d4ed8] transition-colors"
              >
                <UIcon
                  name="i-lucide-mail"
                  class="w-5 h-5"
                />
              </span>
              <span class="link-underline text-lg">souta.k@meta-syntax.biz</span>
            </a>

            <div class="mt-8 pt-8 border-t border-[rgba(17,17,17,0.15)]">
              <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#55555a] mb-4">
                SOCIAL
              </p>
              <SocialMediaButtons />
            </div>
          </div>

          <!-- Contact Form -->
          <div
            class="reveal"
            data-idx="2"
          >
            <form
              class="space-y-6"
              @submit.prevent="showConfirm"
            >
              <div>
                <label
                  for="name"
                  class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#55555a] mb-2"
                >
                  NAME
                </label>
                <input
                  id="name"
                  v-model="formState.name"
                  type="text"
                  placeholder="山田 太郎"
                  class="w-full px-4 py-3 bg-[#f6f6f4] border border-[#111] text-[#111] placeholder:text-[rgba(85,85,90,0.6)] focus:border-[#1d4ed8] focus:outline-none transition-colors"
                  required
                >
              </div>
              <div>
                <label
                  for="email"
                  class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#55555a] mb-2"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  v-model="formState.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 bg-[#f6f6f4] border border-[#111] text-[#111] placeholder:text-[rgba(85,85,90,0.6)] focus:border-[#1d4ed8] focus:outline-none transition-colors"
                  required
                >
              </div>
              <div>
                <label
                  for="message"
                  class="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#55555a] mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  v-model="formState.message"
                  rows="5"
                  placeholder="プロジェクトの詳細をご記入ください..."
                  class="w-full px-4 py-3 bg-[#f6f6f4] border border-[#111] text-[#111] placeholder:text-[rgba(85,85,90,0.6)] focus:border-[#1d4ed8] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full px-8 py-4 bg-[#1d4ed8] text-white font-bold hover:bg-[#111] transition-colors disabled:opacity-50"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? '送信中...' : '送信する' }}
              </button>
            </form>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Confirm Dialog -->
    <UModal
      v-model:open="isConfirmOpen"
      :ui="{ content: 'rounded-none shadow-none ring-0' }"
    >
      <template #content>
        <div class="bg-[#f6f6f4] border-t-[3px] border-[#111] p-8 space-y-6">
          <h3 class="text-lg font-bold text-[#111]">
            送信確認
          </h3>
          <p class="text-sm text-[#55555a]">
            以下の内容で送信します。よろしいですか？
          </p>
          <dl class="space-y-3 text-sm">
            <div>
              <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#55555a]">
                NAME
              </dt>
              <dd class="text-[#111] mt-1">
                {{ formState.name }}
              </dd>
            </div>
            <div>
              <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#55555a]">
                EMAIL
              </dt>
              <dd class="text-[#111] mt-1">
                {{ formState.email }}
              </dd>
            </div>
            <div>
              <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#55555a]">
                MESSAGE
              </dt>
              <dd class="text-[#111] mt-1 whitespace-pre-wrap">
                {{ formState.message }}
              </dd>
            </div>
          </dl>
          <div class="flex gap-3 justify-end">
            <button
              class="px-6 py-3 border border-[#111] text-[#111] hover:bg-[#111] hover:text-[#f6f6f4] transition-colors"
              @click="isConfirmOpen = false"
            >
              キャンセル
            </button>
            <button
              class="px-6 py-3 bg-[#1d4ed8] text-white font-bold hover:bg-[#111] transition-colors"
              @click="handleSubmit"
            >
              送信する
            </button>
          </div>
        </div>
      </template>
    </UModal>

    <!-- Footer -->
    <footer class="py-8 border-t-[3px] border-[#111]">
      <UContainer>
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-[13px] font-bold tracking-[0.06em] text-[#111]">
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
const isConfirmOpen = ref(false)
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

const showConfirm = () => {
  isConfirmOpen.value = true
}

const handleSubmit = async () => {
  isConfirmOpen.value = false
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

// スクロール出現アニメーション + ゴースト数字のパララックス（モックから移植）
let revealObserver: IntersectionObserver | null = null
let scrollHandler: (() => void) | null = null

const setupMotion = () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

  // reduced-motion: 演出を全て無効化して静的表示にする
  if (reduce) {
    reveals.forEach(el => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }
      const el = entry.target as HTMLElement
      const delay = Number(el.dataset.idx ?? 0) * 80
      el.style.transitionDelay = `${delay}ms`
      el.classList.add('is-visible')
      // 出現後に遅延をクリアし、hover等の後続トランジションへ漏れないようにする
      window.setTimeout(() => {
        el.style.transitionDelay = ''
      }, delay + 650)
      obs.unobserve(el)
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })

  reveals.forEach(el => observer.observe(el))
  revealObserver = observer

  const ghosts = Array.from(document.querySelectorAll<HTMLElement>('.ghost'))
  if (ghosts.length === 0) {
    return
  }

  let ticking = false
  const update = () => {
    const vh = window.innerHeight
    ghosts.forEach((g) => {
      const sec = g.closest('section')
      if (!sec) {
        return
      }
      const rect = sec.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const progress = (vh / 2 - center) / vh
      const y = Math.max(-40, Math.min(40, progress * 40))
      g.style.transform = `translateY(${y.toFixed(1)}px)`
    })
    ticking = false
  }

  scrollHandler = () => {
    if (!ticking) {
      window.requestAnimationFrame(update)
      ticking = true
    }
  }

  window.addEventListener('scroll', scrollHandler, { passive: true })
  window.addEventListener('resize', scrollHandler, { passive: true })
  update()
}

onMounted(() => {
  if (import.meta.client) {
    setupMotion()
  }
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
    window.removeEventListener('resize', scrollHandler)
  }
})
</script>

<style scoped>
/* ============ 表組み風 Services ============ */
.svc-table {
  border: 1px solid var(--ink);
  display: grid;
  grid-template-columns: 1fr;
}

.svc-cell {
  position: relative;
  padding: 2.25rem 2rem;
  border-bottom: 1px solid var(--ink);
  /* reveal（opacity/transform）とホバー反転（背景/文字色）の両方を animate する */
  transition:
    opacity 0.55s ease-out,
    transform 0.55s ease-out,
    background-color 0.2s ease,
    color 0.2s ease;
}

.svc-cell:last-child {
  border-bottom: none;
}

.svc-cell:hover {
  background: var(--ink);
  color: var(--paper);
}

.svc-num {
  display: block;
  margin-bottom: 1.375rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--text-sub);
}

.svc-cell:hover .svc-num {
  color: var(--accent);
}

.svc-title {
  margin-bottom: 0.875rem;
  font-weight: 900;
  font-size: 22px;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: var(--ink);
}

.svc-cell:hover .svc-title {
  color: var(--paper);
}

.svc-desc {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-sub);
}

.svc-cell:hover .svc-desc {
  color: var(--paper);
}

@media (min-width: 640px) {
  .svc-table {
    grid-template-columns: 1fr 1fr;
  }

  .svc-cell {
    border-right: 1px solid var(--ink);
  }

  .svc-cell:nth-child(2n) {
    border-right: none;
  }

  .svc-cell:nth-child(n + 3) {
    border-bottom: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .svc-cell {
    transition: none;
  }
}
</style>
