import {
  Stack,
  Box,
  Heading,
  Button,
  Container,
  Grid,
  Flex,
  GridItem,
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
        src="/images/alamo-full-short.jpeg"
        alt="Alamo"
        width={{ base: '100px', md: '200px' }}
      />
    </GridItem>
    <GridItem
      rowSpan={2}
      colSpan={2}
      transform={{ base: 'translateY(30%)', md: 'translateY(50%)' }}
    >
      <NextShadowImage
        src="/images/long-horn-full.png"
        alt="Texas Long Horn"
        width={{ base: '200px', md: '400px' }}
      />
    </GridItem>
    <GridItem rowSpan={2} colSpan={1}>
      <NextShadowImage
        src="/images/austin-skyline-copy.jpeg"
        alt="Austin Skyline"
        width={{ base: '100px', md: '200px' }}
      />
    </GridItem>
  </Grid>
);

export default function Page(): JSX.Element {
  return (
    <main>
      <Box pt={{ base: 6, lg: 16 }} pb={{ base: 24, lg: 32 }}>
        <Container maxW={'6xl'}>
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
            paddingBottom={{ md: 32 }}
          >
            <Box
              position="relative"
              margin="auto"
              textAlign={{ base: 'center', md: 'left' }}
              py={{ base: 16, md: 24 }}
              maxWidth={{ base: '350px' }}
              flex={1}
            >
              <Heading
                as="h1"
                fontWeight={500}
                paddingBottom={8}
                lineHeight={1.1}
                fontSize={{ base: '36px', md: '48px', lg: '54px' }}
              >
                We Buy <span className="highlight">Texas</span> Businesses and
                Build Them to Last{' '}
                <span className="highlight blue">Forever</span>
              </Heading>
              <Button variant="primary" size="md" paddingY="6">
                Download Brochure
              </Button>
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
        <Stack gap={12}>
          <ImageBlock
            src="./images/big-tex.png"
            alt="Big Tex"
            imageWidth={{ base: '100%' }}
            iconSrc="./images/cowboy-star.png"
            iconWidth={{ base: '45px', md: '55px' }}
            title="For Owners"
            description="We strive to make the buying process simple and fair to best setup your business."
            buttonText="Our Process"
            buttonHref="/for-owners"
          />
          <ImageBlock
            src="./images/am-campus-aerial.png"
            alt="A&M Campus"
            imageWidth={{ base: '100%' }}
            iconSrc="./images/physical-icon.png"
            iconWidth={{ base: '45px', md: '55px' }}
            title="Meet the Team"
            description="We work with business owners to build long-term value for our businesses, communities and families."
            buttonText="Our Team"
            buttonHref="/about-us"
          />
          <ImageBlock
            src="./images/solar-ranching.jpeg"
            alt="San antonio riverwalk"
            imageWidth={{ base: '100%' }}
            iconSrc="./images/city-development.png"
            iconWidth={{ base: '45px', md: '55px' }}
            title="What we look for"
            description="We look for business owners who want to start planning for the next generation of their business. "
            buttonText="Our Criteria"
            buttonHref="/criteria"
          />
        </Stack>
      </Box>
    </main>
  );
}
