import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactUsForm: React.FC = () => {
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
      await axios.post('/api/contact-form', data);
      toast({
        title: 'Form submitted.',
        description: "We've received your form submission.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
      reset();
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: 'Unable to submit form.',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box maxWidth="500px" margin="0 auto">
      <Heading fontSize="2xl" mb={4}>
        Drop us a note
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name} mb={4}>
          <Input
            id="name"
            placeholder="Name"
            style={{ background: '#ffffff' }}
            {...register('name', { required: 'Name is required' })}
          />
          <FormErrorMessage>
            {errors.name && (errors.name.message as React.ReactNode)}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={4}>
          <Input
            id="email"
            placeholder="Email"
            style={{ background: '#ffffff' }}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && (errors.email.message as React.ReactNode)}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.message} mb={4}>
          <Textarea
            id="message"
            placeholder="Your message"
            {...register('message', { required: 'Message is required' })}
            style={{ background: '#ffffff' }}
            height="150px"
          />
          <FormErrorMessage>
            {errors.message && (errors.message.message as React.ReactNode)}
          </FormErrorMessage>
        </FormControl>

        <Button mt={4} variant="primary" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
