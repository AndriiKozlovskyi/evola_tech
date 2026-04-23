<template>
  <div class="max-w-3xl mx-auto px-6 lg:px-8 py-24">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-10">{{ $t('legal.imprint.title') }}</h1>
    <div class="text-on-surface-variant space-y-4 leading-relaxed">
      <p><strong class="text-on-surface">{{ $t('legal.imprint.company') }}</strong></p>
      <p class="text-sm">{{ $t('legal.imprint.details') }}</p>
      <div class="space-y-1 pt-2 text-sm">
        <p><span class="font-semibold text-on-surface">{{ $t('legal.imprint.emailLabel') }}:</span> {{ $t('legal.imprint.email') }}</p>
        <p><span class="font-semibold text-on-surface">{{ $t('legal.imprint.phoneLabel') }}:</span> {{ $t('legal.imprint.phone') }}</p>
        <p><span class="font-semibold text-on-surface">{{ $t('legal.imprint.countryLabel') }}:</span> {{ $t('legal.imprint.country') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: () => t('seo.imprint.title'),
  ogTitle: () => t('seo.imprint.title'),
  description: () => t('seo.imprint.description'),
  ogDescription: () => t('seo.imprint.description'),
})
</script>
