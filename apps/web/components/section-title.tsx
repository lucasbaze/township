import { Box, Stack, Flex, Heading, Text } from '@chakra-ui/react';

import Image from 'next/image';

export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <Stack
    spacing={5}
    textAlign="center"
    paddingX={{ sm: 12 }}
    maxWidth={{ base: '450px', md: '580px' }}
    margin="0 auto"
  >
    <Box margin="0 auto">
      <Image
        width="55"
        height="55"
        alt="Texas Star"
        src="./images/texas-star.webp"
        unoptimized
      />
    </Box>
    <Flex alignItems="baseline" margin="0 auto" gap={4}>
      <Box width="25px" height="1px" bg="brand.primary" />
      <Heading fontSize={{ base: '2xl', md: '4xl' }}>{title}</Heading>
      <Box width="25px" height="1px" bg="brand.primary" />
    </Flex>
    {subtitle && <Text>{subtitle}</Text>}
  </Stack>
);
