export type DeviceCategory = 'iphone' | 'samsung' | 'pixel' | 'ipad' | 'macbook'

export interface Brand {
  slug: string
  displayName: string
  categoryPageSlug: string
  categoryDisplayName: string
  homepagePriority: number
  iconName: string
  deviceCategory: DeviceCategory
  repairCount: number
  modelCount: number
}

export interface Model {
  id: string
  brand: DeviceCategory
  slug: string
  displayName: string
  repairHubSlug: string
  supportedRepairSlugs: string[]
  priority: number
  seoTitleBase: string
  seoDescriptionBase: string
  releaseYear?: number
  isCurrentGen?: boolean
}

export interface RepairService {
  slug: string
  displayName: string
  shortName: string
  description: string
  longDescription: string
  applicableCategories: DeviceCategory[]
  supportsLocationPages: boolean
  supportsRepairPages: boolean
  priority: number
  estimatedTime: string
  warrantyPeriod: string
}

export interface Suburb {
  slug: string
  displayName: string
  state: string
  postcode: string | null
  priority: number
  phaseIncluded: boolean
  region: string
}

export interface BusinessLocation {
  id: string
  name: string
  shortName: string
  address: string
  suburb: string
  state: string
  postcode: string
  country: string
  phone: string
  phoneDisplay: string
  phoneHref: string
  googleMapsUrl: string
  googleMapsEmbedUrl: string
  googleBusinessProfileUrl: string
  reviewUrl: string | null
  isPrimary: boolean
}

export interface BusinessInfo {
  name: string
  tagline: string
  city: string
  state: string
  country: string
  serviceArea: string
  phone: string
  phoneDisplay: string
  phoneHref: string
  email: string
  // Primary location shortcuts (Braybrook)
  address: string
  suburb: string
  postcode: string
  locations: BusinessLocation[]
  openingHours: OpeningHours[]
  ctaLabels: CTALabels
  warrantyMessage: string
  fastRepairMessage: string
  walkInMessage: string
  sameDayMessage: string
  socialPreview: SocialPreview
  schema: SchemaDefaults
}

export interface OpeningHours {
  days: string
  hours: string
  isOpen: boolean
}

export interface CTALabels {
  callNow: string
  getQuote: string
  visitStore: string
  speakToTech: string
  bookRepair: string
  learnMore: string
}

export interface SocialPreview {
  title: string
  description: string
  ogImage: string
  twitterCard: string
}

export interface SchemaDefaults {
  type: string
  priceRange: string
  currenciesAccepted: string
  paymentAccepted: string
  areaServed: string
}

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export interface PriceEntry {
  modelSlug: string
  repairSlug: string
  startingPrice: number | null
  priceNote: string
  priceDisplay: string
  currency: string
}

export interface RepairTimeEntry {
  modelSlug: string
  repairSlug: string
  estimatedMinutes: number
  estimatedDisplay: string
  sameDay: boolean
  walkInAvailable: boolean
  notes: string
}

export interface PageSlugEntry {
  type: 'model-hub' | 'repair' | 'location' | 'category'
  slug: string
  deviceCategory: DeviceCategory
  modelSlug?: string
  repairSlug?: string
  suburbSlug?: string
}

export type ParsedSlug =
  | { type: 'model-hub'; deviceCategory: DeviceCategory; model: Model; repair?: RepairService; suburb?: Suburb }
  | { type: 'repair'; deviceCategory: DeviceCategory; model: Model; repair: RepairService; suburb?: Suburb }
  | { type: 'location'; deviceCategory: DeviceCategory; suburb: Suburb; model?: Model; repair?: RepairService }
  | { type: 'category'; deviceCategory: DeviceCategory; model?: Model; repair?: RepairService; suburb?: Suburb }
  | { type: 'not-found'; deviceCategory?: DeviceCategory; model?: Model; repair?: RepairService; suburb?: Suburb }
  | { type: 'suburb-device'; suburb: Suburb; deviceCategory: DeviceCategory }
  | { type: 'suburb-repair'; suburb: Suburb; deviceCategory: DeviceCategory; repair: RepairService }
