import { Container, Box, SimpleGrid } from '@chakra-ui/react';

import { PageHeader } from '../../components/page-header';
import { SectionTitle } from '../../components/section-title';
import { IconLinkBlock } from '../../components/description-blocks/icon-link-block';

export default function Page(): JSX.Element {
  return (
    <main>
      <Container maxW={'6xl'} py={{ base: 12, lg: 16 }} px={8}>
        <PageHeader
          image1="./images/big-tex.png"
          image1Alt="Big Tex"
          image2="./images/whataburger.png"
          image2Alt="Whataburger"
          label="For Owners"
          title="For Texas Owners"
          subtitle="You’ve worked hard to build something great. Let’s discuss how we could work together!"
          buttonText="Learn more"
          buttonHref="#"
        />
        <Box paddingTop={24} paddingBottom={{ base: 10, md: 24 }}>
          <SectionTitle title="Common Owner Questions" />
        </Box>
        <SimpleGrid
          maxWidth={{ base: '350px', md: '550px' }}
          gap={{ base: 12, lg: 24 }}
          margin={{ base: '0 auto' }}
          columns={[1, 1, 1]}
        >
          <IconLinkBlock
            iconSrc="./images/armadillo.png"
            iconWidth={{ base: '55px' }}
            title="“I am not quite ready to sell, but I want to learn more”"
            description="We would love to learn more about your business, understand your goals, and how you’re envisioning your ideal buyer / partner."
            href="/for-owners"
            linkText="Contact us to chat"
          />
          <IconLinkBlock
            iconSrc="./images/alamo.png"
            iconWidth={{ base: '55px' }}
            title="“I would like to do more of what I love and less of what I don’t.”"
            description="As operators, we will work together to design a plan that gets you doing what you do best. We will handle the rest."
            href="/for-owners"
            linkText="Contact us to strategize"
          />
          <IconLinkBlock
            iconSrc="./images/southwest-plane.png"
            iconWidth={{ base: '55px' }}
            title="“I  want to participate in the next phase of growth, but its time to reap the benefits of my hard work.”"
            description="We hold a win-win mentality and strive to structure every deal to best align the incentives for you and the business for the long haul. We would love to chat with you!"
            href="/for-owners"
            linkText="Contact us to work together"
          />
          <IconLinkBlock
            iconSrc="./images/pleasure-pier.png"
            iconWidth={{ base: '55px' }}
            title="“I simply want to sell my business and swiftly move to the beach.”"
            description="This is a completely understandable desire, but if this is you, we probably won’t be a good fit. 
We look for owners that want to maintain a stake in their business and have skin in the game for the long haul."
          />
        </SimpleGrid>
        <Box paddingTop={24} paddingBottom={{ base: 10, md: 24 }}>
          <SectionTitle title="Common Owner Questions" />
        </Box>
      </Container>
    </main>
  );
}
