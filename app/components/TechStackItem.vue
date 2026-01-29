<template>
  <div
    class="tech-stack-item group py-4 border-b border-[#1a1a1a] last:border-b-0"
    :class="{ 'is-visible': isAnimated }"
  >
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
      <span class="text-base sm:text-lg text-[#e8e8e8] group-hover:text-[#22c55e] transition-colors">
        {{ tech.name }}
      </span>
      <div class="flex items-center gap-4">
        <div class="w-48 h-1 bg-[#1a1a1a]">
          <div
            class="h-full bg-[#22c55e] transition-all duration-1000 ease-out"
            :style="{ width: isAnimated ? `${tech.percentage}%` : '0%' }"
          />
        </div>
        <span
          class="text-sm font-mono text-[#606060] tabular-nums w-12 text-right"
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
