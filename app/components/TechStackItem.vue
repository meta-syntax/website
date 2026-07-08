<template>
  <div
    class="tech-stack-item group py-4 border-b border-[rgba(17,17,17,0.15)] last:border-b-0"
    :class="{ 'is-visible': isAnimated }"
  >
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
      <span class="text-base sm:text-lg text-[#111] group-hover:text-[#1d4ed8] transition-colors">
        {{ tech.name }}
      </span>
      <div class="flex items-center gap-4">
        <div class="flex-1 sm:w-48 h-1 bg-[rgba(17,17,17,0.12)]">
          <div
            class="tech-bar-fill h-full bg-[#111]"
            :style="{ width: isAnimated ? `${tech.percentage}%` : '0%' }"
          />
        </div>
        <span
          class="text-sm text-[#55555a] tabular-nums w-12 text-right"
        >
          {{ isAnimated ? tech.percentage : '00' }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tech {
  name: string
  percentage: number
}

interface Props {
  tech: Tech
  index: number
  isVisible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isVisible: false
})

const isAnimated = ref(false)

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    const delay = props.index * 100
    setTimeout(() => {
      isAnimated.value = true
    }, delay)
  }
}, { immediate: true })
</script>

<style scoped>
.tech-bar-fill {
  transition: width 1s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .tech-bar-fill {
    transition: none;
  }
}
</style>
