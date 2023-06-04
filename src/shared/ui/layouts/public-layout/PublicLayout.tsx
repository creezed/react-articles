import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/ui/layouts/public-layout/header/Header';
import { Sidebar } from './sidebar/Sidebar';

export const PublicLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      maxH="100vh"
      display="flex"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Flex flexDirection="column" w="full">
        <Header onOpen={onOpen} />
        <Box flex={1} ml={{ base: 0, md: 60 }} p="4" overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};
