import { ResponsiveObject } from '@chakra-ui/styled-system';
import { Box, Img } from '@chakra-ui/react';

export const ShadowImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: ResponsiveObject<string>;
  height: ResponsiveObject<string>;
}) => {
  return (
    <Box
      position="relative"
      display="inline-block"
      w={width}
      h={height}
      padding={{ base: '5px', sm: '10px', md: '10px' }}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="95%"
        h="95%"
        bgImage={`url(${src})`}
        bgSize="contain"
        bgRepeat="no-repeat"
        filter="blur(20px)"
        zIndex={-1}
        borderRadius="md"
      />
      <Img src={src} alt={alt} borderRadius="md" />
    </Box>
  );
};
