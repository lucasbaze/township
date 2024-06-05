import { ResponsiveObject } from '@chakra-ui/styled-system';
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';

export const IconBlock = ({
  iconSrc,
  iconWidth,
  title,
  description,
}: {
  iconSrc: string;
  iconWidth: ResponsiveObject<string>;
  title: string;
  description: string;
}) => (
  <Flex alignItems="start" gap={{ base: 2, md: 4 }} pb={{ base: 2, md: 4 }}>
    <Image src={iconSrc} width={iconWidth} />
    <Box paddingX={2}>
      <Heading fontSize={{ base: '2xl', md: '3xl' }} pb={{ base: 2, md: 4 }}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
    </Box>
  </Flex>
);
