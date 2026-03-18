import type { BusinessInfo, BusinessLocation } from '@/types'

// ─── Locations ────────────────────────────────────────────────────────────────

export const locations: BusinessLocation[] = [
  {
    id: 'braybrook',
    name: 'iTech Repairs Braybrook - iPhone Data Recovery Specialists',
    shortName: 'Braybrook',
    address: '16 W Central Park Ave',
    suburb: 'Braybrook',
    state: 'VIC',
    postcode: '3019',
    country: 'Australia',
    phone: '+61432933273',
    phoneDisplay: '0432 933 273',
    phoneHref: 'tel:+61432933273',
    googleMapsUrl: 'https://maps.google.com/?q=iTech+Repairs+Braybrook+-+iPhone+Data+Recovery+Specialists,+16+W+Central+Park+Ave,+Braybrook+VIC+3019&ftid=0x6ad65f7d103f6fc1:0xebc6af2fc864bc68',
    googleMapsEmbedUrl: 'https://www.google.com/maps?q=16+W+Central+Park+Ave,+Braybrook+VIC+3019&output=embed',
    googleBusinessProfileUrl: 'https://maps.google.com/?q=iTech+Repairs+Braybrook+-+iPhone+Data+Recovery+Specialists,+16+W+Central+Park+Ave,+Braybrook+VIC+3019&ftid=0x6ad65f7d103f6fc1:0xebc6af2fc864bc68',
    reviewUrl: null,
    isPrimary: true,
  },
  {
    id: 'spotswood',
    name: 'iTech Repairs Spotswood - iPhone Data Recovery Specialists',
    shortName: 'Spotswood',
    address: '31 McLister St',
    suburb: 'Spotswood',
    state: 'VIC',
    postcode: '3015',
    country: 'Australia',
    phone: '+61432933273',
    phoneDisplay: '0432 933 273',
    phoneHref: 'tel:+61432933273',
    googleMapsUrl: 'https://maps.google.com/?q=iTech+Repairs+Spotswood+-+iPhone+Data+Recovery+Specialists,+31+McLister+St,+Spotswood+VIC+3015&ftid=0x6ad667d0a0650cfb:0x5a5260ffd18c1bfb',
    googleMapsEmbedUrl: 'https://www.google.com/maps?q=31+McLister+St,+Spotswood+VIC+3015&output=embed',
    googleBusinessProfileUrl: 'https://maps.google.com/?q=iTech+Repairs+Spotswood+-+iPhone+Data+Recovery+Specialists,+31+McLister+St,+Spotswood+VIC+3015&ftid=0x6ad667d0a0650cfb:0x5a5260ffd18c1bfb',
    reviewUrl: null,
    isPrimary: false,
  },
]

export const primaryLocation: BusinessLocation = locations[0]

// ─── Business info ────────────────────────────────────────────────────────────

export const business: BusinessInfo = {
  name: 'iTech Repairs',
  tagline: 'Melbourne\'s trusted phone & laptop repair specialists',
  city: 'Melbourne',
  state: 'VIC',
  country: 'Australia',
  serviceArea: 'Western Melbourne',

  phone: '+61432933273',
  phoneDisplay: '0432 933 273',
  phoneHref: 'tel:+61432933273',
  email: 'repairs@itechrepairs.com.au',

  // Primary location shortcuts — always Braybrook
  address: primaryLocation.address,
  suburb: primaryLocation.suburb,
  postcode: primaryLocation.postcode,

  locations,

  openingHours: [
    { days: 'Monday – Sunday', hours: '9:00 am – 9:00 pm', isOpen: true },
  ],

  ctaLabels: {
    callNow: 'Call Now',
    getQuote: 'Get a Free Quote',
    visitStore: 'Visit Our Store',
    speakToTech: 'Speak to a Technician',
    bookRepair: 'Book a Repair',
    learnMore: 'Learn More',
  },

  warrantyMessage: 'Every repair at iTech Repairs comes with a lifetime warranty on parts and labour, giving you complete peace of mind.',
  fastRepairMessage: 'Most phone repairs are completed in 15–20 minutes while you wait. No appointments necessary — just walk in.',
  walkInMessage: 'No appointment needed. Walk in any time — open 7 days 9am–9pm for a free diagnostic and on-the-spot repair.',
  sameDayMessage: 'On the spot 15–20 minute repairs for most common issues including screen replacements, battery changes, and charging port repairs.',

  socialPreview: {
    title: 'iTech Repairs — Melbourne\'s Phone & Laptop Repair Experts',
    description: 'Fast, affordable phone and laptop repairs in Braybrook & Spotswood, Melbourne. Screen repair, battery replacement & more. Lifetime warranty, walk-ins welcome.',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image',
  },

  schema: {
    type: 'ElectronicsStore',
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Cash, Credit Card, EFTPOS',
    areaServed: 'Western Melbourne, VIC, Australia',
  },
}

export default business
