import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PhoneButton from '@/components/ui/PhoneButton'
import { generateRepairShopSchema } from '@/lib/schema'
import { locations } from '@/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: {
    template: '%s | iTech Repairs',
    default: 'iTech Repairs Melbourne — Cheapest Repairs Guaranteed | 15 Minute Repairs',
  },
  description:
    'Expert phone, tablet & laptop repairs in Melbourne. Cheapest repairs guaranteed, on the spot 15 minute repairs. Lifetime warranty, walk-ins welcome.',
  openGraph: {
    siteName: 'iTech Repairs',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iTech Repairs Melbourne',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.itechrepairs.com.au'),
}

export const viewport: Viewport = {
  themeColor: '#E01B24',
  width: 'device-width',
  initialScale: 1,
}

function SchemaScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locationSchemas = locations.map(generateRepairShopSchema)

  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        {locationSchemas.map((s, i) => (
          <SchemaScript key={i} schema={s} />
        ))}
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <PhoneButton />
      </body>
    </html>
  )
}
