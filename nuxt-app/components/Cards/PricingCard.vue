<template>
  <div
    class="relative rounded-2xl overflow-hidden transition-all duration-300"
    :class="[
      isPopular
        ? 'bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/40 scale-100 shadow-xl shadow-primary/20'
        : 'bg-surface-container-lowest border border-outline-variant/20 hover:border-outline-variant/40 hover:scale-[1.02]'
    ]"
  >
    <!-- Popular Badge -->
    <div
      v-if="isPopular"
      class="absolute top-3 md:top-5 -right-8 md:-right-10 bg-primary px-8 md:px-10 py-1.5 md:py-2 transform rotate-45 flex items-center justify-center shadow-lg"
    >
      <span class="text-on-primary font-bold text-xs md:text-sm -text-                                                                                             rotate-45">{{ popularLabel }}</span>
    </div>

    <!-- Card Content -->
    <div class="p-6 md:p-8 h-full flex flex-col">
      <!-- Header -->
      <div class="mb-4 md:mb-6">
        <h3 class="text-xl md:text-2xl font-bold text-on-surface mb-2">{{ name }}</h3>
        <p class="text-sm text-on-surface-variant mb-3 md:mb-4">{{ subtitle }}</p>
        <div class="space-y-1">
          <div class="text-3xl md:text-4xl font-bold text-primary">{{ currentPrice }}</div>
          <p class="text-xs text-on-surface-variant tracking-wider uppercase font-semibold">
            {{ packageType === 'landing' ? 'Landing Page' : packageType === 'website' ? 'Website' : 'E-Commerce' }}
          </p>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-outline-variant/20 mb-4 md:mb-6"></div>

      <!-- Features -->
      <div class="flex-1 mb-4 md:mb-6">
        <p class="text-xs text-on-surface-variant font-semibold tracking-wider uppercase mb-3 md:mb-4">What's Included:</p>
        <ul class="space-y-2.5 md:space-y-3">
          <li v-for="(feature, i) in features" :key="i" class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-base md:text-lg flex-shrink-0 pt-0.5">check_circle</span>
            <span class="text-sm text-on-surface leading-snug">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <!-- Limitations -->
      <div class="mb-4 md:mb-6">
        <p class="text-xs text-on-surface-variant font-semibold tracking-wider uppercase mb-2 md:mb-3">Limits:</p>
        <div class="space-y-1.5 md:space-y-2">
          <div v-for="(limit, i) in limits" :key="`limit-${i}`" class="text-xs text-on-surface-variant flex items-center gap-2">
            <span class="w-1 h-1 bg-on-surface-variant rounded-full flex-shrink-0 mt-1.5"></span>
            <span>{{ limit }}</span>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <button
        :class="[
          'w-full py-2.5 md:py-3 rounded-xl font-semibold transition-all text-center text-sm md:text-base',
          isPopular
            ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]'
            : 'border border-outline-variant/40 text-primary hover:bg-surface-container-low active:scale-[0.98]'
        ]"
      >
        {{ cta }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  subtitle: string
  pricing: {
    landing: string
    website: string
    ecommerce: string
  }
  features: string[]
  limits: string[]
  packageType: 'landing' | 'website' | 'ecommerce'
  isPopular?: boolean
  cta?: string
  popularLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  isPopular: false,
  cta: 'Get Started',
  popularLabel: 'MOST POPULAR'
})

const currentPrice = computed(() => {
  return props.pricing[props.packageType]
})
</script>

<style scoped>
.ambient-shadow {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
