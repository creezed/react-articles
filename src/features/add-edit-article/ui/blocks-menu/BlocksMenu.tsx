import {
  Box,
  BoxProps,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { nanoid } from '@reduxjs/toolkit';
import { addEditArticleActions } from '@/features/add-edit-article';
import { useAppDispatch } from '@/shared/hooks/redux/useAppDispatch';
import { ArticleBlockType } from '@/shared/models/article/article-block.enum';

export const BlocksMenu = (props: BoxProps) => {
  const dispatch = useAppDispatch();
  const addTextBlock = () => {
    dispatch(
      addEditArticleActions.addBlock({
        id: nanoid(),
        type: ArticleBlockType.TEXT,
        title: 'Заголовок нового блока',
        paragraphs: ['Пример парагрофа'],
      }),
    );
  };
  return (
    <Box w="full" {...props}>
      <Menu>
        <MenuButton as={Button} rightIcon={<AiOutlinePlus />}>
          Добавить
        </MenuButton>
        <MenuList>
          <MenuItem onClick={addTextBlock}>Блок с текстом</MenuItem>
          <MenuItem>Блок с картинкой</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
