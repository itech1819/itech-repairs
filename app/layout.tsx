import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCallBar from '@/components/layout/MobileCallBar';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { localBusinessSchema } from '@/lib/generateSchema';
import { BUSINESS, SITE_URL } from '@/data/business';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'iTech Repairs Melbourne | iPhone, MacBook & Samsung Repairs', template: '%s | iTech Repairs' },
  description: 'Same-day iPhone, MacBook, iPad & Samsung repairs in Melbourne. Many repairs done in 15 minutes. Lifetime warranty. Walk in anytime — no appointment needed.',
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  robots: { index: true, follow: true },
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <SchemaOrg schema={localBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
