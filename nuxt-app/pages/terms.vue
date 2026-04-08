<template>
  <div class="max-w-3xl mx-auto px-6 lg:px-8 py-24">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-10">{{ $t('legal.terms.title') }}</h1>
    <div class="text-on-surface-variant space-y-6 leading-relaxed">
      <p>{{ $t('legal.terms.intro') }}</p>
      <h2 class="text-xl font-semibold text-on-surface mt-8">{{ $t('legal.terms.servicesTitle') }}</h2>
      <p>{{ $t('legal.terms.servicesText') }}</p>
      <h2 class="text-xl font-semibold text-on-surface mt-8">{{ $t('legal.terms.liabilityTitle') }}</h2>
      <p>{{ $t('legal.terms.liabilityText') }}</p>
      <h2 class="text-xl font-semibold text-on-surface mt-8">{{ $t('legal.terms.contactTitle') }}</h2>
      <p>{{ $t('legal.terms.contactText') }}</p>
    </div>
  </div>
</template>
