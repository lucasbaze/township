'use client';

import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Image,
  Flex,
  Text,
  Input,
  useColorModeValue,
  Heading,
  Divider,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from '@chakra-ui/next-js';
import { ReactNode } from 'react';
import { FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SocialButton } from './social-button';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'700'} mb={2}>
      {children}
    </Text>
  );
};

interface FormValues {
  email: string;
}

export const Footer = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });
  const toast = useToast();

  const onSubmit = async (data: FormValues) => {
    console.log('Data Values: ', data);
    try {
      await axios.post('/api/add-ghost-member', data);
      toast({
        title: 'Subscribed!',
        description: 'Please check your email.',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
      reset();
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: 'Unable to subscribe email.',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
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
                fontSize="32px"
                fontWeight={700}
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
              maxWidth="650px"
              minWidth={{ sm: '400px' }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  alignItems="stretch"
                  gap={4}
                  width={{ base: '300px', md: '100%' }}
                  margin="0 auto"
                >
                  <FormControl
                    isInvalid={!!errors.email}
                    flexDirection={{ base: 'column', md: 'row' }}
                  >
                    <Input
                      id="email"
                      variant="secondary"
                      placeholder={'Enter your email'}
                      bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.100')}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {errors.email &&
                        (errors.email.message as React.ReactNode)}
                    </FormErrorMessage>
                  </FormControl>
                  <Button
                    variant="invertedOutline"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </Flex>
              </form>
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
              <Link href={'https://blog.township.ventures'}>Resources</Link>
              {/* <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Terms</Link> */}
            </Stack>
          </Flex>
          <Stack direction={'column'} alignItems={'center'}>
            <ListHeader>Connect with Us</ListHeader>
            <Stack direction={'row'} spacing={2}>
              <SocialButton label={'X'} href={'https://x.com/TownshipTex'}>
                <FaXTwitter />
              </SocialButton>
              <SocialButton
                label={'Linkedin'}
                href={'https://www.linkedin.com/company/township-ventures'}
              >
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton
                label={'Youtube'}
                href={'https://www.youtube.com/@township-ventures'}
              >
                <FaYoutube />
              </SocialButton>
              {/* <SocialButton label={'Spotify'} href={'#'}>
              <FaSpotify />
            </SocialButton> */}
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
                <Image
                  width="48px"
                  mr="4"
                  alt="Texas Flag"
                  src="./images/texas-flag-large.svg"
                />
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
};
