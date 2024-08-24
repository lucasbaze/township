'use client';

import React, { useTransition } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import { login } from './actions';

const LoginPage: React.FC = () => {
  const [isPending, startTransition] = useTransition();

  const onLogin = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await login(formData);
      } catch (error) {
        console.error('Login failed:', error);
      }
    });
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      my={16}
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Dashboard Login
      </Heading>

      <form>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email:</FormLabel>
          <Input name="email" type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl id="password" mb={6} isRequired>
          <FormLabel>Password:</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </FormControl>

        <Box display="flex" alignItems="center" mb={6}>
          <Button
            type="submit"
            formAction={onLogin}
            variant="primary"
            isLoading={isPending}
          >
            Log in
          </Button>
        </Box>

        <Text fontSize="sm" textAlign="center" color="gray.500" mb={4}>
          Signups are not available freely. You must have an account.
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          For password reset, please email us.
        </Text>
      </form>
    </Box>
  );
};

export default LoginPage;
