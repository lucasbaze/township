'use client';

import { Container, Box, Flex, Stack, Text } from '@chakra-ui/react';

import { PageHeader } from '../../components/page-header';
import { SectionTitle } from '../../components/section-title';
import { TeamBlock } from '../../components/description-blocks/team-block';
import { SuccessBlock } from '../../components/description-blocks/success-block';
import { ShadowImage } from '../../components/shadow-image';

import { SocialButton } from '../../components/social-button';

import {
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaMedium,
  FaHouse,
} from 'react-icons/fa6';

const TeamBlocks = () => (
  <>
    <TeamBlock
      src="./images/lucas-headshot.webp"
      alt="Lucas Headshot"
      imageWidth={{ base: '50%', md: '100%' }}
      title="Lucas Bazemore"
      socials={
        <>
          <SocialButton noBg label={'X'} href={'https://x.com/LucasBazemore'}>
            <FaXTwitter />
          </SocialButton>
          <SocialButton
            noBg
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/lucas-bazemore/'}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            noBg
            label={'Medium'}
            href={'https://medium.com/@lucasbazemore'}
          >
            <FaMedium />
          </SocialButton>
          <SocialButton
            noBg
            label={'FaGithub'}
            href={'https://github.com/lucasbaze'}
          >
            <FaGithub />
          </SocialButton>
        </>
      }
      description={
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          My focus is working with you and your team to build a long-term
          strategic roadmap and then pounding the pavement to make it happen.
          <br />
          <br />
          As 3x startup founder and former product manager and director of
          engineering, no business is too complex for me.
          <br />
          <br />
          Texas A&M alumni. Industrial Distribution.
        </Text>
      }
    />
    <TeamBlock
      src="./images/cameron-headshot.webp"
      alt="Cameron Kelley Headshot"
      imageWidth={{ base: '50%', md: '100%' }}
      title="Cameron Kelley"
      socials={
        <>
          <SocialButton noBg label={'Home'} href={'https://www.cameronk.org/'}>
            <FaHouse />
          </SocialButton>
          <SocialButton noBg label={'X'} href={'https://x.com/c3kel'}>
            <FaXTwitter />
          </SocialButton>
          <SocialButton
            noBg
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/cameronskelley/'}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            noBg
            label={'FaGithub'}
            href={'https://github.com/cameronk'}
          >
            <FaGithub />
          </SocialButton>
        </>
      }
      description={
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          My focus is on operationalizing your strategic roadmap, finding
          exceptional talent, and bringing cutting edge technology and
          automation to your business.
          <br />
          <br />
          As 4x startup founder and former VC operator, I’m confident we can
          work together.
          <br />
          <br />
          Texas A&M alumni. Mechanical Engineering.
        </Text>
      }
    />
    <TeamBlock
      src="./images/roberto-headshot.webp"
      alt="Roberto Gargurevich Headshot"
      imageWidth={{ base: '50%', md: '100%' }}
      title="Roberto Gargurevich"
      socials={
        <>
          <SocialButton noBg label={'X'} href={'https://x.com/gargu_R'}>
            <FaXTwitter />
          </SocialButton>
          <SocialButton
            noBg
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/roberto-gargurevich/'}
          >
            <FaLinkedinIn />
          </SocialButton>
        </>
      }
      description={
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          My focus is on the financial strategy and understanding of your
          business and how we can create repeatable, measurable success.
          <br />
          <br />
          With over 6 years in business strategy and intelligence for a
          Berkshire Hathaway company, I’m confident we can build generational
          success.
          <br />
          <br />
          Texas A&M alumni. Industrial Engineering.
        </Text>
      }
    />
    <TeamBlock
      src="./images/darian-headshot.webp"
      alt="Darian Bajmanlou Headshot"
      imageWidth={{ base: '50%', md: '100%' }}
      title="Darian Bajmanlou"
      socials={
        <>
          <SocialButton noBg label={'X'} href={'https://x.com/Bajmanlou'}>
            <FaXTwitter />
          </SocialButton>
        </>
      }
      description={
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          My focus is on finding opportunities in places people aren’t looking.
          <br />
          <br />
          With over 8 years in Texas real estate, I’m confident that we can
          sustainably grow and expand your business in new ways.
          <br />
          <br />
          LSU alumni. Physics & Economics.
        </Text>
      }
    />
  </>
);

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
          image1="/images/austin-skyline-copy.webp"
          image1Alt="Austin Skyline"
          image2="/images/texas-sign.webp"
          image2Alt="Texas Sign"
          label="About Us"
          title="Our Mission"
          subtitle="Our mission is to build an ecosystem of Texas businesses that creates fulfillment, wealth, and community for generations."
        />
        <Box paddingTop={24} paddingBottom={{ base: 10, md: 24 }}>
          <SectionTitle
            title="Measures of Success"
            subtitle="We measure our own success through the following key metrics:"
          />
        </Box>
        <Box maxWidth="900px" margin="0 auto">
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'center' }}
            gap={12}
          >
            <Stack flex={1} gap={12}>
              <ShadowImage
                src="./images/solar-ranching-wide.webp"
                alt="solar ranching"
                width={{ base: '300px', md: '350px' }}
              />
              <Box display={{ base: 'none', lg: 'block' }}>
                <ShadowImage
                  src="./images/texas-am-sully.webp"
                  alt="A&M statue of Lawrence Sullivan"
                  width={{ base: '300px', md: '350px' }}
                />
              </Box>
            </Stack>
            <Stack gap={16} flex={2} maxWidth="550px">
              <SuccessBlock
                title="Preserve Generational Wealth"
                description={
                  <Text fontSize={{ base: 'sm', md: 'md' }}>
                    We believe your hard work should stand the test of time.
                    <br />
                    <br /> We focus on growing your business to build and
                    preserve wealth for you, your business, and the community at
                    large.
                  </Text>
                }
              />
              <SuccessBlock
                title="Reproduce Positive Impact"
                description={
                  <Text fontSize={{ base: 'sm', md: 'md' }}>
                    We believe wealth is best used to demonstrably improve
                    people’s lives.
                    <br />
                    <br />
                    We work with your business to actively measure the impact
                    you have on the lives you touch and the communities in which
                    you operate.
                  </Text>
                }
              />
              <SuccessBlock
                title="Deliver Lifelong Service"
                description={
                  <Text fontSize={{ base: 'sm', md: 'md' }}>
                    We believe that true fulfillment comes from commitment and
                    service to people.
                    <br />
                    <br />
                    We work with your business to evaluate and expand your core
                    offering to support and serve people across the entirety of
                    their lives.
                  </Text>
                }
              />
            </Stack>
          </Flex>
        </Box>
        <Box paddingTop={24} paddingBottom={{ base: 10, md: 32 }}>
          <SectionTitle
            title="Our Team"
            subtitle="We have a network of talent & advisors in Energy, Private Equity, Real Estate, Finance, Manufacturing, Distribution, Bitcoin, Software, and many more to ensure we're properly assigning risk and allocating capital."
          />
        </Box>
        <Stack gap={24}>
          <TeamBlocks />
        </Stack>
      </Container>
    </main>
  );
}
