import type { Brand } from '@/types'

export const brands: Brand[] = [
  {
    slug: 'iphone',
    displayName: 'iPhone',
    categoryPageSlug: 'iphone-repair-melbourne',
    categoryDisplayName: 'iPhone Repairs Melbourne',
    homepagePriority: 1,
    iconName: 'iphone',
    deviceCategory: 'iphone',
    repairCount: 30,
    modelCount: 33,
  },
  {
    slug: 'samsung',
    displayName: 'Samsung',
    categoryPageSlug: 'samsung-repair-melbourne',
    categoryDisplayName: 'Samsung Repairs Melbourne',
    homepagePriority: 2,
    iconName: 'samsung',
    deviceCategory: 'samsung',
    repairCount: 29,
    modelCount: 25,
  },
  {
    slug: 'pixel',
    displayName: 'Google Pixel',
    categoryPageSlug: 'google-pixel-repair-melbourne',
    categoryDisplayName: 'Google Pixel Repairs Melbourne',
    homepagePriority: 4,
    iconName: 'pixel',
    deviceCategory: 'pixel',
    repairCount: 29,
    modelCount: 15,
  },
  {
    slug: 'ipad',
    displayName: 'iPad',
    categoryPageSlug: 'ipad-repair-melbourne',
    categoryDisplayName: 'iPad Repairs Melbourne',
    homepagePriority: 3,
    iconName: 'ipad',
    deviceCategory: 'ipad',
    repairCount: 25,
    modelCount: 13,
  },
  {
    slug: 'macbook',
    displayName: 'MacBook',
    categoryPageSlug: 'macbook-repair-melbourne',
    categoryDisplayName: 'MacBook Repairs Melbourne',
    homepagePriority: 5,
    iconName: 'macbook',
    deviceCategory: 'macbook',
    repairCount: 22,
    modelCount: 24,
  },
]

export const getBrandByCategory = (category: string): Brand | undefined =>
  brands.find((b) => b.deviceCategory === category)

export const getBrandByCategoryPageSlug = (slug: string): Brand | undefined =>
  brands.find((b) => b.categoryPageSlug === slug)
