// app/providers.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { inria, poppins } from '../components/fonts';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#550000',
    },
  },
  fonts: {
    heading: inria.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  components: {
    Button: {
      baseStyle: {
        padding: '2px 8px',
        fontWeight: '600',
        borderRadius: '99px',
        color: 'white',
      },
      sizes: {
        md: {
          px: '8',
        },
        lg: {
          px: '12',
        },
      },
      variants: {
        primary: {
          backgroundColor: 'brand.primary',
        },
        outline: {
          color: 'white',
          minWidth: 'unset',
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: '99px',
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderRadius: '12px',
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
