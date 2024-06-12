import { chakra, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';

export const SocialButton = ({
  children,
  label,
  href,
  noBg,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
  noBg?: boolean;
}) => {
  return (
    <chakra.button
      bg={noBg ? '' : useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
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
