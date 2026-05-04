<template>
  <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface" id="contact">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
      <div class="space-y-8">
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
          {{ $t('contact.title') }} <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
            {{ $t('contact.titleHighlight') }}
          </span>
        </h2>
        <p class="text-on-surface-variant max-w-sm leading-relaxed">
          {{ $t('contact.description') }}
        </p>
        <div class="space-y-6 pt-6">
          <div class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <span class="material-symbols-outlined text-primary text-xl">mail</span>
            </div>
            <div>
              <p class="font-semibold text-sm text-on-surface">Email</p>
              <a
                href="mailto:team@evola-tec.com"
                class="text-on-surface-variant text-sm hover:text-primary transition-colors"
              >
                {{ $t('contact.email') }}
              </a>
            </div>
          </div>
          <div class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <span class="material-symbols-outlined text-primary text-xl">call</span>
            </div>
            <div>
              <p class="font-semibold text-sm text-on-surface">{{ $t('contact.phoneLabel') }}</p>
              <a
                href="tel:+48789711631"
                class="text-on-surface-variant text-sm hover:text-primary transition-colors"
              >
                {{ $t('contact.phone') }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <LazyFormsContactForm />
    </div>
  </section>
</template>
