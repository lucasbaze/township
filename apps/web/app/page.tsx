import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';

import NavBar from '../components/nav-bar';
import { ShadowImage } from '../components/shadow-image';

export default function Page(): JSX.Element {
  return (
    <main>
      <NavBar />
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={4}
        w={{ base: '70%' }}
        margin="auto"
        alignItems={'end'}
      >
        <GridItem colSpan={1}>
          <ShadowImage
            src="./images/austin-skyline-copy.jpeg"
            alt="Austin Skyline"
            width={{ base: '100px', sm: '200px', md: '300px' }}
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <ShadowImage
            src="./images/texas-long-horn-copy.jpeg"
            alt="Texas Long Horn"
            width={{ base: '200px', sm: '274px', md: '480px' }}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <ShadowImage
            src="./images/whataburger.png"
            alt="Whataburger"
            width={{ base: '100px', sm: '200px', md: '300px' }}
          />
        </GridItem>
      </Grid>
      <Box margin="auto" width="370px" textAlign="center">
        <Heading fontWeight={'300'}>
          We Buy Texas Businesses and Build Them to Last Forever
        </Heading>
      </Box>
    </main>
  );
}
