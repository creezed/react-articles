/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { navItems } from '@/shared/ui/layouts/public-layout/consts/nav-items';
import { NavItem } from '@/shared/ui/layouts/public-layout/NavItem';
import { AppRoutes } from '@/shared/enums/router';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      as="aside"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          as={Link}
          to={AppRoutes.HOME}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          DL
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {navItems.map(item => (
        <NavItem
          key={item.name}
          link={item.linK}
          icon={item.icon}
          text={item.name}
        />
      ))}
    </Box>
  );
};
