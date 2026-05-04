<template>
  <section class="min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 max-w-7xl mx-auto" id="home">
    <div class="max-w-3xl space-y-8">
      <span class="text-label-md font-bold text-primary tracking-[0.2em] uppercase">
        {{ $t('hero.label') }}
      </span>
      <h1 class="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] text-on-surface">
        {{ $t('hero.headline') }} <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
          {{ $t('hero.headlineHighlight') }}
        </span>
      </h1>
      <p class="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
        {{ $t('hero.description') }}
      </p>
      <div class="pt-4 flex flex-col sm:flex-row gap-4">
        <a
          href="#portfolio"
          class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          {{ $t('hero.cta1') }}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
        <a
          href="#services"
          class="ghost-border text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-surface-container-low text-center"
        >
          {{ $t('hero.cta2') }}
        </a>
      </div>
    </div>
  </section>
</template>
