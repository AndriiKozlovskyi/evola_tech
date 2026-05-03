<template>
  <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface" id="pricing">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16 max-w-3xl">
        <p class="text-label-md font-bold text-primary tracking-[0.2em] uppercase mb-4">
          {{ $t('pricing.eyebrow') }}
        </p>
        <h2 class="text-3xl md:text-5xl font-semibold tracking-tight text-on-surface mb-6 leading-tight">
          {{ $t('pricing.title') }}
        </h2>
        <p class="text-body-lg text-on-surface-variant leading-relaxed">
          {{ $t('pricing.description') }}
        </p>
      </div>

      <!-- Website Type Toggle -->
      <div class="mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <p class="text-sm font-semibold text-on-surface">{{ $t('pricing.selectType') }}:</p>
        <div class="flex gap-3">
          <button
            v-for="type in websiteTypes"
            :key="type.value"
            @click="selectedType = type.value"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all',
              selectedType === type.value
                ? 'bg-primary text-on-primary shadow-md shadow-primary/20'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
            ]"
          >
            {{ type.label }}
          </button>
        </div>
      </div>

      <!-- Popular Note -->
      <div class="mb-12 p-4 bg-primary/10 border border-primary/30 rounded-lg text-center">
        <p class="text-sm font-semibold text-primary">
          💡 {{ $t('pricing.mostPopular') }}
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <CardsPricingCard
          v-for="(pkg, i) in packages"
          :key="`${pkg.id}-${selectedType}`"
          :name="pkg.name"
          :subtitle="pkg.subtitle"
          :pricing="pkg.pricing"
          :features="pkg.features"
          :limits="pkg.limits"
          :package-type="selectedType"
          :is-popular="pkg.id === 'growth'"
          :popular-label="$t('pricing.mostPopular')"
          :cta="$t('pricing.cta')"
        />
      </div>

      <!-- Additional Info -->
      <div class="bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant/20">
        <h3 class="text-lg font-bold text-on-surface mb-6">{{ $t('pricing.importantInfo.title') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-semibold text-on-surface mb-3 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">info</span>
              {{ $t('pricing.importantInfo.overview') }}
            </h4>
            <ul class="space-y-2 text-sm text-on-surface-variant">
              <li v-for="(item, i) in $tm('pricing.importantInfo.items')" :key="i" class="flex items-start gap-2">
                <span class="text-primary mt-1">•</span>
                <span>{{ $rt(item) }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-on-surface mb-3 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">warning</span>
              {{ $t('pricing.importantInfo.important') }}
            </h4>
            <ul class="space-y-2 text-sm text-on-surface-variant">
              <li v-for="(item, i) in $tm('pricing.importantInfo.warnings')" :key="i" class="flex items-start gap-2">
                <span class="text-primary/60 mt-1">⚠</span>
                <span>{{ $rt(item) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <p class="text-on-surface-variant mb-6">{{ $t('pricing.ready') }}</p>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          {{ $t('pricing.contactUs') }}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedType = ref<'landing' | 'website' | 'ecommerce'>('website')

const websiteTypes = [
  { value: 'landing', label: 'Landing Page' },
  { value: 'website', label: 'Website' },
  { value: 'ecommerce', label: 'E-Commerce' }
]

const packages = [
  {
    id: 'start',
    name: 'START',
    subtitle: 'Perfect for testing and launching',
    pricing: {
      landing: '€1,200 - €1,500',
      website: '€1,500 - €2,000',
      ecommerce: 'Custom Quote'
    },
    features: [
      'Individual design',
      'Responsive layout',
      'Contact forms',
      'Basic SEO structure',
      'Fast delivery',
      'Initial setup'
    ],
    limits: [
      'Landing: up to 7 blocks',
      'Website: up to 3 pages',
      'E-Commerce: up to 5 products'
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH',
    subtitle: 'Build authority and attract clients',
    pricing: {
      landing: '€2,000 - €2,500',
      website: '€2,500 - €3,500',
      ecommerce: '€3,500 - €4,500'
    },
    features: [
      'Everything in START',
      'SEO optimization',
      'Keyword research',
      'Meta tags & structure',
      'Google Analytics',
      'Extended support',
      'Performance optimization'
    ],
    limits: [
      'Landing: up to 7 blocks',
      'Website: up to 5-7 pages',
      'E-Commerce: up to 20 products'
    ]
  },
  {
    id: 'pro',
    name: 'PRO',
    subtitle: 'Full-scale growth system',
    pricing: {
      landing: '€3,000 - €4,000',
      website: '€4,000 - €6,000',
      ecommerce: '€5,000 - €8,000'
    },
    features: [
      'Everything in GROWTH',
      'Google & Meta ads setup',
      'Campaign management',
      'Initial SMM strategy',
      '1-3 months support',
      'Advanced analytics',
      'Conversion optimization',
      'Ongoing maintenance'
    ],
    limits: [
      'Landing: unlimited blocks',
      'Website: unlimited pages',
      'E-Commerce: up to 20 products',
      'Ad budget: separate',
      '1-3 months support included'
    ]
  }
]
</script>

<style scoped>
#pricing {
  position: relative;
}
</style>
