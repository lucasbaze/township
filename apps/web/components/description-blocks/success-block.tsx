'use client';

import { Flex, Box, Heading } from '@chakra-ui/react';

export const SuccessBlock = ({
  title,
  description,
}: {
  title: string;
  description: string | React.ReactNode;
}) => (
  <Box paddingX={2} marginTop={{ md: '-20px' }}>
    <Flex gap={{ base: 2, md: 4 }} pb={{ base: 2, md: 4 }}>
      <Box marginTop="15px" width="40px" height="2px" bg="#95ACFF" />
      <Box>
        <Heading fontSize={{ base: '2xl', md: '3xl' }} pb={4}>
          {title}
        </Heading>
        {description}
      </Box>
    </Flex>
  </Box>
);
