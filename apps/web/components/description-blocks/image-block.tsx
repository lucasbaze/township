import { ResponsiveObject } from '@chakra-ui/styled-system';
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';

import { ShadowImage } from '../shadow-image';

export const ImageBlock = ({
  src,
  alt,
  imageWidth,
  iconSrc,
  iconWidth,
  title,
  description,
}: {
  src: string;
  alt: string;
  imageWidth: ResponsiveObject<string>;
  iconSrc: string;
  iconWidth: ResponsiveObject<string>;
  title: string;
  description: string;
}) => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    alignItems={{ md: 'center' }}
    gap={{ base: 4, md: 6 }}
    maxWidth={{ base: '400px', md: '750px' }}
    margin={{ base: '0 auto' }}
  >
    <Box pb={2} maxWidth={{ md: '300px', lg: '350px' }}>
      <ShadowImage src={src} alt={alt} width={imageWidth} />
    </Box>
    <Box paddingX={2} marginTop={{ md: '-20px' }}>
      <Flex
        direction={{ md: 'column' }}
        alignItems={{ base: 'center', md: 'start' }}
        gap={{ base: 2, md: 4 }}
        pb={{ base: 2, md: 4 }}
      >
        <Image src={iconSrc} width={iconWidth} />
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>{title}</Heading>
      </Flex>
      <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
    </Box>
  </Flex>
);
