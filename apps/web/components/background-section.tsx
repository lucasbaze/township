'use client';

import { Box, Stack, Flex, Heading, Text } from '@chakra-ui/react';

import { Image } from '@chakra-ui/next-js';

export const BackgroundSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <Stack position="relative" spacing={5} textAlign="center" bg="#EFEFEF">
    <Box
      maxWidth={{ base: '450px', md: '550px' }}
      margin="0 auto"
      textAlign="center"
      paddingY={{ base: 24, md: 32 }}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        opacity="40%"
        zIndex={0}
      >
        <Image
          alt="Texas Map"
          height="250"
          width="250"
          src="/images/texas-raster-map.webp"
        />
      </Box>
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
        gap={4}
        zIndex={2}
      >
        <Heading fontSize={{ base: '2xl', md: '4xl' }} pb={4} color="black">
          {title}
        </Heading>
      </Flex>
      {subtitle && (
        <Text position="relative" fontSize={{ base: 'sm', md: 'lg' }} px={10}>
          {subtitle}
        </Text>
      )}
    </Box>
  </Stack>
);
