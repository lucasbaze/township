import { Container, Box, Stack, SimpleGrid } from '@chakra-ui/react';

import { PageHeader } from '../../components/page-header';
import { SectionTitle } from '../../components/section-title';
import { ImageBlock } from '../../components/description-blocks/image-block';
import { IconBlock } from '../../components/description-blocks/icon-block';

export default function Page(): JSX.Element {
  return (
    <main>
      <Container
        maxW={'6xl'}
        pt={{ base: 12, lg: 16 }}
        pb={{ base: 24, lg: 32 }}
        px={8}
      >
        <PageHeader
          image1="./images/solar-farm-helios.jpeg"
          image1Alt="Solar Farm Helios"
          image2="./images/pecos-river-bridge.jpeg"
          image2Alt="Pecos River Bridge"
          label="Criteria"
          title="What we look for"
          subtitle="We look for low risk, Texas businesses with strong margins building healthy, wealthy, and wise Texans."
        />
        <Box paddingTop={24} paddingBottom={{ base: 10, md: 24 }}>
          <SectionTitle title="Business Criteria" />
        </Box>
        <SimpleGrid
          maxWidth={{ base: '350px', md: '800px' }}
          gap={{ base: 12, lg: 16 }}
          margin={{ base: '0 auto' }}
          columns={[1, 1, 2]}
        >
          <IconBlock
            iconSrc="./images/texas-flag.svg"
            iconWidth={{ base: '45px', md: '65px' }}
            title="HQ in Texas"
            description="Rooted in great values, amazing people, and relentless tenacity."
          />
          <IconBlock
            iconSrc="./images/texas-flag.svg"
            iconWidth={{ base: '45px', md: '65px' }}
            title="Min. 10 years old"
            description="Showcasing durable operations."
          />
          <IconBlock
            iconSrc="./images/texas-flag.svg"
            iconWidth={{ base: '45px', md: '65px' }}
            title="Strong Operating Margins"
            description="Capturing the value created for future reinvestment."
          />
          <IconBlock
            iconSrc="./images/texas-flag.svg"
            iconWidth={{ base: '45px', md: '65px' }}
            title="Serving a Core Domain"
            description="We focus on city infrastructure, physical health, and education."
          />
        </SimpleGrid>
        <Box paddingTop={24} paddingBottom={{ base: 24, md: 36 }}>
          <SectionTitle
            title="Core Domains"
            subtitle="Township Ventures is a long-term holding company dedicated to partnering with owners to grow their business for a very long time."
          />
        </Box>
        <Stack gap={{ base: 20, md: 16 }}>
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
