import { Container } from '@chakra-ui/react';

import { PageHeader } from '../../components/page-header';

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
      </Container>
    </main>
  );
}
