import { Flex, Box, Heading, Text } from '@chakra-ui/react';

export const NumberBlock = ({
  numberTitle,
  title,
  description,
}: {
  numberTitle: string;
  title: string;
  description: string;
}) => (
  <Flex alignItems="center" gap={4} pb={{ base: 2, md: 4 }}>
    <Heading color="brand.primary" fontSize={{ base: '4xl', md: '5xl' }}>
      {numberTitle}
    </Heading>
    <Box paddingX={2}>
      <Heading fontSize={{ base: '2xl', md: '3xl' }} pb={{ base: 2 }}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
    </Box>
  </Flex>
);
