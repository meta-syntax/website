<template>
  <div class="min-h-screen bg-[#f6f6f4] text-[#111]">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center overflow-hidden"
      aria-label="ヒーローセクション"
    >
      <UContainer class="relative z-10 py-20 xl:flex xl:items-end xl:justify-between xl:gap-16">
        <div class="max-w-4xl">
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
            <!-- 狭い画面では「複雑さを / 紐解き、」の句の切れ目でだけ改行する -->
            <span class="inline-block">複雑さを</span><span class="inline-block"><span class="text-[#1d4ed8]">紐解き</span>、</span><br>
            組み上げる
          </h1>

          <p
            class="reveal mt-9 text-[clamp(16px,1.6vw,19px)] text-[#55555a] max-w-[640px] leading-[1.9]"
            data-idx="2"
          >
            <!-- 改行タグの前後に空白を入れない（スマホ幅で和文の間に半角スペースが出る） -->
            Vue.js / Nuxt が専門のフリーランスエンジニアです。<br class="hidden sm:inline">要件の整理から、アーキテクチャ設計、実装まで引き受けます。
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

        <!-- 目次: 見出しの右に並べる幅がある xl 以上でだけ出す -->
        <nav
          class="reveal hidden xl:block w-[280px] shrink-0"
          data-idx="4"
          aria-label="目次"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111] mb-4">
            INDEX
          </p>
          <ol class="toc-list">
            <li
              v-for="(item, index) in toc"
              :key="item.id"
            >
              <a
                :href="`#${item.id}`"
                class="toc-row"
              >
                <span class="toc-num">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="toc-label">{{ item.label }}</span>
                <UIcon
                  name="i-lucide-arrow-down-right"
                  class="toc-icon w-4 h-4 shrink-0"
                />
              </a>
            </li>
          </ol>
        </nav>
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

    <!-- OSS Section -->
    <section
      id="oss"
      class="relative overflow-hidden py-32 border-t-[3px] border-[#111]"
      aria-labelledby="oss-heading"
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
            03 / OSS
          </p>
          <h2
            id="oss-heading"
            class="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#111]"
          >
            OSSへの貢献
          </h2>
        </div>

        <OssSection />
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
            <span class="svc-num">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="svc-title">
              <!-- 「/」の直後でだけ折り返すよう、区切りごとに改行不可のまとまりにする -->
              <template
                v-for="(part, i) in service.title.split(' / ')"
                :key="i"
              >
                <span class="inline-block">{{ part }}<template v-if="i < service.title.split(' / ').length - 1">&nbsp;/</template></span>{{ ' ' }}
              </template>
            </h3>
            <p class="svc-desc">
              {{ service.description }}
            </p>
          </div>

          <!-- 相談への導線。カードが奇数枚でも2列のグリッドを埋める -->
          <a
            href="#contact"
            class="svc-cell svc-cta reveal"
            :data-idx="services.length + 1"
          >
            <UIcon
              name="i-lucide-arrow-right"
              class="svc-cta-icon w-6 h-6"
            />
            <span class="svc-cta-label">CONTACT</span>
            <span class="svc-cta-text">ここにない仕事も、<br>まずはご相談ください。</span>
          </a>
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
              class="relative space-y-6"
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
                  maxlength="100"
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
                  maxlength="254"
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
                  maxlength="5000"
                  placeholder="プロジェクトの詳細をご記入ください..."
                  class="w-full px-4 py-3 bg-[#f6f6f4] border border-[#111] text-[#111] placeholder:text-[rgba(85,85,90,0.6)] focus:border-[#1d4ed8] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <!-- ハニーポット: 人間には見えない欄。ボットが埋めるとサーバー側で破棄する -->
              <div
                class="absolute -left-[9999px] w-px h-px overflow-hidden"
                aria-hidden="true"
              >
                <label for="website">Website</label>
                <input
                  id="website"
                  v-model="formState.website"
                  type="text"
                  tabindex="-1"
                  autocomplete="off"
                >
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
const toc = [
  { id: 'tech-stack', label: '技術スタック' },
  { id: 'about', label: '自己紹介' },
  { id: 'oss', label: 'OSSへの貢献' },
  { id: 'services', label: 'サービス' },
  { id: 'contact', label: 'お問い合わせ' }
]

const services = [
  {
    title: '要件の整理',
    description: '依頼者の話を聞いて、必要な画面と機能を一覧にします。どれから作るかも一緒に決めます。'
  },
  {
    title: '技術選定',
    description: 'フレームワークやライブラリを、チームの経験と運用の手間から選びます。選んだ理由は文書に残します。'
  },
  {
    title: 'アーキテクチャ設計 / コードレビュー',
    description: '画面、状態管理、API とのやりとりをどこで分けるかを決めて、設計書にまとめます。実装のレビューでは、その分け方どおりに書かれているかを確かめます。'
  },
  {
    title: '業務システムの画面開発',
    description: '一覧や検索、入力フォームが多い管理画面を、Vue / Nuxt と TypeScript で作ります。'
  },
  {
    title: '既存画面のリプレイス',
    description: '古い仕組みで作られた画面を、Nuxt と TypeScript に置き換えます。データの取得、状態の管理、画面の表示を役割ごとに分けて、アーキテクチャから組み直します。'
  }
]

const formState = ref({
  name: '',
  email: '',
  message: '',
  website: ''
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
    formState.value = { name: '', email: '', message: '', website: '' }
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
/* ============ Hero 目次 ============ */
.toc-list {
  border-top: 1.5px solid var(--ink);
}

.toc-list > li {
  border-bottom: 1px solid var(--ink);
}

.toc-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 0.5rem;
  color: var(--ink);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.toc-row:hover {
  background: var(--ink);
  color: var(--paper);
}

.toc-num {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--text-sub);
}

.toc-row:hover .toc-num {
  color: var(--accent);
}

.toc-label {
  flex: 1;
  font-weight: 700;
  font-size: 15px;
}

.toc-icon {
  opacity: 0.4;
}

.toc-row:hover .toc-icon {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .toc-row {
    transition: none;
  }
}

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
  transition: opacity 0.55s ease-out,
  transform 0.55s ease-out,
  background-color 0.2s ease,
  color 0.2s ease;
}

.svc-cell:last-child {
  border-bottom: none;
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

.svc-title {
  margin-bottom: 0.875rem;
  font-weight: 900;
  font-size: 22px;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: var(--ink);
}

.svc-desc {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-sub);
}

/* ============ 相談への導線セル ============ */
.svc-cta {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  min-height: 12rem;
  background: var(--accent);
  color: #fff;
}

.svc-cta-icon {
  margin-bottom: auto;
}

.svc-cta-label {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.12em;
}

.svc-cta-text {
  font-weight: 900;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

/*
 * 反転はマウス操作の端末だけにする。スマホではタップで :hover が付いたまま残り、
 * CONTACT のセルがお問い合わせへ移動したあとも黒背景のままになるため
 */
@media (hover: hover) {
  .svc-cell:hover {
    background: var(--ink);
    color: var(--paper);
  }

  .svc-cell:hover .svc-num {
    color: var(--accent);
  }

  .svc-cell:hover .svc-title {
    color: var(--paper);
  }

  .svc-cell:hover .svc-desc {
    color: var(--paper);
  }

  .svc-cta:hover {
    background: var(--ink);
  }
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

  .svc-cell:nth-last-child(2):nth-child(odd) {
    border-bottom: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .svc-cell {
    transition: none;
  }
}
</style>
