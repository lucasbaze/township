import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { poppins } from '../components/fonts';

import NavBar from '../components/nav-bar';
import { Footer } from '../components/footer';

export const metadata: Metadata = {
  title: 'Township Ventures',
  description: 'Proudly built in Texas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
