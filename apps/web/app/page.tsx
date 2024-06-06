import { Stack, Box, Heading, Button, Grid, GridItem } from '@chakra-ui/react';

import { BackgroundSection } from '../components/background-section';
import { SectionTitle } from '../components/section-title';
import { ImageBlock } from '../components/description-blocks/image-block';

import { NextShadowImage } from '../components/next-shadow-image';

export default function Page(): JSX.Element {
  return (
    <main>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={4}
        w={{ base: '70%' }}
        margin="auto"
        alignItems={'end'}
      >
        <GridItem colSpan={1}>
          <NextShadowImage
            src="/images/austin-skyline-copy.jpeg"
            alt="Austin Skyline"
            width={{ base: '100px', sm: '200px', md: '300px' }}
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <NextShadowImage
            src="/images/texas-long-horn-copy.jpeg"
            alt="Texas Long Horn"
            width={{ base: '200px', sm: '274px', md: '480px' }}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <NextShadowImage
            src="/images/whataburger.png"
            alt="Whataburger"
            width={{ base: '100px', sm: '200px', md: '300px' }}
          />
        </GridItem>
      </Grid>
      <Box margin="auto" width="370px" textAlign="center" py={16}>
        <Heading
          as="h1"
          fontWeight={500}
          paddingBottom={8}
          paddingX={8}
          lineHeight={1.1}
          fontSize={{ base: '32px', md: '48px' }}
        >
          We Buy Texas Businesses and Build Them to Last Forever
        </Heading>
        <Button variant="primary" size="md" paddingY="6">
          Download Brochure
        </Button>
      </Box>
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
          src="./images/riverwalk.jpeg"
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
    </main>
  );
}
