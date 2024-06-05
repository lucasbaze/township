import { Container, Box, Stack } from '@chakra-ui/react';

import { PageHeader } from '../../components/page-header';
import { SectionTitle } from '../../components/section-title';
import { ImageBlock } from '../../components/description-blocks/image-block';

export default function Page(): JSX.Element {
  return (
    <main>
      <Container maxW={'6xl'} py={{ base: 12, lg: 16 }} px={8}>
        <PageHeader
          image1="./images/riverwalk.jpeg"
          image1Alt="San Antonio Riverwalk"
          image2="./images/texas-sign.png"
          image2Alt="Texas Sign"
          label="Criteria"
          title="What we look for"
          subtitle="We look for businesses that directly contribute to building healthy, wealthy, and wise Texans."
          buttonText="Learn more"
          buttonHref="#"
        />
        <Box paddingTop={24} paddingBottom={{ base: 10, md: 24 }}>
          <SectionTitle
            title="Core Domains"
            subtitle="Township Ventures is a long-term holding company dedicated to partnering with owners to grow their business for a very long time."
          />
        </Box>
        <Stack gap={{ base: 12, md: 16 }}>
          <ImageBlock
            src="./images/running.png"
            alt="Man Running"
            imageWidth={{ base: '100%' }}
            iconSrc="./images/physical-icon.png"
            iconWidth={{ base: '45px', md: '55px' }}
            title="Physical Health & Wellness"
            description="Businesses that focus on the long term physical health and wellbeing of people."
          />
          <ImageBlock
            src="./images/construction.png"
            alt="Construction Site"
            imageWidth={{ base: '100%' }}
            iconSrc="./images/city-development.png"
            iconWidth={{ base: '45px', md: '55px' }}
            title="Land & City Development"
            description="Businesses that architect, build, and maintain the land and infrastructure for our cities."
          />
          <ImageBlock
            src="./images/college-education.png"
            alt="College Hats being thrown"
            imageWidth={{ base: '100%' }}
            iconSrc="./images/child-education.png"
            iconWidth={{ base: '45px', md: '55px' }}
            title="Education"
            description="Businesses that create opportunities to learn new skills, grow, and ultimately thrive."
          />
        </Stack>
      </Container>
    </main>
  );
}
