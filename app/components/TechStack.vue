<template>
  <div
    ref="containerRef"
    class="w-full max-w-4xl mx-auto"
  >
    <div class="flex items-center justify-end mb-4">
      <UTooltip
        v-model:open="tooltipOpen"
        :delay-duration="100"
        :ui="{
          content: '!bg-[#f6f6f4] border border-[#111] !rounded-none !shadow-none !ring-0'
        }"
        :content="{ sideOffset: 8 }"
      >
        <template #content>
          <div class="space-y-1.5 text-xs p-3 bg-[#f6f6f4] text-[#55555a]">
            <div><span class="tabular-nums font-semibold text-[#111]">100%</span>：責任者（設計/実装/運用/障害対応/育成）</div>
            <div><span class="tabular-nums font-semibold text-[#111]">80%</span>：主担当〜リード（意思決定）</div>
            <div><span class="tabular-nums font-semibold text-[#111]">60%</span>：実務で安定して使える</div>
            <div><span class="tabular-nums font-semibold text-[#111]">40%</span>：部分的に扱える</div>
            <div><span class="tabular-nums font-semibold text-[#111]">20%</span>：触った程度</div>
          </div>
        </template>
        <button
          type="button"
          class="inline-flex items-center gap-1.5 text-xs text-[#55555a] hover:text-[#1d4ed8] transition-colors group"
          @click="tooltipOpen = !tooltipOpen"
        >
          <span
            class="w-4 h-4 border border-[#111] flex items-center justify-center text-[10px] font-semibold group-hover:border-[#1d4ed8]"
          >i</span>
          <span>数値の見方</span>
        </button>
      </UTooltip>
    </div>

    <div class="space-y-6">
      <TechStackItem
        v-for="(tech, index) in technologies"
        :key="tech.name"
        :tech="tech"
        :index="index"
        :is-visible="isVisible"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const containerRef = ref(null)
const isVisible = ref(false)
const tooltipOpen = ref(false)

const technologies = [
  { name: 'Vue.js', percentage: 80 },
  { name: 'Nuxt', percentage: 80 },
  { name: 'TypeScript', percentage: 70 },
  { name: 'Laravel', percentage: 80 },
  { name: 'MySQL', percentage: 65 },
  { name: 'PostgreSQL', percentage: 60 },
  { name: 'Docker', percentage: 70 },
  { name: 'AWS', percentage: 70 },
  { name: 'Test(Vitest/Testing Library/Playwright)', percentage: 75 },
  { name: 'CI/CD（GitHub Actions）', percentage: 75 }
]

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (import.meta.client && containerRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true
            // 一度表示されたら監視を停止
            if (observer && containerRef.value) {
              observer.unobserve(containerRef.value)
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    observer.observe(containerRef.value)
  }
})

onUnmounted(() => {
  if (observer && containerRef.value) {
    observer.unobserve(containerRef.value)
    observer.disconnect()
  }
})
</script>
