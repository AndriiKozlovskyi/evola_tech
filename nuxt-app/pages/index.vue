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
  siteNavigationSchema,
  offerCatalogSchema,
  GOOGLE_MAPS_URL,
} from '~/utils/schema'

const PRICING_TIERS = [
  { name: 'Landing Page — START',  price:  350, category: 'Landing Page' },
  { name: 'Landing Page — GROWTH', price:  650, category: 'Landing Page' },
  { name: 'Landing Page — PRO',    price: 1000, category: 'Landing Page' },
  { name: 'Website — START',       price:  750, category: 'Website' },
  { name: 'Website — GROWTH',      price: 1200, category: 'Website' },
  { name: 'Website — PRO',         price: 2300, category: 'Website' },
  { name: 'E-Commerce — START',    price: 1200, category: 'E-Commerce' },
  { name: 'E-Commerce — GROWTH',   price: 2000, category: 'E-Commerce' },
  { name: 'E-Commerce — PRO',      price: 5000, category: 'E-Commerce' },
] as const

const WROCLAW_GEO = { latitude: 51.1079, longitude: 17.0385 } as const

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
const allFaqs = computed(() => [...mobileAppFaqs.value, ...aiSearchFaqs.value])

const navItems = computed(() => [
  { name: t('navigation.home'), url: `${absoluteLocaleRoot.value}#home` },
  { name: t('navigation.portfolio'), url: `${absoluteLocaleRoot.value}#portfolio` },
  { name: t('navigation.services'), url: `${absoluteLocaleRoot.value}#services` },
  { name: t('navigation.mobileApp'), url: `${absoluteLocaleRoot.value}#mobile-app` },
  { name: t('navigation.aiSearch'), url: `${absoluteLocaleRoot.value}#ai-search` },
  { name: t('navigation.workflow'), url: `${absoluteLocaleRoot.value}#workflow` },
  { name: t('navigation.about'), url: `${absoluteLocaleRoot.value}#about` },
  { name: t('navigation.pricing'), url: `${absoluteLocaleRoot.value}#pricing` },
  { name: t('navigation.contact'), url: `${absoluteLocaleRoot.value}#contact` },
])

const pricingCatalog = computed(() =>
  offerCatalogSchema({
    name: 'EvolaTec Pricing Tiers',
    inLanguage: locale.value,
    items: PRICING_TIERS.map(tier => ({
      name: tier.name,
      price: tier.price,
      priceCurrency: 'EUR',
      category: tier.category,
      url: `${absoluteLocaleRoot.value}#pricing`,
    })),
  })
)

const schemaMarkup = computed(() =>
  buildSchema(
    organizationSchema({
      inLanguage: locale.value,
      description: t('seo.home.description'),
      url: absoluteLocaleRoot.value,
      geo: WROCLAW_GEO,
      hasMap: GOOGLE_MAPS_URL,
      openingHours: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      hasOfferCatalog: pricingCatalog.value,
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
    siteNavigationSchema(navItems.value, {
      id: `${absoluteLocaleRoot.value}#main-nav`,
      name: 'Main navigation',
      inLanguage: locale.value,
    }),
    serviceSchema({
      id: `${absoluteLocaleRoot.value}#web-development-service`,
      name: 'Web Development',
      description: 'Custom websites, landing pages, and web applications built with Vue 3 + Nuxt and Java Spring Boot.',
      url: `${absoluteLocaleRoot.value}#services`,
      serviceType: 'Web Development',
      inLanguage: locale.value,
      priceRange: { low: 350, high: 5000, offerCount: 9, currency: 'EUR' },
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
    faqSchema(allFaqs.value, {
      id: `${absoluteLocaleRoot.value}#faq`,
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
