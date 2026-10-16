<template>
  <div class="w-full">
    <!-- 専門: 説明は付けず、アイコンと名前だけを大きく出す（実績は自己紹介と OSS の節で見せる） -->
    <div
      class="reveal"
      data-idx="1"
    >
      <p class="text-[11px] font-bold tracking-[0.12em] text-[#111] mb-4">
        専門
      </p>
      <ul class="flex flex-col sm:flex-row border-y-[1.5px] border-[#111]">
        <li
          v-for="tech in specialties"
          :key="tech.name"
          class="flex-1 flex sm:flex-col items-center sm:items-start gap-4 py-6 sm:px-6 sm:first:pl-0"
        >
          <UIcon
            :name="tech.icon"
            class="w-10 h-10 sm:w-12 sm:h-12 shrink-0 text-[#111]"
          />
          <span class="text-4xl sm:text-[clamp(28px,4vw,44px)] font-black tracking-[-0.02em] text-[#111]">
            {{ tech.name }}
          </span>
        </li>
      </ul>
    </div>

    <!-- あわせて使う技術: 分野ごとにアイコンと名前を並べる -->
    <div
      class="reveal mt-14"
      data-idx="2"
    >
      <p class="text-[11px] font-bold tracking-[0.12em] text-[#111] mb-2">
        あわせて使う技術
      </p>
      <dl>
        <div
          v-for="group in others"
          :key="group.label"
          class="grid sm:grid-cols-[200px_1fr] gap-2.5 sm:gap-6 py-4 border-b border-[rgba(17,17,17,0.15)] last:border-b-0"
        >
          <dt class="text-[15px] font-bold text-[#111] sm:pt-2">
            {{ group.label }}
          </dt>
          <dd class="flex flex-wrap gap-2.5">
            <span
              v-for="tech in group.items"
              :key="tech.name"
              class="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-3.5 py-2 text-sm text-[#111]"
            >
              <UIcon
                :name="tech.icon"
                class="w-4 h-4 shrink-0"
              />
              {{ tech.name }}
            </span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
// アイコンは simple-icons（各ブランドのロゴを単色にしたもの）から取る
interface Tech {
  name: string
  icon: string
}

interface TechGroup {
  label: string
  items: Tech[]
}

const specialties: Tech[] = [
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxt' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' }
]

const others: TechGroup[] = [
  { label: 'バックエンド', items: [{ name: 'Laravel', icon: 'i-simple-icons-laravel' }] },
  {
    label: 'データベース',
    items: [
      { name: 'MySQL', icon: 'i-simple-icons-mysql' },
      { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' }
    ]
  },
  {
    label: 'テスト',
    items: [
      { name: 'Vitest', icon: 'i-simple-icons-vitest' },
      { name: 'Testing Library', icon: 'i-simple-icons-testinglibrary' },
      { name: 'Playwright', icon: 'i-simple-icons-playwright' }
    ]
  },
  {
    label: 'インフラ / CI',
    items: [
      { name: 'Docker', icon: 'i-simple-icons-docker' },
      { name: 'AWS', icon: 'i-simple-icons-amazonwebservices' },
      { name: 'GitHub Actions', icon: 'i-simple-icons-githubactions' }
    ]
  }
]
</script>
