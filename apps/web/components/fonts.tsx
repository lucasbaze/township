import { Inria_Sans, Poppins } from 'next/font/google';

export const inria = Inria_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-inria',
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
