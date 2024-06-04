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
        padding: '2px 4px',
        fontWeight: '600',
        borderRadius: '99px',
      },
      variants: {
        primary: {},
        outline: {
          color: 'white',
          minWidth: 'unset',
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: '99px',
          color: 'black',
          fontSize: '14px',
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
        letterSpacing: '-1px',
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
