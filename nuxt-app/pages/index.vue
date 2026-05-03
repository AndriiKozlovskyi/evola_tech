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
      <div class="max-w-7xl mx-auto space-y-16 lg:space-y-20">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div class="w-full lg:w-1/2 relative pb-16 lg:pb-0">
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              class="rounded-2xl relative z-10 w-full shadow-2xl service-visual-image"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=640&q=80&fm=webp"
              alt="Software planning board and laptop"
              width="637"
              height="425"
              loading="lazy"
              decoding="async"
              importance="low"
            />
            <div class="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-br from-primary to-primary-container p-6 lg:p-8 rounded-xl shadow-xl z-20">
              <div class="text-on-primary text-3xl lg:text-4xl font-bold">
                {{ $t('services.projectsDelivered') }}
              </div>
              <div class="text-on-primary/70 text-xs font-semibold tracking-wider uppercase">
                {{ $t('services.projectsDeliveredLabel') }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 space-y-6 sm:p-4 p-2">
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
              {{ $t('services.title') }}
            </h2>
            <p class="text-body-lg text-on-surface-variant leading-relaxed">
              {{ $t('services.description1') }}
            </p>
            <p class="text-body-lg text-on-surface-variant leading-relaxed">
              {{ $t('services.description2') }}
            </p>
            <ul class="space-y-4 pt-2">
              <li
                v-for="(value, i) in ($tm('services.values') as string[])"
                :key="i"
                class="flex items-center gap-3"
              >
                <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">
                  check_circle
                </span>
                <span class="font-medium">{{ $rt(value) }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-3 pt-2">
              <ChipsTechnicalGhostChip
                v-for="(tag, i) in ($tm('services.tags') as string[])"
                :key="i"
                :label="$rt(tag)"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardsServiceCard
            v-for="(service, i) in ($tm('services.items') as any[])"
            :key="i"
            :service="{ icon: $rt(service.icon), title: $rt(service.title), description: $rt(service.description) }"
          />
        </div>
      </div>
    </section>

    <!-- How We Work Section -->
    <section class="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden" id="workflow">
      <div class="workflow-atmosphere"></div>
      <div class="workflow-grid-lines"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="mb-14 lg:mb-20 max-w-3xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
            {{ $t('workflow.eyebrow') }}
          </p>
          <h2 class="text-3xl md:text-5xl font-semibold tracking-tight text-on-surface mb-5 leading-tight">
            {{ $t('workflow.title') }}
          </h2>
          <p class="text-on-surface-variant text-body-lg leading-relaxed">
            {{ $t('workflow.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div
            v-for="(benefit, i) in ($tm('workflow.benefits') as string[])"
            :key="`benefit-${i}`"
            class="workflow-benefit-card"
            :style="{ animationDelay: `${i * 120}ms` }"
          >
            <span class="material-symbols-outlined text-primary text-xl">bolt</span>
            <p class="text-sm text-on-surface font-medium leading-relaxed">{{ $rt(benefit) }}</p>
          </div>
        </div>

        <div class="relative">
          <div class="hidden md:block absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary/35 via-primary/15 to-transparent"></div>

          <div class="space-y-5">
            <article
              v-for="(step, i) in ($tm('workflow.steps') as any[])"
              :key="i"
              class="workflow-step-card"
              :style="{ animationDelay: `${140 + i * 90}ms` }"
            >
              <div class="workflow-step-dot hidden md:flex">
                <span>{{ i + 1 }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-[10px] uppercase tracking-[0.2em] text-primary/90 font-bold mb-2">
                  {{ $rt(step.phase) }}
                </p>
                <h3 class="text-xl md:text-2xl font-semibold text-on-surface mb-2 tracking-tight">
                  {{ $rt(step.title) }}
                </h3>
                <p class="text-on-surface-variant leading-relaxed mb-3">
                  {{ $rt(step.description) }}
                </p>
                <div class="workflow-benefit-line">
                  <span class="material-symbols-outlined text-primary text-lg">verified</span>
                  <p class="text-sm text-on-surface font-medium">{{ $rt(step.benefit) }}</p>
                </div>
              </div>
            </article>
          </div>
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
            src="/images/about/team.jpg"
            alt="Team collaboration"
            width="637"
            height="478"
            loading="lazy"
            decoding="async"
            importance="low"
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

    <!-- Pricing Section -->
    <Pricing />

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
                <p class="font-semibold text-sm text-on-surface">Email</p>
                <a
                  :href="`mailto:${contactEmail}`"
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
                  :href="`tel:${contactPhoneRaw}`"
                  class="text-on-surface-variant text-sm hover:text-primary transition-colors"
                >
                  {{ $t('contact.phone') }}
                </a>
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
import { computed } from 'vue'

const { t, locale } = useI18n()
const { projects } = useProjects()
const contactEmail = 'evolateam@gmail.com'
const contactPhoneRaw = '+48789711631'

const absoluteLocaleRoot = computed(() => {
  return locale.value === 'pl' ? 'https://evola-tec.com/' : `https://evola-tec.com/${locale.value}/`
})

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: () => t('seo.home.title'),
  ogTitle: () => t('seo.home.title'),
  description: () => t('seo.home.description'),
  ogDescription: () => t('seo.home.description'),
  keywords: () => t('seo.home.keywords'),
  ogUrl: () => absoluteLocaleRoot.value,
  twitterTitle: () => t('seo.home.title'),
  twitterDescription: () => t('seo.home.description'),
})

useHead({
  link: [{ rel: 'canonical', href: () => absoluteLocaleRoot.value }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'EvolaTech',
      url: 'https://evola-tec.com',
      logo: 'https://evola-tec.com/favicon.svg',
      telephone: '+48-789-711-631',
      email: 'evolateam@gmail.com',
      priceRange: '€€',
      address: { '@type': 'PostalAddress', addressCountry: 'PL' },
      serviceArea: { '@type': 'GeoShape', name: 'Poland, Europe' },
      availableLanguage: ['Polish', 'English', 'German', 'Russian'],
      description: 'Tworzenie nowoczesnych stron internetowych i landing page dla firm. Web development, SEO, Google Ads, Meta Ads.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tworzenie stron internetowych' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing page dla firmy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO i pozycjonowanie' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads i Meta Ads' } },
        ],
      },
    }),
  }],
})
</script>

