<template>
  <div class="max-w-3xl mx-auto px-6 lg:px-8 py-24">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-10">{{ $t('legal.privacy.title') }}</h1>
    <div class="text-on-surface-variant space-y-6 leading-relaxed">
      <p>{{ $t('legal.privacy.intro') }}</p>
      <template v-for="(section, i) in ($tm('legal.privacy.sections') as any[])" :key="i">
        <h2 class="text-xl font-semibold text-on-surface mt-8">{{ $rt(section.heading) }}</h2>
        <p>{{ $rt(section.body) }}</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: () => t('seo.privacy.title'),
  ogTitle: () => t('seo.privacy.title'),
  description: () => t('seo.privacy.description'),
  ogDescription: () => t('seo.privacy.description'),
})
</script>
