<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center px-8 pt-20 max-w-7xl mx-auto" id="home">
      <div class="max-w-4xl space-y-8">
        <span class="text-label-md font-bold text-primary tracking-[0.2em] uppercase">
          {{ $t('hero.label') }}
        </span>
        <h1 class="text-7xl font-bold tracking-tighter leading-[1.1] text-on-surface">
          {{ $t('hero.headline') }} <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
            {{ $t('hero.headlineHighlight') }}
          </span>
        </h1>
        <p class="text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
          {{ $t('hero.description') }}
        </p>
        <div class="pt-4 flex gap-4">
          <NuxtLink
            :to="localePath('/#portfolio')"
            class="bg-primary text-on-primary px-8 py-4 rounded-md font-semibold text-lg flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            {{ $t('hero.cta1') }}
            <span class="material-symbols-outlined">arrow_forward</span>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/#services')"
            class="ghost-border text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all hover:bg-surface-container-low"
          >
            {{ $t('hero.cta2') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="py-32 px-8 bg-surface-container-low" id="portfolio">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <h2 class="text-4xl font-semibold tracking-tight text-on-surface mb-4">
            {{ $t('portfolio.title') }}
          </h2>
          <div class="w-20 h-1 bg-primary"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-32 px-8 bg-surface" id="services">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 class="text-4xl font-semibold tracking-tight mb-6">
            {{ $t('services.title') }}
          </h2>
          <p class="text-body-lg text-on-surface-variant max-w-md leading-relaxed mb-10">
            {{ $t('services.description') }}
          </p>
          <div class="flex flex-wrap gap-3">
            <TechnicalGhostChip
              v-for="tag in $t('services.tags')"
              :key="tag"
              :label="tag"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            v-for="service in $t('services.items')"
            :key="service.title"
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-32 px-8 bg-surface-container-low overflow-hidden relative" id="about">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div class="w-full md:w-1/2 relative">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <img
            class="rounded-2xl relative z-10 w-full shadow-2xl grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZJNN3j-5dQaPPuiraqBYWeNeeNxqAYhWn_34P7vvYTao2fSd969YWWzN7dow0WRoTobSkg2deQCAgUxQh9dn7FMqP2rUmMus49Wd948Kj80MWhFUtk2IXDy7f9ke4mIcaZPeQCLbDMhyoYGWrjCWLUWJdayspOrGVrEe7I4bmjPuKZLwVN-ZYkgb_TUedGSb1zp1f8ZFk6CZ_E0K2idlqxUEJZtbuHfduFemZlRvApRI7SHK5sG9ZE62iwdwk7Zn9XotywUZ8o0k"
            alt="Team collaboration"
          />
          <div class="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl shadow-xl z-20">
            <div class="text-on-primary text-4xl font-bold">
              {{ $t('about.yearsExperience') }}
            </div>
            <div class="text-primary-fixed-dim text-xs font-semibold tracking-wider uppercase">
              {{ $t('about.yearsLabel') }}
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-4xl font-semibold tracking-tight">
            {{ $t('about.title') }}
          </h2>
          <p class="text-body-lg text-on-surface-variant leading-relaxed">
            {{ $t('about.description1') }}
          </p>
          <p class="text-body-lg text-on-surface-variant leading-relaxed">
            {{ $t('about.description2') }}
          </p>
          <ul class="space-y-4 pt-4">
            <li
              v-for="value in $t('about.values')"
              :key="value"
              class="flex items-center gap-3"
            >
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">
                check_circle
              </span>
              <span class="font-medium">{{ value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-32 px-8 bg-surface" id="contact">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div class="space-y-8">
          <h2 class="text-4xl font-semibold tracking-tight">
            {{ $t('contact.title') }} <br/>
            {{ $t('contact.titleHighlight') }}
          </h2>
          <p class="text-on-surface-variant max-w-sm">
            {{ $t('contact.description') }}
          </p>
          <div class="space-y-6 pt-6">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-primary mt-1">mail</span>
              <div>
                <h4 class="font-bold text-sm">Email Us</h4>
                <p class="text-on-surface-variant">{{ $t('contact.email') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-primary mt-1">call</span>
              <div>
                <h4 class="font-bold text-sm">Call Us</h4>
                <p class="text-on-surface-variant">{{ $t('contact.phone') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-primary mt-1">location_on</span>
              <div>
                <h4 class="font-bold text-sm">Visit Our Studio</h4>
                <p class="text-on-surface-variant">{{ $t('contact.address') }}</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects()
const localePath = useLocalePath()

definePageMeta({
  layout: 'default'
})
</script>
