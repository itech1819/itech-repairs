export const BUSINESS = {
  name: 'iTech Repairs',
  phone: '0390001234',
  phoneDisplay: '03 9000 1234',
  phoneHref: 'tel:0390001234',
  address: '123 Sunshine Road',
  suburb: 'Braybrook',
  state: 'VIC',
  postcode: '3019',
  country: 'Australia',
  googleMapsUrl: 'https://maps.google.com/?q=iTech+Repairs+Braybrook+VIC',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152!2d144.8565!3d-37.7996',
  hours: {
    'Monday–Friday': '9:00 AM – 6:00 PM',
    Saturday: '10:00 AM – 5:00 PM',
    Sunday: 'Closed',
  },
  reviewCount: 500,
  reviewRating: 4.9,
  warrantyText: 'Lifetime warranty on all parts and labour',
  abn: '12 345 678 901',
} as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://itechrepairs.com.au';
