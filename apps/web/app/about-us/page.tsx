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
          image1Blur="data:image/webp;base64,UklGRlALAABXRUJQVlA4WAoAAAAgAAAAFgIA6wEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggYgkAANB7AJ0BKhcC7AE+7XCwUr++LyKl1Yr78B2JaW7xgC6JvbrFiXKnkcjgTcf+WnVzn9V/1T521e+YorHXH75byARSr53oSxNjYlnq88ZpIlI7GBRPZvBpTWq7orAyyP95EMq4zeZwo2KecaB1UEKFXG0lmH7bZKe1LRp6O7mEpKBYAYo52GrXCH2z12VHrQr196viLUffoy0U6cTt4R/YS8eRWL2IwDQOFjGEokv7choOf1SIdB+iumMUAfkYafPiWaJmSHHhdtg+7MsgCt6FPxAmDtgdkGo0D/q+rqmnq8O6WPeO3iAtLGew/YTi95AKx18Jln/iHHt4fnuLtoU8m8P0X7WKatr+1AALNvD9JbsAuDhE1yWzVx3JMBps0aQ27EWksNanT4cPFkaRmsi1Fe8aJzlar1le516pXeH6YzWRaguFRW6yCsafXNH5FFnKkaAZqVBWP/GLEVg0KPhMrMjQglZw4HOtJoWH6L9ngl+H5NrJuMa9kGBJcKRsgLSJoiyKGWc0pRhIrp2NLVcikKxd8aQGqeFcvh+jLFC2G6KyzzQ6lSWBm4x1qPahn98YtKi3h9VmJsyb4V2mcp4PdeUwFhBOFawfMpII3kSNuh/vwRJ63ngPxx4wO2vKVjQClMP0xW6KS9gKwFxhb5Cq9XCJ+V1KAhS/1AjgwO2sC8d5LJKdzJNP7/eE2cK5Vd4QwzfjN3XlKxoCsc3iL9qz17D8/lKP0YPO0zZlsBXjXiQBUi/PS7GO4XLVGJes3lcTr1kgTNGg4AAB9cZYYc2EAC8dhyL7J9V4xdx1+9rM/CUSKDZ0QFfnK+Ey8m8r9aif9hVad/prRB6xJNbiur2686ay2mF1D1sSF4BgqH/jhj4tyFWlcmXvEtLAjSAlD9EpsP2AYJlfyo0DCyy4pr9Xi2CnQ6iivCguZSlWN1K7GrG2l/HxiufCZUdXrj/tf+/hylRoDDfhx+yHFgp9atXTi+8lLRpDbw/RfuNAtJfEFndtCr9rImFDNzscR3whAURXF44Z6WQTW2Qmf+XSKcWCeDo3Izob2H6boq+FUnp9dWaQ5NKx+lH/CUlQV2ZldEF6vQBaGsNx3nJH3RrO/sX1dsaIZ1YbGBnGms5pDaw0m4V9FpucHgu4WCiIBnqV0ub9W9MoGG+pfB0bj/nw/SdmSy/clE8wiETY2K5KQoEcavxCI/8OdPD7CABNhc3cbe6EIlnj0MoEb/9iEmsmgFBXS81gKlPeOd7828SZoysV6BHBgdEDbRgh8iv1oaB2lUuA/AoCHAOCIwwO2vKVjQUOcesPIJKjg5qXKi8Cr6RMJ39fUCODA7amAAD+7+wuHZU1qlFmSlOqgW35RRsLW7Kbd69YFAbAY+BDbn2+buR0K256+zaR4YxpNtAl2b9pvd/cqHtTXIPoYo97cVaMAKzWTJqId9ZiW94emKwTFqTNtqFyQg+CStWAZprfZHkzyUI4PQWO5swLw/1DhYrJdVWWFoTmQ1jU+d50PtY+BBp5AeLHWGfuFEdGAOgQ71OBp6gKCx/MVp9Z+iYuOKSHF28z7pthpQbpNoH4MPxq4fr6B7+b1h3fKcfaDaie7WzQtRT+P9UUmFI9pd5iYw6OrJBWM14m/Hk3yBQZGPTOf2/HS1/6LucZUmlckATx18MGQjzCCevBFk5BIhEzSQltAm6AVY2cZeI6w8zdaqupEgjdsG4S10wMqhXtVipKgZdOirK4/u/ZaE9U2giYxbng+jpoFcZscPlANOCYGotYrKquP2ByTFXdY8MgVb4dqFxN0FOjiPcna/fSyZXxizIN26pOiQ5nNG+ao6UDHlw4/Sye/Y1nrGqiYmFSgW9VGz9ctnbWQ9FvUtNRsKeYcztir/1gjJ36OUtq06gLOZALl3Q5OaG6KTwDQvgicENEzaKZF0vufeHchuEiZvXJHQbbzC8KC7Lp3e0l0BjaZt8ZggZDJYbMx/ajQmVWCN/nMGA0b0ZHtvksYl4S2sWcugooZpTcBJdcsAws1Sxo2rdJQ3H7MuIIUGos585zxuw1nYScbsXoP7P45At9hvnLFmqrdkFdhj3qPb37jTO4AFfydukdKid5XaYkZPn7uFURVuoqrny/25+qtv2bsZ6yoRRAtJRhGxHhI+oWQHOdGQEL6fhAMwAAKmdqfScP/ZF5PVku0C79fF/YFZ6hOnuwrbwScUA5KVO6DTBSPdeYIOhcpnLAADaq2taqiXQ8eZ+8BMG+UHwsXGDcrb4heFT41MMSx0eWBFPaV594AAsyhpfaWVtbFLohrCKRbxDjeY6bFEnxzvHfMYEXA2LJdXdTBhCGU4rrlDD0yDPZBKCeIfPWrRbrgOXhGtqg2Llnt0NY1UzTNROoyDGiJ1YeHjUs/TrDKz1voPbL/kxlbpSu9V4V1LGEeExx9TUFLhDVHXtEVW160/m/qrVwwbmyjkzlVUqTGp0SkU9hDobegeOGWPK8DGMrpqoct1AlgFAchaHkdyyGTcoXbJfQlfzWNtDKShLkIvD7AlMNKD0KJnG6lyshPR8SY0c+YOQ2jaDFWMYtlhzx//jHE88NAPM6qDzTdO4wFaicIOJYuqlP7FlQb0U+rWwIsSQAVEMwcBd3kjGa7D20xMURer8U2CGQQsiExjPx1OBPPb46l1bHCpN08RIrC7J2UV/8GZU15ejIyis6y53Iq0xeWLGY16Em31mJOnGw8nrhv7tGxo1PlEm/9r7iYnfCXyvUnGtfrpJOf/tR0d2Qs0t0hnluNZNXxJBSashS9ix0HyIOp4qjHdWGR2C63drLwj8SZoKWFd2ZLonnWw2A2wrmBBDUdfuMRApegczbILXgsJJTbki2J53W63cPn7KnJn+pbqBf58ziRATskoPvDCNSokmlV9A1mlEnw/6AVRUdYk2/B5uuXuDB5ljGVb7osBTy+m5V9FPTZnLOLA73WwAIlMMbQqUcNszcYDd3q662QLsTQxPpGRYKEZdVgzVs0r7uZpmMEz+AVqIsAAVvZ7lnCkf7MUabXJL5gLUt6OeMNVhaamnwVQf0NuRieIJVuN76vF0wdWqMADE6kYkAY7I3wrtu3tQAY5svrBrY0ilyJiK2XArTGDA5IuFFkiypVgACVryZRCb/m7zeHSOqOSXtYmC/n4IEZtfLeSogkR21MPFrpkxkhihVAADXg/84i+/T80/dhjth0OxNoIspykAAAAAA"
          image2="/images/texas-sign.webp"
          image2Alt="Texas Sign"
          image2Blur="data:image/webp;base64,UklGRpQDAABXRUJQVlA4WAoAAAAgAAAAagAAdwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggpgEAAFAOAJ0BKmsAeAA+6WamTbm/uCIyVgur8B0JYy2ACnWdFxTpAHSlHU6iBMJW8G9D6d82VP0L3N9G4fI5yCpl3gMSE0VBhxlw2d59UOkoZdaiKPGjO/9tbcOJz2Pe2s5xIdxjQR+ITBDjppSZisAuOjYLYVaRlPFSHURqAAD+7UOKSEPnMP5uO1HMg7cQc9fmacCHdiwnONBPXAWD/3+AlmV63WWYiMbOM+832Ya/emgSeOP6CI+WpAdMdSGX+UMG4rwpMjbl0MeQ0Jt01CrNafGPPl78HazlTnqJs74jvBdqV9MXA4ggQ7PUuIoJNkk2r/nJhYpjDToYYpwvkKaKrIruj9ijp12B7GJfAHnHXEsTCaUES5oQQBpoxAuQvTYAH7DGt/xreMDr3UwuocA/Lfl5VBVgipd1oc+vQChJKpeL6kACM/v+fFn2d09XJI7FLvquG761YtMvS/zkDQtAkp7tdbXCk3bRL8gw5gFgdukVayUMqv8uWaj3y0ZoXJZAR1urAR9FJxAt0Oadae1pb51RCNkzduq3SLdLB/tvhfJCfdRQAAAA"
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
