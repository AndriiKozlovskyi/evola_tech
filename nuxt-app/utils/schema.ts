export type SchemaNode = Record<string, unknown>

const SITE_URL = 'https://evola-tec.com'
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const DEFAULT_AREAS_SERVED = [
  { '@type': 'Country', name: 'Poland' },
  { '@type': 'Country', name: 'Germany' },
  { '@type': 'Country', name: 'Europe' },
]

const DEFAULT_SAME_AS = [
  'https://evolatec.de',
  'https://www.facebook.com/evola_tec',
  'https://www.linkedin.com/company/121004478',
  'https://twitter.com/evola_tec',
]

export const buildSchema = (...nodes: SchemaNode[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
})

export const organizationSchema = (opts?: {
  inLanguage?: string
  description?: string
  url?: string
}): SchemaNode => ({
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'EvolaTec',
  url: opts?.url ?? SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/images/about/team.jpg`,
  telephone: '+48789711631',
  email: 'team@evola-tec.com',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PL',
  },
  areaServed: DEFAULT_AREAS_SERVED,
  availableLanguage: ['Polish', 'English', 'German', 'Russian'],
  sameAs: DEFAULT_SAME_AS,
  ...(opts?.inLanguage && { inLanguage: opts.inLanguage }),
  ...(opts?.description && { description: opts.description }),
})

export const websiteSchema = (opts?: { inLanguage?: string }): SchemaNode => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'EvolaTec',
  publisher: { '@id': ORG_ID },
  ...(opts?.inLanguage && { inLanguage: opts.inLanguage }),
})

export const pageSchema = (opts: {
  url: string
  name: string
  description: string
  inLanguage?: string
}): SchemaNode => ({
  '@type': 'WebPage',
  '@id': `${opts.url}#webpage`,
  url: opts.url,
  name: opts.name,
  description: opts.description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  ...(opts.inLanguage && { inLanguage: opts.inLanguage }),
})

export const serviceSchema = (opts: {
  id: string
  name: string
  description: string
  url?: string
  serviceType?: string
  minPrice?: number
  inLanguage?: string
  category?: string[]
}): SchemaNode => ({
  '@type': 'Service',
  '@id': opts.id,
  name: opts.name,
  description: opts.description,
  provider: { '@id': ORG_ID },
  areaServed: DEFAULT_AREAS_SERVED,
  ...(opts.url && { url: opts.url }),
  ...(opts.serviceType && { serviceType: opts.serviceType }),
  ...(opts.inLanguage && { inLanguage: opts.inLanguage }),
  ...(opts.category && { category: opts.category }),
  ...(opts.minPrice !== undefined && {
    offers: {
      '@type': 'Offer',
      price: opts.minPrice,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: opts.minPrice,
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
    },
  }),
})

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
): SchemaNode => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
})

export const faqSchema = (
  faqs: { q: string; a: string }[],
  opts?: { id?: string; inLanguage?: string }
): SchemaNode => ({
  '@type': 'FAQPage',
  ...(opts?.id && { '@id': opts.id }),
  ...(opts?.inLanguage && { inLanguage: opts.inLanguage }),
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})
