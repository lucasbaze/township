import { Image, Container, Box, SimpleGrid } from '@chakra-ui/react';

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
          image2="/images/oil-man-statue.webp"
          image2Alt="Roughneck"
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
