'use client';

import { ResponsiveObject } from '@chakra-ui/styled-system';
import {
  Flex,
  Box,
  Button,
  Image,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';

import { SocialButton } from '../social-button';

import {
  FaLinkedinIn,
  FaSpotify,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

import { ShadowImage } from '../shadow-image';

export const TeamBlock = ({
  src,
  alt,
  imageWidth,
  title,
  description,
}: {
  src: string;
  alt: string;
  imageWidth: ResponsiveObject<string>;
  title: string;
  description: string | React.ReactNode;
}) => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    alignItems={{ md: 'center' }}
    gap={{ base: 4, md: 16 }}
    maxWidth={{ base: '400px', md: '800px' }}
    margin={{ base: '0 auto' }}
  >
    <Box pb={2} maxWidth={{ md: '300px', lg: '350px' }} flex={1}>
      <ShadowImage src={src} alt={alt} width={imageWidth} />
    </Box>
    <Box paddingX={2} flex={2}>
      <Heading fontSize={{ base: '2xl', md: '3xl' }} pb={2}>
        {title}
      </Heading>
      <Stack pb={2}>
        <Stack direction={'row'} spacing={2}>
          <SocialButton noBg label={'X'} href={'#'}>
            <FaXTwitter />
          </SocialButton>
          <SocialButton noBg label={'YouTube'} href={'#'}>
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton noBg label={'Youtube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton noBg label={'Spotify'} href={'#'}>
            <FaSpotify />
          </SocialButton>
        </Stack>
      </Stack>
      {description && description}
    </Box>
  </Flex>
);