<style scoped>
.workflow-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(42% 48% at 10% 15%, rgba(0, 102, 184, 0.08), transparent 70%),
    radial-gradient(36% 42% at 86% 18%, rgba(0, 163, 255, 0.1), transparent 72%),
    linear-gradient(180deg, rgba(242, 247, 255, 0.95) 0%, rgba(247, 250, 255, 0.9) 100%);
}

.service-visual-image {
  transition: transform 700ms cubic-bezier(0.21, 1, 0.36, 1), filter 700ms cubic-bezier(0.21, 1, 0.36, 1);
  filter: saturate(0.9) contrast(1.02);
}

.service-visual-image:hover {
  transform: scale(1.02);
  filter: saturate(1.05) contrast(1.04);
}

.workflow-grid-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(0, 71, 117, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 71, 117, 0.04) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at 50% 20%, black 35%, transparent 92%);
  pointer-events: none;
}

.workflow-benefit-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(130, 163, 196, 0.28);
  border-radius: 0.85rem;
  box-shadow: 0 12px 24px rgba(13, 41, 74, 0.05);
  backdrop-filter: blur(3px);
  animation: workflow-rise 700ms cubic-bezier(0.21, 1, 0.36, 1) both;
}

.workflow-step-card {
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1.25rem 1.25rem 1.25rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(138, 166, 199, 0.28);
  box-shadow: 0 18px 34px rgba(6, 42, 76, 0.06);
  backdrop-filter: blur(3px);
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
  animation: workflow-rise 720ms cubic-bezier(0.21, 1, 0.36, 1) both;
}

.workflow-step-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 24px 42px rgba(6, 42, 76, 0.1);
  border-color: rgba(0, 102, 184, 0.35);
}

.workflow-step-dot {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 102, 184, 0.16), rgba(0, 163, 255, 0.2));
  color: rgba(0, 66, 117, 0.95);
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid rgba(0, 102, 184, 0.26);
  flex-shrink: 0;
}

.workflow-benefit-line {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.7rem;
  border-radius: 0.65rem;
  background: rgba(0, 102, 184, 0.08);
}

@keyframes workflow-rise {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
