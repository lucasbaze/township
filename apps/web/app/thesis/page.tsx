'use client';

import { Container, Button, Box, Text, Link, Image } from '@chakra-ui/react';
import { SectionTitle } from '../../components/section-title';

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
        <Box pb={12} textAlign="center">
          <SectionTitle title="Township Ventures Thesis" />
          <Text pt="6" pb="6">
            This paper outlines Township's core thesis from an operational
            perspective.
          </Text>
          <Link target="_blank" href="/thesis-0.3.1.pdf">
            <Button variant="primary" size="md" paddingY={6} mb={12}>
              Download Thesis
            </Button>
          </Link>
        </Box>
        <Box margin="0 auto" textAlign="center">
          <iframe
            src="/thesis-0.3.1.pdf"
            width="100%"
            height="1000px"
            style={{ border: 'none' }}
            allow="fullscreen"
          />
        </Box>
      </Container>
    </main>
  );
}
