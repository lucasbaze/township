import { Box, Stack, Flex, Image, Heading, Text } from '@chakra-ui/react';

export const BackgroundSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <Stack position="relative" spacing={5} textAlign="center" bg="#FAFBFB">
    <Box maxWidth="450px" margin="0 auto" textAlign="center" paddingY={32}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Image width="350px" src="./images/texas-map-small.png" />
      </Box>
      <Flex alignItems="center" justifyContent="center" margin="0 auto" gap={4}>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} pb={4} color="black">
          {title}
        </Heading>
      </Flex>
      {subtitle && <Text fontSize={{ md: 'lg' }}>{subtitle}</Text>}
    </Box>
  </Stack>
);
