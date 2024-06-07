'use client';

import { ResponsiveObject } from '@chakra-ui/styled-system';
import { Flex, Box, Button, Image, Heading, Text } from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';

import { ShadowImage } from '../shadow-image';

export const ImageBlock = ({
  src,
  alt,
  imageWidth,
  iconSrc,
  iconWidth,
  title,
  description,
  buttonText,
  buttonHref,
}: {
  src: string;
  alt: string;
  imageWidth: ResponsiveObject<string>;
  iconSrc: string;
  iconWidth: ResponsiveObject<string>;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}) => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    alignItems={{ md: 'center' }}
    gap={{ base: 4, md: 20 }}
    maxWidth={{ base: '400px', md: '850px' }}
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
      {buttonHref && (
        <Box paddingTop={6}>
          <Link
            href={buttonHref}
            fontWeight={500}
            fontSize="18px"
            color="brand.primary"
            textDecoration="underline"
            textDecorationColor="brand.primary"
            textUnderlineOffset="4px"
          >
            {/* <Button variant="primary" size={{ base: 'sm', md: 'md' }}> */}
            {buttonText}
            {/* </Button> */}
          </Link>
        </Box>
      )}
    </Box>
  </Flex>
);
