<template>
  <div
    class="relative rounded-2xl overflow-hidden transition-all duration-300"
    :class="[
      isPopular? 'bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/40 shadow-xl shadow-primary/20'
        : 'bg-surface-container-lowest border border-outline-variant/20 hover:border-outline-variant/40 hover:scale-[1.02]'
    ]"
  >
    <!-- Popular Badge -->
    <div
      v-if="isPopular"
      class="absolute top-5 -right-8 bg-primary px-8 py-1.5 transform rotate-45 flex items-center justify-center shadow-lg"
    >
      <span class="text-on-primary font-bold text-xs">{{ popularLabel }}</span>
    </div>

    <!-- Card Content -->
    <div class="p-5 md:p-6 h-full flex flex-col">
      <!-- Header -->
      <div class="mb-4">
        <h3 class="text-xl font-bold text-on-surface mb-1">{{ name }}</h3>
        <p class="text-xs text-on-surface-variant mb-3">{{ subtitle }}</p>
        <div class="text-3xl font-bold text-primary">{{ currentPrice }}</div>
        <p class="text-xs text-on-surface-variant tracking-wider uppercase font-semibold mt-0.5">
          {{ packageType === 'landing' ? 'Landing Page' : packageType === 'website' ? 'Website' : 'E-Commerce' }}
        </p>
      </div>

      <!-- Divider -->
      <div class="h-px bg-outline-variant/20 mb-4"></div>

      <!-- Features -->
      <ul class="flex-1 space-y-2 mb-5">
        <li v-for="(feature, i) in features" :key="i" class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-primary text-base flex-shrink-0">check_circle</span>
          <span class="text-sm text-on-surface">{{ feature }}</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <button
        @click="scrollToContact"
        :class="[
          'w-full py-2.5 rounded-xl font-semibold transition-all text-center text-sm',
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

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
<style scoped>
.ambient-shadow {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.ambient-shadow {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
