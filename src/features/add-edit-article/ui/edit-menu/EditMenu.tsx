import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { addEditArticleActions } from '@/features/add-edit-article';
import { useAppDispatch } from '@/shared/hooks/redux/useAppDispatch';

interface EditMenuProps {
  blockIndex: number;
}

export const EditMenu = ({ blockIndex }: EditMenuProps) => {
  const dispatch = useAppDispatch();
  const deleteBlock = () => {
    dispatch(addEditArticleActions.removeBlock({ index: blockIndex }));
  };
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxDragHandleDots2 />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<AiOutlineArrowUp />}>Вверх</MenuItem>
        <MenuItem onClick={deleteBlock} icon={<BsFillTrashFill />}>
          Удалить
        </MenuItem>
        <MenuItem icon={<AiOutlineArrowDown />}>Вниз</MenuItem>
      </MenuList>
    </Menu>
  );
};
