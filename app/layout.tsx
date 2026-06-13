import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: { url: '/favicon.jpg', type: 'image/jpeg', sizes: '512x512' },
    apple: '/favicon.jpg',
  },
  metadataBase: new URL('https://therapyathome.in'),
  title: 'Home Physiotherapy in Theni & Coimbatore| Neck & Back Pain Relief',
  description:
    'Professional physiotherapy at your home. Specialized treatments for neck pain, back pain & steam therapy. Book your session: +91 93427 05088.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://therapyathome.in',
    siteName: 'Therapy at Home',
    title: 'Home Physiotherapy in Theni & Coimbatore | Neck & Back Pain Relief',
    description:
      'Professional physiotherapy at your home in Theni & Coimbatore. Specialized treatments for neck pain, back pain & steam therapy. Book now.',
    images: [{ url: '/og-home.jpg', width: 1200, height: 628, alt: 'Therapist providing home physiotherapy session in Theni' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@therapyathome',
    title: 'Home Physiotherapy in Theni & Coimbatore | Neck & Back Pain Relief',
    description: 'Professional physiotherapy at your home in Theni & Coimbatore. Specialized treatments for neck pain, back pain & steam therapy. Book now.',
    images: [{ url: '/og-home.jpg', alt: 'Therapist providing home physiotherapy session in Theni' }],
  },
}

export const viewport: Viewport = { themeColor: '#F7FAFE' }

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Therapy at Home',
  url: 'https://therapyathome.in',
  logo: 'https://therapyathome.in/favicon.jpg',
  image: 'https://therapyathome.in/og-home.jpg',
  description: 'Therapy at Home provides professional in-home physiotherapy and pain relief services in Theni & Coimbatore.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Eadamal Street',
    addressLocality: 'Theni',
    addressRegion: 'Tamil Nadu',
    postalCode: '625531',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '10.0104', longitude: '77.4977' },
  openingHours: ['Mo-Su 07:00-20:00'],
  telephone: '+919342705088',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        <link rel="icon" href="/favicon2.jpg" type="image/jpeg" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}