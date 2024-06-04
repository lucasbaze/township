// app/providers.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { inria, poppins } from '../components/fonts';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#800000',
    },
  },
  fonts: {
    heading: inria.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '400',
        borderRadius: '99px',
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: '99px',
          color: 'black',
        },
      },
      variants: {
        secondary: {
          border: 0,
          _focus: {
            bg: 'whiteAlpha.300',
          },
          color: 'black',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '400',
        fontFamily: inria.className,
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
