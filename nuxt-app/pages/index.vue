<template>
  <div>
    <SectionsHero />
    <SectionsPortfolio />
    <SectionsServices />
    <SectionsWorkflow />
    <SectionsAbout />
    <LazyPricing />
    <SectionsAISearch />
    <SectionsContact />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm, rt, locale } = useI18n()

const faqItems = computed(() =>
  (tm('aiSearch.faq.items') as any[]).map(item => ({
    q: rt(item.q),
    a: rt(item.a),
  }))
)

const absoluteLocaleRoot = computed(() => {
  return locale.value === 'en'
    ? 'https://evola-tec.com/'
    : `https://evola-tec.com/${locale.value}/`
})

definePageMeta({ layout: 'default' })

const contactEmail = 'team@evola-tec.com'
const contactPhoneRaw = '+48789711631'

// ✅ SEO meta
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

// ✅ HEAD
useHead({
  title: () => t('seo.home.title'),

  meta: [
    {
      name: 'google-site-verification',
      content: 'OjyVwoCIZV8NVzGNM5kQGwwk1GJRU3Wul9mJTOiIPx8',
    },
  ],

  link: [
    // canonical
    {
      rel: 'canonical',
      href: () => absoluteLocaleRoot.value,
    },

    // hreflang
    {
      rel: 'alternate',
      hreflang: 'en',
      href: 'https://evola-tec.com/',
    },
    {
      rel: 'alternate',
      hreflang: 'pl',
      href: 'https://evola-tec.com/pl/',
    },
    {
      rel: 'alternate',
      hreflang: 'de',
      href: 'https://evola-tec.com/de/',
    },
    {
      rel: 'alternate',
      hreflang: 'ru',
      href: 'https://evola-tec.com/ru/',
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: 'https://evola-tec.com/',
    },
  ],

  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            '@id': 'https://evola-tec.com/#organization',

            name: 'EvolaTec',
            url: absoluteLocaleRoot.value,
            inLanguage: locale.value,

            logo: 'https://evola-tec.com/favicon.svg',
            image: 'https://evola-tec.com/images/about/team.jpg',

            telephone: contactPhoneRaw,
            email: contactEmail,

            priceRange: '€€',

            address: {
              '@type': 'PostalAddress',
              addressCountry: 'PL',
            },

            areaServed: [
              { '@type': 'Country', name: 'Poland' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Country', name: 'Europe' },
            ],

            availableLanguage: ['Polish', 'English', 'German', 'Russian'],

            description: t('seo.home.description'),

            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing page development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO optimization' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Generative Engine Optimization (GEO) for AI search' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads and Meta Ads' } },
              ],
            },

            sameAs: [
              'https://evolatec.de',
              'https://www.facebook.com/evola_tec',
              'https://www.linkedin.com/company/121004478',
              'https://twitter.com/evola_tec',
            ],
          },
          {
            '@type': 'Service',
            '@id': `${absoluteLocaleRoot.value}#ai-search-service`,
            name: t('aiSearch.title'),
            description: t('aiSearch.subtitle'),
            serviceType: 'Generative Engine Optimization',
            inLanguage: locale.value,
            url: `${absoluteLocaleRoot.value}#ai-search`,
            provider: { '@id': 'https://evola-tec.com/#organization' },
            areaServed: [
              { '@type': 'Country', name: 'Poland' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Country', name: 'Europe' },
            ],
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Businesses seeking visibility in AI-generated search answers',
            },
            category: [
              'AI search optimization',
              'GEO',
              'ChatGPT optimization',
              'Perplexity citations',
              'Google AI Overviews',
            ],
          },
          {
            '@type': 'FAQPage',
            '@id': `${absoluteLocaleRoot.value}#faq`,
            inLanguage: locale.value,
            mainEntity: faqItems.value.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          },
        ],
      }),
    },
  ],
})
</script>
