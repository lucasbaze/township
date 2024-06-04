'use client';

import {
  Box,
  Button,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Flex,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import {
  FaLinkedinIn,
  FaSpotify,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { TexasFlag } from './texas-flag';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'700'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => (
  <Box
    bg={useColorModeValue('brand.primary', 'gray.900')}
    color={useColorModeValue('gray.100', 'gray.200')}
  >
    <Container as={Stack} maxW={'6xl'} py={12} px={8}>
      <SimpleGrid
        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
        spacing={8}
      >
        <Stack spacing={6}>
          <Box>
            <Heading fontSize="40px">Township Ventures</Heading>
          </Box>
          <Text fontSize={'sm'} textAlign={{ base: 'center', sm: 'initial' }}>
            We develop playbooks which help Texas business owners grow &
            maintain their business for generations.
          </Text>
          <Stack align={'flex-start'}>
            <Stack direction={'row'}>
              <Input
                variant="secondary"
                placeholder={'Your email address'}
                bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.100')}
              />
              <Button variant={'outline'}>Subscribe</Button>
            </Stack>
          </Stack>
        </Stack>
        <Flex>
          <Stack
            align={'flex-start'}
            flex={1}
            alignItems={{ base: 'center', sm: 'flex-start' }}
          >
            <ListHeader>Company</ListHeader>
            <Link href={'/for-owners'}>For Owners</Link>
            <Link href={'/about-us'}>About Us</Link>
            <Link href={'/criteria'}>Criteria</Link>
          </Stack>
          <Stack
            align={'flex-start'}
            flex={1}
            alignItems={{ base: 'center', sm: 'flex-start' }}
          >
            <ListHeader>Support</ListHeader>
            <Link href={'/contact-us'}>Contact Us</Link>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Terms</Link>
          </Stack>
        </Flex>
        <Stack direction={'column'} alignItems={'center'}>
          <ListHeader>Connect with Us</ListHeader>
          <Stack direction={'row'} spacing={2}>
            <SocialButton label={'X'} href={'#'}>
              <FaXTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={'Youtube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Spotify'} href={'#'}>
              <FaSpotify />
            </SocialButton>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
    <Divider />
    <Flex padding="20px">
      <Box flex={1}>
        <Text>
          Copyright © {new Date().getFullYear()} Township Ventures. All Rights
          Reserved.
        </Text>
      </Box>
      <Flex width="240px" alignItems="center">
        <Box width="64px" mr="4">
          <TexasFlag />
        </Box>
        <Text fontSize="14px">
          Proudly built in the greatest country on earth
        </Text>
      </Flex>
    </Flex>
  </Box>
);
