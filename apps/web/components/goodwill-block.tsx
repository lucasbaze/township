'use client';

import {
  Grid,
  GridItem,
  Box,
  Image,
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react';

export const GoodwillBlock = () => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    py={4}
    gap={{ base: 6, md: 12 }}
  >
    <Box flex={1}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Image
            borderRadius="md"
            width="100%"
            src="./images/riverwalk.webp"
            alt="San Antonio Riverwalk"
          />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Image
            borderRadius="md"
            width="100%"
            src="./images/oil-man-statue.webp"
            alt="Oil man Roughneck"
          />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Image
            borderRadius="md"
            width="100%"
            src="./images/lady-bird-lake.webp"
            alt="Lady bird lake"
          />
        </GridItem>
      </Grid>
    </Box>
    <Box flex={1}>
      <Heading pb={4}>
        A Spirit of{' '}
        <Heading as="span" color="brand.primary">
          Goodwill
        </Heading>
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} pb={{ base: 4, md: 8 }}>
        We respect your hustle and your drive. We won’t waste your time.
        <br />
        <br />
        We truly want what’s best for everyone and will ensure we treat everyone
        fairly, with kindness, and a genuine spirit of goodwill.
      </Text>
    </Box>
  </Flex>
);
