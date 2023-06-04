import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import {
  AiOutlineDislike,
  AiOutlineEdit,
  AiOutlineLike,
  AiOutlinePlus,
  AiOutlineWarning,
} from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const CommentCard = () => {
  return (
    <Flex flexDirection="column">
      <Flex justify="space-between">
        <Flex align="center" gap={3} mb="10px">
          <Avatar name="Dan Abra" />
          <Text>Dan Abra</Text>
        </Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BsThreeDotsVertical />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AiOutlineEdit fontSize="18px" />}>
              Добавить в статью
            </MenuItem>
            <MenuItem icon={<AiOutlinePlus fontSize="18px" />}>
              Присоединиться к редактированию
            </MenuItem>
            <MenuItem icon={<AiOutlineWarning fontSize="18px" />}>
              Пожаловаться
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Text fontSize="16px" color="gray.700" mb={1}>
        ИМХО, ничего лучше ES3-ES5 не придумали
      </Text>
      <Flex gap={2} alignItems="center">
        <Text fontSize="16px" color="gray.600">
          10 мая в 14.51
        </Text>
        <Text
          fontSize="16px"
          color="gray.600"
          cursor="pointer"
          _hover={{ color: 'green' }}
        >
          Ответить
        </Text>
        <Flex alignItems="center" gap={4}>
          <Flex
            alignItems="center"
            gap={3}
            p={2}
            borderRadius="8px"
            transition=".25s"
            _hover={{ bg: 'green.100' }}
            cursor="pointer"
          >
            <Icon fontSize="24px" as={AiOutlineLike} />
            <Text as="span">12</Text>
          </Flex>
          <Flex
            alignItems="center"
            gap={3}
            p={2}
            borderRadius="8px"
            transition=".25s"
            _hover={{ bg: 'green.100' }}
            cursor="pointer"
          >
            <Icon fontSize="24px" as={AiOutlineDislike} />
            <Text as="span">12</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
