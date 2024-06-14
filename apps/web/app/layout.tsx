import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
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
      <Script id="clarity">
        {`
					(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "mrklr8g3bl");
				`}
      </Script>
      <body
        className={poppins.className}
        style={{ backgroundColor: '#FFFBF8' }}
      >
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
