'use client';

import { Stack, Heading, Text } from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';

export const IconLinkBlock = ({
  title,
  description,
  href,
  linkText,
}: {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}) => (
  <Stack alignItems="start" gap={{ base: 2, md: 4 }} pb={{ base: 2, md: 4 }}>
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
