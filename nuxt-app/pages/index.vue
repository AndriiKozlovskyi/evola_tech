<template>
  <div>
    <!-- Hero Section -->
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

    <!-- Portfolio Section -->
    <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low" id="portfolio">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-on-surface mb-4">
            {{ $t('portfolio.title') }}
          </h2>
          <div class="w-16 h-1 bg-primary rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardsPortfolioCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface" id="services">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            {{ $t('services.title') }}
          </h2>
          <p class="text-body-lg text-on-surface-variant max-w-md leading-relaxed mb-10">
            {{ $t('services.description') }}
          </p>
          <div class="flex flex-wrap gap-3">
            <ChipsTechnicalGhostChip
              v-for="(tag, i) in ($tm('services.tags') as string[])"
              :key="i"
              :label="$rt(tag)"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CardsServiceCard
            v-for="(service, i) in ($tm('services.items') as any[])"
            :key="i"
            :service="{ icon: $rt(service.icon), title: $rt(service.title), description: $rt(service.description) }"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low overflow-hidden relative" id="about">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <div class="w-full lg:w-1/2 relative">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <img
            class="rounded-2xl relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZJNN3j-5dQaPPuiraqBYWeNeeNxqAYhWn_34P7vvYTao2fSd969YWWzN7dow0WRoTobSkg2deQCAgUxQh9dn7FMqP2rUmMus49Wd948Kj80MWhFUtk2IXDy7f9ke4mIcaZPeQCLbDMhyoYGWrjCWLUWJdayspOrGVrEe7I4bmjPuKZLwVN-ZYkgb_TUedGSb1zp1f8ZFk6CZ_E0K2idlqxUEJZtbuHfduFemZlRvApRI7SHK5sG9ZE62iwdwk7Zn9XotywUZ8o0k"
            alt="Team collaboration"
          />
          <div class="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-br from-primary to-primary-container p-6 lg:p-8 rounded-xl shadow-xl z-20">
            <div class="text-on-primary text-3xl lg:text-4xl font-bold">
              {{ $t('about.yearsExperience') }}
            </div>
            <div class="text-on-primary/70 text-xs font-semibold tracking-wider uppercase">
              {{ $t('about.yearsLabel') }}
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
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
              v-for="(value, i) in ($tm('about.values') as string[])"
              :key="i"
              class="flex items-center gap-3"
            >
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">
                check_circle
              </span>
              <span class="font-medium">{{ $rt(value) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
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
                <h4 class="font-semibold text-sm text-on-surface">Email</h4>
                <p class="text-on-surface-variant text-sm">{{ $t('contact.email') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span class="material-symbols-outlined text-primary text-xl">call</span>
              </div>
              <div>
                <h4 class="font-semibold text-sm text-on-surface">{{ currentLocale === 'en' ? 'Phone' : 'Telefon' }}</h4>
                <p class="text-on-surface-variant text-sm">{{ $t('contact.phone') }}</p>
              </div>
            </div>
          </div>
        </div>
        <FormsContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects()
const { currentLocale } = useLanguage()

definePageMeta({
  layout: 'default'
})
</script>
