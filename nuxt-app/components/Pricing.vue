<template>
  <section class="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden pricing-bg" id="pricing">
    <!-- Decorative orbs -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"></div>
      <div class="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]"></div>
      <div class="absolute -bottom-24 left-1/3 w-[350px] h-[350px] rounded-full bg-primary/6 blur-[90px]"></div>
      <div class="absolute inset-0 pricing-grid opacity-[0.04]"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
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
      <div class="bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant/20 shadow-lg">
        <h3 class="text-lg font-bold text-on-surface mb-6">{{ $t('pricing.importantInfo.title') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-semibold text-on-surface mb-3 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">info</span>
              {{ $t('pricing.importantInfo.overview') }}
            </h4>
            <ul class="space-y-2 text-sm text-on-surface-variant">
              <li v-for="(item, i) in $tm('pricing.importantInfo.items')" :key="i" class="flex items-start gap-2">
                <span class="text-primary">•</span>
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
                <span class="text-primary/60 ">⚠</span>
                <span>{{ $rt(item) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <p class="text-on-surface-variant mb-6">{{ $t('pricing.ready') }}</p>
        <button
          @click="scrollToContact"
          class="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          {{ $t('pricing.contactUs') }}
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t, tm, rt } = useI18n()

const selectedType = ref<'landing' | 'website' | 'ecommerce'>('website')

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const websiteTypes = computed(() => [
  { value: 'landing', label: t('pricing.types.landing') },
  { value: 'website', label: t('pricing.types.website') },
  { value: 'ecommerce', label: t('pricing.types.ecommerce') }
])

const packages = computed(() => [
  {
    id: 'start',
    name: t('pricing.packages.start.name'),
    subtitle: t('pricing.packages.start.subtitle'),
    pricing: {
      landing: 'from €350',
      website: 'from €750',
      ecommerce: 'from €1,200'
    },
    features: (tm('pricing.packages.start.features') as unknown[]).map(f => rt(f as string)),
    limits: (tm('pricing.packages.start.limits') as unknown[]).map(l => rt(l as string))
  },
  {
    id: 'growth',
    name: t('pricing.packages.growth.name'),
    subtitle: t('pricing.packages.growth.subtitle'),
    pricing: {
      landing: 'from €650',
      website: 'from €1,200',
      ecommerce: 'from €2,000'
    },
    features: (tm('pricing.packages.growth.features') as unknown[]).map(f => rt(f as string)),
    limits: (tm('pricing.packages.growth.limits') as unknown[]).map(l => rt(l as string))
  },
  {
    id: 'pro',
    name: t('pricing.packages.pro.name'),
    subtitle: t('pricing.packages.pro.subtitle'),
    pricing: {
      landing: 'from €1,000',
      website: 'from €2,300',
      ecommerce: 'from €5,000'
    },
    features: (tm('pricing.packages.pro.features') as unknown[]).map(f => rt(f as string)),
    limits: (tm('pricing.packages.pro.limits') as unknown[]).map(l => rt(l as string))
  }
])
</script>

<style scoped>
.pricing-bg {

  background-color: #F1F4F9;
}

.pricing-grid {
  background-image:
    linear-gradient(var(--md-sys-color-outline-variant, #49454f) 1px, transparent 1px),
    linear-gradient(90deg, var(--md-sys-color-outline-variant, #49454f) 1px, transparent 1px);
  background-size: 48px 48px;
}
</style>
