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
    <Container as={Stack} maxW={'6xl'} py={{ base: 12, lg: 16 }} px={8}>
      <SimpleGrid templateColumns={{ lg: '2fr 1fr 1fr' }} spacing={12}>
        <Stack
          spacing={6}
          flexDirection="column"
          alignItems={{ base: 'center', lg: 'start' }}
        >
          <Box>
            <Heading
              fontSize="40px"
              textAlign={{ base: 'center', lg: 'initial' }}
            >
              Township Ventures
            </Heading>
          </Box>
          <Text
            fontSize={'md'}
            textAlign={{ base: 'center', lg: 'initial' }}
            maxWidth="425px"
            margin={{ base: '0 auto', lg: 'unset' }}
          >
            We develop playbooks which help Texas business owners grow &
            maintain their business for generations.
          </Text>
          <Stack
            align={'flex-start'}
            pb={4}
            maxWidth="445px"
            minWidth={{ sm: '400px' }}
          >
            <Stack direction={'row'} gap={4} width="100%">
              <Input
                variant="secondary"
                placeholder={'Enter your email'}
                bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.100')}
              />
              <Button variant={'outline'}>Subscribe</Button>
            </Stack>
          </Stack>
        </Stack>
        <Flex pb={4} width="300px" margin="0 auto">
          <Stack
            align={'flex-start'}
            flex={1}
            alignItems={{ base: 'center', lg: 'flex-start' }}
          >
            <ListHeader>Company</ListHeader>
            <Link href={'/for-owners'}>For Owners</Link>
            <Link href={'/about-us'}>About Us</Link>
            <Link href={'/criteria'}>Criteria</Link>
          </Stack>
          <Stack
            align={'flex-start'}
            flex={1}
            alignItems={{ base: 'center', lg: 'flex-start' }}
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
      <Box py={6}>
        <Divider borderColor="#B26464" />
      </Box>
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Box flex={1} pb={{ base: 10, lg: 0 }}>
          <Text fontSize="sm" textAlign={{ base: 'center', lg: 'left' }}>
            Copyright © {new Date().getFullYear()} <b>Township Ventures</b>.
            <br /> All Rights Reserved.
          </Text>
        </Box>
        <Flex justifyContent="center">
          <Box alignItems="center">
            <Flex width="240px" alignItems="center">
              <Box width="64px" mr="4">
                <TexasFlag />
              </Box>
              <Text fontSize="12px">
                Proudly built in the greatest country on earth.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
