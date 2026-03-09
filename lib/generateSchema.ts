import { BUSINESS, SITE_URL } from '@/data/business';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.suburb,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.postcode,
      addressCountry: BUSINESS.country,
    },
    url: SITE_URL,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '17:00' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.reviewRating,
      reviewCount: BUSINESS.reviewCount,
    },
    priceRange: '$$',
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function serviceSchema(serviceName: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: { '@type': 'LocalBusiness', name: BUSINESS.name },
    areaServed: { '@type': 'City', name: 'Melbourne' },
    url,
  };
}
