<template>
  <div
    ref="containerRef"
    class="w-full max-w-4xl mx-auto"
  >
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
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const isVisible = ref(false)

const technologies = [
  { name: 'Vue.js', percentage: 90 },
  { name: 'Nuxt', percentage: 85 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'PostgreSQL', percentage: 70 },
  { name: 'Docker', percentage: 65 },
  { name: 'AWS', percentage: 70 },
  { name: 'Redis', percentage: 68 }
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
