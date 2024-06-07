import { ResponsiveObject } from '@chakra-ui/styled-system';
import { Box } from '@chakra-ui/react';

import Image from 'next/image';

export const NextShadowImage = ({
  src,
  alt,
  width,
  withBorder,
}: {
  src: string;
  alt: string;
  width: ResponsiveObject<string>;
  withBorder?: boolean;
}) => {
  return (
    <Box
      position="relative"
      display="inline-block"
      w={width}
      padding={{ base: '5px', md: '10px' }}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -45%)"
        w="90%"
        h="90%"
        zIndex={-1}
        borderRadius="md"
      >
        <Image
          width="600"
          height="500"
          src={src}
          alt={alt}
          style={{
            filter: 'blur(20px)',
          }}
        />
      </Box>
      {withBorder && (
        <Box
          position="absolute"
          background="white"
          top="50%"
          left="50%"
          transform="translate(-45%, -45%)"
          w="110%"
          h="110%"
          zIndex={-2}
          borderRadius="md"
        />
      )}
      <Image
        width="600"
        height="500"
        src={src}
        alt={alt}
        style={{ borderRadius: '2px', filter: 'sepia(0.1)' }}
      />
    </Box>
  );
};
