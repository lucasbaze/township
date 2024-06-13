'use client';

import {
  Container,
  Heading,
  Box,
  Flex,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

import { ContactUsForm } from '../../components/forms/contact-us-form';

const ContactBlock = ({
  name,
  phone,
  email,
}: {
  name: string;
  phone: string;
  email: string;
}) => (
  <Box>
    <Heading fontSize="2xl" mb={4}>
      {name}
    </Heading>
    <Flex gap={4} alignItems="center" mb={4}>
      <PhoneIcon display="block" />
      <Box>
        <Text fontWeight={700}>PHONE</Text>
        <Text color="brand.primary">
          <Link href={`tel:${phone}`}>{phone}</Link>
        </Text>
      </Box>
    </Flex>
    <Flex gap={4} alignItems="center">
      <EmailIcon display="block" />
      <Box>
        <Text fontWeight={700}>EMAIL</Text>
        <Text color="brand.primary">
          <Link href={`mailto:${email}`}>{email}</Link>
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default function Page(): JSX.Element {
  return (
    <main>
      <Container
        position="relative"
        maxW={'6xl'}
        pt={{ base: 12, lg: 16 }}
        pb={{ base: 24, lg: 32 }}
        px={8}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Image
            width="950px"
            src="./images/texas-map-small.png"
            opacity={0.8}
          />
        </Box>
        <Heading textAlign="center" mb={6}>
          Contact Us
        </Heading>
        <Text textAlign="center" maxWidth="450px" margin="0 auto">
          We’d love to have a conversation and understand your business further!{' '}
          <br />
          <br /> We will respond as quickly as possible.
        </Text>
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent="stretch"
          gap={16}
          pt={12}
          maxWidth="850px"
          margin="0 auto"
        >
          <Box flex={1}>
            <ContactUsForm />
          </Box>
          <Box flex={1} margin="0 auto">
            <ContactBlock
              name="Township Ventures"
              phone="(713) 264-1320"
              email="info@township.ventures"
            />
          </Box>
        </Flex>
      </Container>
    </main>
  );
}
