import { ResponsiveObject } from '@chakra-ui/styled-system';
import { Box, Img } from '@chakra-ui/react';

export const ShadowImage = ({
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
        w="95%"
        h="95%"
        bgImage={`url(${src})`}
        bgSize="contain"
        bgRepeat="no-repeat"
        filter="blur(20px)"
        zIndex={-1}
        borderRadius="md"
      />
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
      <Img src={src} alt={alt} borderRadius="md" zIndex={1} />
    </Box>
  );
};
