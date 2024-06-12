'use client';

import { ResponsiveObject } from '@chakra-ui/styled-system';
import { Stack, Image, Heading, Text } from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';

export const IconLinkBlock = ({
  iconSrc,
  iconWidth,
  title,
  description,
  href,
  linkText,
}: {
  iconSrc: string;
  iconWidth: ResponsiveObject<string>;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}) => (
  <Stack alignItems="start" gap={{ base: 2, md: 4 }} pb={{ base: 2, md: 4 }}>
    {/* <Image src={iconSrc} width={iconWidth} pb={4} /> */}
    <Heading fontSize={{ base: '2xl', md: '3xl' }}>{title}</Heading>
    <Text fontSize={{ base: 'sm', md: 'md' }} pb={2}>
      {description}
    </Text>
    {href && (
      <Link href={href} textDecoration="underline">
        {linkText}
      </Link>
    )}
  </Stack>
);
