export type BrandSlug = 'iphone' | 'samsung' | 'ipad' | 'macbook' | 'pixel';

export interface DeviceModel {
  slug: string;           // e.g. "iphone-16-pro-max"
  name: string;           // e.g. "iPhone 16 Pro Max"
  brand: BrandSlug;
  releaseYear: number;
  popular: boolean;
  repairSlugs: string[];  // which repairs apply to this model
  specs?: { screen?: string; chip?: string; notes?: string };
}

export interface RepairService {
  slug: string;           // e.g. "screen-repair"
  name: string;           // e.g. "Screen Repair"
  shortName: string;
  description: string;
  longDescription: string;
  category: string;
  typicalTime: string;
  popular: boolean;
  includedInRepair: string[];
}

export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  distanceFromStore: string;
  region: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Brand {
  slug: BrandSlug;
  name: string;
  displayName: string;
  categorySlug: string;   // e.g. "iphone-repair-melbourne"
  description: string;
  icon: string;
  repairSlugs: string[];
}

export type PageType = 'category' | 'model' | 'repair' | 'location';

export interface ParsedSlug {
  type: PageType;
  brand?: BrandSlug;
  modelSlug?: string;
  repairSlug?: string;
  deviceKey?: string;
  suburbSlug?: string;
}
