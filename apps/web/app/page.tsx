import {
  Stack,
  Box,
  Heading,
  Button,
  Container,
  Grid,
  Flex,
  GridItem,
  Link,
} from '@chakra-ui/react';

import { BackgroundSection } from '../components/background-section';
import { SectionTitle } from '../components/section-title';
import { ImageBlock } from '../components/description-blocks/image-block';

import { NextShadowImage } from '../components/next-shadow-image';

const HeroImageCollageGrid = () => (
  <Grid
    h="200px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(3, 1fr)"
    margin="0 auto"
    columnGap={2}
    rowGap={0}
  >
    <GridItem rowSpan={1} colSpan={1}>
      <NextShadowImage
        src="/images/alamo-full-copy.jpeg"
        alt="Alamo"
        width={{ base: '120px', md: '125px', lg: '150px' }}
      />
    </GridItem>
    <GridItem
      rowSpan={2}
      colSpan={2}
      transform={{ base: 'translateY(20%)', lg: 'translateY(15%)' }}
    >
      <NextShadowImage
        src="/images/bitcoin-mining-riot-large.jpeg"
        alt="Texas Long Horn"
        width={{ base: '210px', md: '250px', lg: '300px' }}
      />
    </GridItem>
    <GridItem rowSpan={2} colSpan={1}>
      <NextShadowImage
        src="/images/texas-bridge.png"
        alt="Texas bridge"
        width={{ base: '120px', md: '125px', lg: '150px' }}
      />
    </GridItem>
  </Grid>
);

export default function Page(): JSX.Element {
  return (
    <main>
      <Box pt={{ base: 6 }} pb={{ base: 24, lg: 32 }}>
        <Container maxW={'6xl'}>
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
            paddingY={{ md: 16 }}
            paddingX={{ md: 4 }}
            paddingBottom={{ lg: 12 }}
            marginY={{ md: 12, lg: 16 }}
          >
            <Box
              position="relative"
              margin="auto"
              textAlign={{ base: 'center', md: 'left' }}
              pb={{ base: 16 }}
              pt={{ base: 16, md: 8, lg: 2 }}
              maxWidth={{ base: '350px', md: '450px', lg: 'unset' }}
              flex={1}
            >
              <Heading
                as="h1"
                fontWeight={500}
                paddingBottom={8}
                lineHeight={1.1}
                fontSize={{ base: '36px', md: '42px', lg: '64px' }}
              >
                We buy Texas
                <Box
                  as="img"
                  src="/images/texas-flag.svg"
                  display="inline"
                  width={{ base: '60px', md: '70px', lg: '90px' }}
                  height={{ base: '28px', md: '30px', lg: '40px' }}
                  mx="1"
                  my="-2px"
                />
                businesses and build them to last generations.
                {/* We buy <span className="highlight">Texas</span> businesses and
                build them to last{' '}
                <span className="highlight blue">Generations</span> */}
              </Heading>
              <Link href="/brochure.pdf">
                <Button variant="primary" size="md" paddingY="6">
                  Download Brochure
                </Button>
              </Link>
            </Box>
            <HeroImageCollageGrid />
          </Flex>
        </Container>
        <BackgroundSection
          title="Long Term Partners"
          subtitle="Township Ventures is a long-term holding company dedicated to partnering with owners to grow their business for a very long time."
        />
        <Box paddingTop={24} paddingBottom={10}>
          <SectionTitle title="Learn More" />
        </Box>
        <Stack gap={12} px={12}>
          <ImageBlock
            src="/images/big-tex.png"
            alt="Big Tex"
            imageWidth={{ base: '100%', md: '280px' }}
            title="For Owners"
            description="We strive to make the buying process simple, transparent and fair to ensure a smooth transition and long term success."
            buttonText="For Owners"
            buttonHref="/for-owners"
          />
          <ImageBlock
            src="/images/am-campus-aerial.png"
            alt="A&M Campus"
            imageWidth={{ base: '100%', md: '280px' }}
            title="About us"
            description="We believe in working collaboratively to build long-term value for our businesses, communities and families."
            buttonText="About us"
            buttonHref="/about-us"
          />
          <ImageBlock
            src="/images/solar-ranching.jpeg"
            alt="San antonio riverwalk"
            imageWidth={{ base: '100%', md: '280px' }}
            title="Our Criteria"
            description="We look for Texas businesses that are stable and will be around for a long time."
            buttonText="Our Criteria"
            buttonHref="/criteria"
          />
        </Stack>
      </Box>
    </main>
  );
}
