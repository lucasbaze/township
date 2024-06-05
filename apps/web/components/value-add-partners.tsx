'use client';

import { Box, Image, Heading, Flex, Text, Button } from '@chakra-ui/react';

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
        <Text fontSize={{ base: 'sm', md: 'md' }} pb={{ md: 8 }}>
          We work with you and your business to strategize, plan, and then act
          on the highest lever drivers.
          <Text display={{ base: 'none', md: 'inherit' }}>
            <br />
            We’ve created a series of playbooks to help you grow your business
            and help it last generations.
          </Text>
        </Text>
        <Button
          variant="primary"
          display={{ base: 'none', md: 'block' }}
          size="lg"
        >
          <Link href="/about-us">Our Methodology</Link>
        </Button>
      </Box>
      <Box flex={1}>
        <Image
          width={{ base: '100px', md: '200px', lg: '300px' }}
          src="./images/big-cowboy-star.png"
        />
      </Box>
    </Flex>
    <Button
      variant="primary"
      margin="0 auto"
      display={{ base: 'block', md: 'none' }}
    >
      <Link href="/about-us">Our Methodology</Link>
    </Button>
  </Box>
);
