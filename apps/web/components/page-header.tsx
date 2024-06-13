import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';

import { NextShadowImage } from './next-shadow-image';

interface PageHeaderProps {
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  label: string;
  title: string;
  subtitle: string;
}

export const PageHeader = ({
  image1,
  image1Alt,
  image2,
  image2Alt,
  label,
  title,
  subtitle,
}: PageHeaderProps) => (
  <Box
    display="flex"
    flexDirection={{ base: 'column', md: 'row' }}
    alignItems={{ md: 'center' }}
    justifyContent="center"
    p={{ base: 0, md: 6, lg: 12 }}
  >
    <Box
      position="relative"
      margin={{ base: '0 auto 24px auto', md: '0 24px 24px auto' }}
      width={{ base: '350px' }}
    >
      <NextShadowImage
        src={image1}
        alt={image1Alt}
        width={{ base: '250px', lg: '350px' }}
        priority
      />
      <Box
        position="absolute"
        bottom={{ base: '-50px', md: '-40px' }}
        right={{ base: '20px', lg: '-20px' }}
        zIndex={1}
      >
        <NextShadowImage
          src={image2}
          alt={image2Alt}
          width={{ base: '150px', lg: '180px' }}
          withBorder
          priority
        />
      </Box>
    </Box>
    <Box
      textAlign="left"
      maxW={{ base: '350px', lg: '50%' }}
      margin={{ base: '0 auto' }}
    >
      <Flex alignItems="center" gap={{ base: 2, md: 4 }} pb={4}>
        <Image
          src="./images/big-cowboy-star.webp"
          alt="Cowboy Star"
          width={{ base: '25px', lg: '45px' }}
        />
        <Box
          bg="brand.primary"
          width={{ base: '20px', lg: '40px' }}
          height={{ base: '2px', lg: '4px' }}
          borderRadius="20px"
        />
        <Text fontSize={{ base: 'sm', lg: 'x-large' }}>{label}</Text>
      </Flex>
      <Heading as="h1" size={{ base: 'xl', lg: '2xl' }} pb={{ base: 2, lg: 4 }}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }} mb={6}>
        {subtitle}
      </Text>
    </Box>
  </Box>
);
