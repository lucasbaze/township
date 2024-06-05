import {
  Box,
  Flex,
  Stack,
  Image,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { ShadowImage } from './shadow-image';

interface PageHeaderProps {
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  label: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export const PageHeader = ({
  image1,
  image1Alt,
  image2,
  image2Alt,
  label,
  title,
  subtitle,
  buttonText,
  buttonHref,
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
      <ShadowImage
        src={image1}
        alt={image1Alt}
        width={{ base: '250px', lg: '350px' }}
      />
      <Box
        position="absolute"
        bottom={{ base: '-50px', md: '-40px' }}
        right={{ base: '20px', lg: '-20px' }}
        zIndex={1}
      >
        <ShadowImage
          src={image2}
          alt={image2Alt}
          width={{ base: '150px', lg: '180px' }}
          withBorder
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
          src="./images/cowboy-star.png"
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
      <Button variant="primary" size="lg">
        {buttonText}
      </Button>
    </Box>
  </Box>
);
