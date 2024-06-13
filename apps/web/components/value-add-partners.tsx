'use client';

import { Box, Image, Heading, Flex, Text } from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';

export const ValueAddPartners = () => (
  <Box>
    <Heading textAlign="center" display={{ md: 'none' }}>
      Value Add Partners
    </Heading>
    <Flex alignItems="center" py={4} gap={{ md: 12 }}>
      <Box flex={2}>
        <Heading display={{ base: 'none', md: 'block' }} pb={8}>
          Value Add Partners
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} pb={6}>
          We work with you and your business to strategize, plan, and then act
          on the highest lever drivers.
        </Text>
        <Text display={{ base: 'none', md: 'inherit' }} pb={{ md: 8 }}>
          We’ve created a series of playbooks to help you grow your business and
          help it last generations.
        </Text>
        <Link
          href="/about-us"
          fontWeight={500}
          fontSize="18px"
          color="brand.primary"
          textDecoration="underline"
          textDecorationColor="brand.primary"
          textUnderlineOffset="4px"
          display={{ base: 'none', md: 'block' }}
        >
          About Us
        </Link>
      </Box>
      <Box flex={1}>
        <Image
          width={{ base: '100px', md: '200px', lg: '300px' }}
          src="./images/big-cowboy-star.webp"
          alt="Cartoon cowboy on horse"
        />
      </Box>
    </Flex>
    <Link
      href="/about-us"
      fontWeight={500}
      fontSize="18px"
      color="brand.primary"
      textDecoration="underline"
      textDecorationColor="brand.primary"
      textUnderlineOffset="4px"
      display={{ base: 'block', md: 'none' }}
    >
      Our Team
    </Link>
  </Box>
);
