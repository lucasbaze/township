import {
  Container,
  Box,
  Stack,
  Link,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

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
          image1="/images/solar-farm-helios.webp"
          image1Alt="Solar Farm Helios"
          image1Blur="data:image/webp;base64,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"
          image2="/images/pecos-river-bridge.webp"
          image2Alt="Pecos River Bridge"
          image2Blur="data:image/webp;base64,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"
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
            title="Minimum $1M in EBITDA"
            description="Capacity for change and protection from uncertainty."
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
        <Box textAlign="center" marginY={16}>
          <Link href="/brochure">
            <Button variant="primary" size="md" paddingY="6">
              Download Brochure
            </Button>
          </Link>
        </Box>
        <Box paddingBottom={{ base: 24, md: 36 }}>
          <SectionTitle
            title="Core Domains"
            subtitle="Township Ventures is a long-term holding company dedicated to partnering with owners to grow their business for a very long time."
          />
        </Box>
        <Stack gap={{ base: 20, md: 16 }}>
          <ImageBlock
            src="/images/construction.webp"
            alt="Construction Site"
            imageWidth={{ base: '100%', md: '280px' }}
            title="Land & City Development"
            description="Businesses that architect, build, and maintain the land and infrastructure for our cities."
          />
          <ImageBlock
            src="/images/baylor-statue.webp"
            alt="Baylor Statue of Rufus Burleson"
            imageWidth={{ base: '100%', md: '280px' }}
            title="Education"
            description="Businesses that create opportunities to learn new skills, grow, and ultimately thrive."
          />
          <ImageBlock
            src="/images/running.webp"
            alt="Man Running"
            imageWidth={{ base: '100%', md: '280px' }}
            title="Physical Health & Wellness"
            description="Businesses that focus on the long term physical health and wellbeing of people."
          />
        </Stack>
      </Container>
    </main>
  );
}
