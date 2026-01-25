<template>
  <div
    class="tech-stack-item group"
    :class="{ 'is-visible': isAnimated }"
  >
    <div class="flex items-center justify-between gap-4 mb-3">
      <span class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
        {{ tech.name }}
      </span>
      <span
        class="percentage-label text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 tabular-nums"
        :class="{ 'is-visible': isAnimated }"
        :style="{ '--index': index }"
      >
        {{ tech.percentage }}%
      </span>
    </div>
    <div class="relative h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
      <div
        ref="barRef"
        class="tech-bar h-full rounded-full transition-all duration-[1500ms] ease-out"
        :class="{ 'is-animated': isAnimated }"
        :style="barStyle"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  tech: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})

const barRef = ref(null)
const isAnimated = ref(false)

const barStyle = computed(() => {
  if (!isAnimated.value) {
    return {
      width: '0%',
      opacity: '0'
    }
  }
  return {
    width: `${props.tech.percentage}%`,
    opacity: '1'
  }
})

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    // 段階的アニメーション: 各アイテムに200msの遅延
    const delay = props.index * 200
    setTimeout(() => {
      isAnimated.value = true
    }, delay)
  }
}, { immediate: true })
</script>

<style scoped>
.tech-bar {
  background: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
  box-shadow:
    0 0 10px rgba(6, 182, 212, 0.3),
    0 0 20px rgba(6, 182, 212, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  will-change: width, opacity, transform, filter;
  transform-origin: left;
}

.tech-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
  opacity: 0;
  transition: opacity 0.3s;
}

.tech-bar.is-animated::after {
  opacity: 1;
}

.group:hover .tech-bar {
  transform: scaleY(1.15);
  filter: brightness(1.15);
  box-shadow:
    0 0 15px rgba(6, 182, 212, 0.4),
    0 0 30px rgba(6, 182, 212, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              filter 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.percentage-label {
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: calc(var(--index, 0) * 200ms + 400ms);
}

.percentage-label.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* ダークモード対応のグロー効果 */
.dark .tech-bar {
  box-shadow:
    0 0 12px rgba(6, 182, 212, 0.4),
    0 0 24px rgba(6, 182, 212, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.dark .group:hover .tech-bar {
  box-shadow:
    0 0 18px rgba(6, 182, 212, 0.5),
    0 0 36px rgba(6, 182, 212, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* モバイル対応 */
@media (max-width: 640px) {
  .tech-stack-item {
    padding: 0.5rem 0;
  }
}
</style>
