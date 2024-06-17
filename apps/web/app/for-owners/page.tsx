import {
  Image,
  Container,
  Box,
  SimpleGrid,
  Link,
  Button,
} from '@chakra-ui/react';

import { PageHeader } from '../../components/page-header';
import { SectionTitle } from '../../components/section-title';
import { IconLinkBlock } from '../../components/description-blocks/icon-link-block';
import { ValueAddPartners } from '../../components/value-add-partners';
import { NumberBlock } from '../../components/description-blocks/number-block';
import { GoodwillBlock } from '../../components/goodwill-block';

export default function Page(): JSX.Element {
  return (
    <main>
      <Container maxW={'6xl'} py={{ base: 12, lg: 16 }} px={8}>
        <PageHeader
          image1="/images/big-tex.webp"
          image1Alt="Big Tex"
          image1Blur="data:image/webp;base64,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"
          image2="/images/oil-man-statue.webp"
          image2Alt="Roughneck"
          image2Blur="data:image/webp;base64,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"
          label="For Owners"
          title="For Texas Owners"
          subtitle="You’ve worked hard to build something great. Let’s discuss how we could work together!"
        />
        <Box paddingTop={24} paddingBottom={{ base: 10 }}>
          <SectionTitle
            title="Our Process"
            subtitle="We value relationships and transparency."
          />
        </Box>
        <SimpleGrid
          maxWidth={{ base: '350px', md: '800px' }}
          gap={{ base: 8 }}
          margin={{ base: '0 auto' }}
          columns={[1, 2, 2]}
          spacingY={{ base: 10, md: 16 }}
          paddingY={16}
          paddingBottom={24}
        >
          <Box>
            <Image
              margin="0 auto"
              width={{ base: '120px', md: '150px' }}
              src="./images/alamo.webp"
              alt="The Alamo"
            />
          </Box>
          <NumberBlock
            numberTitle="01"
            title="Get to know you and your business face to face"
            description="We live in Texas, so everyone’s a short drive away."
          />
          <NumberBlock
            numberTitle="02"
            title="Provide an LOI"
            description="If we find alignment, we want to move promptly."
          />
          <NumberBlock
            numberTitle="03"
            title="Conduct Due Diligence"
            description="We have a straight forward checklist."
          />
          <NumberBlock
            numberTitle="04"
            title="Make an offer"
            description="We will make a fair win-win offer."
          />
          <NumberBlock
            numberTitle="05"
            title="Close & Get to work"
            description="Celebrate. Rest. Get to work."
          />
        </SimpleGrid>
        <Box
          maxWidth={{ base: '350px', md: '550px', lg: '750px' }}
          margin={{ base: '0 auto' }}
          paddingY={{ base: 12 }}
          paddingBottom={{ md: 24 }}
        >
          <ValueAddPartners />
        </Box>
        <Box
          maxWidth={{ base: '350px', md: '650px', lg: '750px' }}
          margin={{ base: '0 auto' }}
          paddingTop={{ base: 12 }}
          paddingBottom={{ base: 0 }}
        >
          <GoodwillBlock />
          <Box textAlign="center">
            <Link href="/brochure">
              <Button variant="primary" size="md" paddingY="6">
                Download Brochure
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          paddingTop={{ base: 24, md: 12 }}
          paddingBottom={{ base: 10, md: 24 }}
        >
          <SectionTitle title="Common Owner Questions" />
        </Box>
        <SimpleGrid
          maxWidth={{ base: '350px', md: '850px' }}
          gap={{ base: 12, lg: 24 }}
          margin={{ base: '0 auto' }}
          columns={[1, 2, 2]}
          paddingBottom={16}
        >
          <IconLinkBlock
            title="“I am not quite ready to sell, but I want to learn more”"
            description="We would love to learn more about your business, understand your goals, and how you’re envisioning your ideal buyer / partner."
            href="/for-owners"
            linkText="Contact us to chat"
          />
          <IconLinkBlock
            title="“I would like to do more of what I love and less of what I don’t.”"
            description="As operators, we will work together to design a plan that gets you doing what you do best. We will handle the rest."
            href="/for-owners"
            linkText="Contact us to strategize"
          />
          <IconLinkBlock
            title="“I  want to participate in the next phase of growth, but its time to reap the benefits of my hard work.”"
            description="We hold a win-win mentality and strive to structure every deal to best align the incentives for you and the business for the long haul. We would love to chat with you!"
            href="/for-owners"
            linkText="Contact us to work together"
          />
          <IconLinkBlock
            title="“I simply want to sell my business and swiftly move to the beach.”"
            description="This is a completely understandable desire, but if this is you, we probably won’t be a good fit. 
We look for owners that want to maintain a stake in their business and have skin in the game for the long haul."
          />
        </SimpleGrid>
      </Container>
    </main>
  );
}
