<template>
  <div class="max-w-3xl mx-auto px-6 lg:px-8 py-24">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-10">{{ $t('legal.gdpr.title') }}</h1>
    <div class="text-on-surface-variant space-y-6 leading-relaxed">
      <p>{{ $t('legal.gdpr.intro') }}</p>
      <h2 class="text-xl font-semibold text-on-surface mt-8">{{ $t('legal.gdpr.rightsTitle') }}</h2>
      <p>{{ $t('legal.gdpr.rightsText') }}</p>
      <h2 class="text-xl font-semibold text-on-surface mt-8">{{ $t('legal.gdpr.controllerTitle') }}</h2>
      <p>{{ $t('legal.gdpr.controllerText') }}</p>
      <h2 class="text-xl font-semibold text-on-surface mt-8">{{ $t('legal.gdpr.contactTitle') }}</h2>
      <p>{{ $t('legal.gdpr.contactText') }}</p>
    </div>
  </div>
</template>
