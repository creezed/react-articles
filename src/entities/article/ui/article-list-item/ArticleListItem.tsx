import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Tag,
  Text,
} from '@chakra-ui/react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const ArticleListItem = () => {
  return (
    <Card
      borderRadius="12px"
      as={Link}
      to={`/article/${1}`}
      py="18px"
      px="38px"
    >
      <Flex justify="space-between" gap={4} mb="18px">
        <Flex alignItems="center" gap={3}>
          <Avatar size="sm" />
          <Text color="gray.600" fontSize="16px" fontWeight={500} noOfLines={1}>
            Автор статьи
          </Text>
        </Flex>
        <Tag size="md" variant="solid" colorScheme="green">
          Официальная статья
        </Tag>
      </Flex>
      <Flex mb="18px" justify="space-between">
        <Flex flexDir="column">
          <Heading
            mb="18px"
            color="blackAlpha.800"
            fontWeight={600}
            as="h3"
            fontSize="28px"
          >
            Что было добавлено в ECMAScript в 2023 году{' '}
          </Heading>
          <Text maxW="600px" fontSize="18px" noOfLines={3}>
            Рассказываем, что было добавлено в ECMAScript в 2023 году. Это
            стандарт JavaScript, который устанавливает правила и синтаксис
            JS-кода.{' '}
          </Text>
        </Flex>
        <Box h="120px" w="120px" borderRadius="12px" overflow="hidden">
          <Image
            h="full"
            w="full"
            objectFit="cover"
            src="https://media.tproger.ru/uploads/2023/05/3183ffd7-f28f-4bad-addb-2854ddadb63f-cover-icon-original.png"
            alt="article"
          />
        </Box>
      </Flex>
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
    </Card>
  );
};
