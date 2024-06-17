'use client';

import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  chakra,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { Link } from '@chakra-ui/next-js';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  FaLinkedinIn,
  FaSpotify,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

import { inria } from './fonts';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Box boxShadow="2px 2px 12px hsl(0deg 0% 0% / 0.1)">
      <Container maxW={'6xl'}>
        <Flex
          bg={useColorModeValue('#FFFBF8', 'gray.800')}
          minH={'75px'}
          color={useColorModeValue('gray.500', 'white')}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, lg: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}
          >
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              boxShadow="none"
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex
            flex={{ lg: 2 }}
            justify={{ base: 'center', lg: 'start' }}
            alignItems="center"
          >
            <Link
              href="/"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text
                textAlign={{ base: 'center', lg: 'left' }}
                fontFamily={inria.className}
                fontWeight={600}
                fontSize={{ base: '20px', md: '24px' }}
                color={useColorModeValue('gray.700', 'white')}
              >
                Township Ventures
              </Text>
            </Link>

            <Flex
              display={{ base: 'none', lg: 'flex' }}
              marginLeft={{ lg: 'auto' }}
              ml={10}
              mr={6}
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, lg: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Link href="/contact-us" onClick={onClose}>
              <Button
                display={{ base: 'none', lg: 'inline-flex' }}
                fontSize={'sm'}
                size="sm"
                borderColor="brand.primary"
                variant="outline"
                color="brand.primary"
              >
                Contact Us
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Container>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Link
              href="/"
              _hover={{
                textDecoration: 'none',
              }}
              onClick={onClose}
            >
              <Heading fontSize="3xl" textAlign="center" pt={12} pb={12}>
                Township Ventures
              </Heading>
            </Link>
            <MobileNav onClose={onClose} />
          </DrawerBody>
          <Divider />
          <DrawerFooter justifyContent="center">
            <Box mb={2}>
              <Text fontWeight={500} mb={4} textAlign="center">
                Connect with Us
              </Text>
              <Stack direction={'row'} spacing={4}>
                <SocialButton label={'X'} href={'#'}>
                  <FaXTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaLinkedinIn />
                </SocialButton>
                <SocialButton label={'Youtube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Spotify'} href={'#'}>
                  <FaSpotify />
                </SocialButton>
              </Stack>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  const pathname = usePathname();
  const linkColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Stack direction={'row'} spacing={6} mr={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            href={navItem.href ?? '#'}
            fontSize={'sm'}
            color={pathname == navItem.href ? 'brand.primary' : linkColor}
            _hover={{
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              color: 'brand.primary',
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} display={{ lg: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Box onClick={onClose}>
          <MobileNavItem key={navItem.label} {...navItem} />
        </Box>
      ))}
      <Link href="contact-us" onClick={onClose}>
        <Button
          display="block"
          margin="24px auto"
          fontSize={'sm'}
          size="md"
          borderColor="brand.primary"
          variant="outline"
          color="brand.primary"
        >
          Contact Us
        </Button>
      </Link>
    </Box>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const pathname = usePathname();
  return (
    <Flex
      py={6}
      as={Link}
      justifyContent="center"
      href={href ?? '#'}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Text
        fontSize="xl"
        color={
          pathname == href
            ? 'brand.primary'
            : useColorModeValue('gray.700', 'gray.200')
        }
      >
        {label}
      </Text>
    </Flex>
  );
};

interface NavItem {
  label: string;
  href: string;
  subLabel?: string;
  children?: Array<NavItem>;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'For Owners',
    href: '/for-owners',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Criteria',
    href: '/criteria',
  },
  {
    label: 'Resources',
    href: 'https://blog.township.ventures',
  },
];
