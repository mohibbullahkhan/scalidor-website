import type { Metadata } from 'next';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/shared';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: 'Scalidor | SaaS, AI & Software Products Built to Scale', template: '%s | Scalidor' },
  description: site.description,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Scalidor — Technology built to scale.',
    description: site.description,
    type: 'website',
    siteName: 'Scalidor',
    images: [{ url: '/logo.png', width: 500, height: 500, alt: 'Scalidor Logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Scalidor — Technology built to scale.',
    description: site.description,
    images: ['/logo.png'],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><div className="site-shell" id="top"><Navigation /><main id="main-content">{children}</main><Footer /></div></body></html>;
}
