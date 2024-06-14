'use client';

import { Container, Button, Box, Link, Image } from '@chakra-ui/react';
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
        <Box pb={12}>
          <SectionTitle title="Township Ventures Brochure" />
        </Box>
        <Box margin="0 auto" textAlign="center">
          <Link target="_blank" href="/brochure.pdf">
            <Button variant="primary" size="md" paddingY={6} mb={12}>
              Download Brochure
            </Button>
          </Link>
          <Image
            src="./images/township-brochure.png"
            width={{ base: '350px', md: '600px' }}
            boxShadow="2px 2px 12px hsl(0deg 0% 0% / 0.2)"
            margin="0 auto"
          />
        </Box>
      </Container>
    </main>
  );
}
