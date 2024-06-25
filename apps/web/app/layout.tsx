import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from './providers';
import { poppins } from '../components/fonts';

import NavBar from '../components/nav-bar';
import { Footer } from '../components/footer';
import { Clarity } from '../components/analytics/clarity';
import { GoogleAnalytics } from '../components/analytics/google-analytics';

export const metadata: Metadata = {
  title: 'Township Ventures',
  description: 'We buy Texas businesses',
  twitter: {
    card: 'summary_large_image',
    title: 'Township Ventures',
    description: 'We buy Texas businesses',
    creator: '@LucasBazemore',
    images: ['https://township.ventures/og-image.webp'],
  },
  openGraph: {
    title: 'Township Ventures',
    description: 'We buy Texas businesses',
    url: 'https://township.ventures',
    siteName: 'Township Ventures',
    images: [
      {
        url: 'https://township.ventures/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Man welding',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={poppins.className}
        style={{ backgroundColor: '#FFFBF8' }}
      >
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
        <Clarity />
        <Analytics />
      </body>
    </html>
  );
}
