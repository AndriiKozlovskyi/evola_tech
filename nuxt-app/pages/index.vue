<template>
  <div>
    <SectionsHero />
    <SectionsPortfolio />
    <SectionsServices />
    <SectionsWorkflow />
    <SectionsAbout />
    <LazyPricing />
    <SectionsMobileApp />
    <SectionsAISearch />
    <SectionsContact />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  buildSchema,
  organizationSchema,
  websiteSchema,
  pageSchema,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from '~/utils/schema'

const { t, tm, rt, locale } = useI18n()

definePageMeta({ layout: 'default' })

const absoluteLocaleRoot = computed(() =>
  locale.value === 'en'
    ? 'https://evola-tec.com/'
    : `https://evola-tec.com/${locale.value}/`
)

const localeFaqs = (path: string) =>
  (tm(path) as any[]).map(item => ({
    q: rt(item.q),
    a: rt(item.a),
  }))

const aiSearchFaqs = computed(() => localeFaqs('aiSearch.faq.items'))
const mobileAppFaqs = computed(() => localeFaqs('mobileApp.faq.items'))

const schemaMarkup = computed(() =>
  buildSchema(
    organizationSchema({
      inLanguage: locale.value,
      description: t('seo.home.description'),
      url: absoluteLocaleRoot.value,
    }),
    websiteSchema({ inLanguage: locale.value }),
    pageSchema({
      url: absoluteLocaleRoot.value,
      name: t('seo.home.title'),
      description: t('seo.home.description'),
      inLanguage: locale.value,
    }),
    breadcrumbSchema([
      { name: 'Home', url: absoluteLocaleRoot.value },
    ]),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#web-development-service`,
      name: 'Web Development',
      description: 'Custom websites, landing pages, and web applications built with Vue 3 + Nuxt and Java Spring Boot.',
      url: `${absoluteLocaleRoot.value}#services`,
      serviceType: 'Web Development',
      inLanguage: locale.value,
      minPrice: 350,
      category: ['Web development', 'Vue 3', 'Nuxt', 'Landing pages', 'E-commerce'],
    }),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#mobile-app-service`,
      name: t('mobileApp.title'),
      description: t('mobileApp.subtitle'),
      url: `${absoluteLocaleRoot.value}#mobile-app`,
      serviceType: 'Mobile Application Development',
      inLanguage: locale.value,
      category: [
        'Mobile app development',
        'iOS app development',
        'Android app development',
        'React Native',
        'Flutter',
        'Cross-platform apps',
      ],
    }),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#ai-search-service`,
      name: t('aiSearch.title'),
      description: t('aiSearch.subtitle'),
      url: `${absoluteLocaleRoot.value}#ai-search`,
      serviceType: 'Generative Engine Optimization',
      inLanguage: locale.value,
      category: [
        'AI search optimization',
        'GEO',
        'ChatGPT optimization',
        'Perplexity citations',
        'Google AI Overviews',
      ],
    }),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#seo-service`,
      name: 'SEO Optimization',
      description: 'Technical SEO audits, on-page optimisation, local SEO, content strategy, and link building with clear monthly reporting.',
      url: `${absoluteLocaleRoot.value}#services`,
      serviceType: 'Search Engine Optimization',
      inLanguage: locale.value,
      category: ['SEO', 'Technical SEO', 'Local SEO', 'Content strategy'],
    }),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#design-service`,
      name: 'UI/UX & Brand Design',
      description: 'UI/UX in Figma, brand identity, website redesigns, and print-ready materials. Source files always owned by the client.',
      url: `${absoluteLocaleRoot.value}#services`,
      serviceType: 'Design Services',
      inLanguage: locale.value,
      category: ['UI design', 'UX design', 'Brand identity', 'Figma'],
    }),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#ads-service`,
      name: 'Google Ads & Meta Ads',
      description: 'Google Search, Display, Shopping, Performance Max, and Meta Ads campaigns. Clients keep full account ownership.',
      url: `${absoluteLocaleRoot.value}#services`,
      serviceType: 'Paid Advertising',
      inLanguage: locale.value,
      category: ['Google Ads', 'Meta Ads', 'Performance Max', 'PPC'],
    }),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#social-media-service`,
      name: 'Social Media Management',
      description: 'Monthly content calendars, on-brand post design, copywriting, Stories & Reels, and community management for Instagram, Facebook, and LinkedIn.',
      url: `${absoluteLocaleRoot.value}#services`,
      serviceType: 'Social Media Management',
      inLanguage: locale.value,
      category: ['Social media', 'Content marketing', 'Instagram', 'Facebook', 'LinkedIn'],
    }),
    faqSchema(aiSearchFaqs.value, {
      id: `${absoluteLocaleRoot.value}#ai-search-faq`,
      inLanguage: locale.value,
    }),
    faqSchema(mobileAppFaqs.value, {
      id: `${absoluteLocaleRoot.value}#mobile-app-faq`,
      inLanguage: locale.value,
    }),
  )
)

useSeoMeta({
  title: () => t('seo.home.title'),
  ogTitle: () => t('seo.home.title'),

  description: () => t('seo.home.description'),
  ogDescription: () => t('seo.home.description'),

  keywords: () => t('seo.home.keywords'),

  ogUrl: () => absoluteLocaleRoot.value,
  ogImage: 'https://evola-tec.com/images/about/team.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'EvolaTec web development team',

  ogType: 'website',
  ogSiteName: 'EvolaTec',

  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.home.title'),
  twitterDescription: () => t('seo.home.description'),
  twitterImage: 'https://evola-tec.com/images/about/team.jpg',
  twitterCreator: '@evola_tec',
  twitterSite: '@evola_tec',
})

useHead({
  title: () => t('seo.home.title'),

  meta: [
    {
      name: 'google-site-verification',
      content: 'OjyVwoCIZV8NVzGNM5kQGwwk1GJRU3Wul9mJTOiIPx8',
    },
  ],

  link: [
    {
      rel: 'canonical',
      href: () => absoluteLocaleRoot.value,
    },
    { rel: 'alternate', hreflang: 'en', href: 'https://evola-tec.com/' },
    { rel: 'alternate', hreflang: 'pl', href: 'https://evola-tec.com/pl/' },
    { rel: 'alternate', hreflang: 'de', href: 'https://evola-tec.com/de/' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://evola-tec.com/ru/' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://evola-tec.com/' },
  ],

  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(schemaMarkup.value),
    },
  ],
})
</script>
