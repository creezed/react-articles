import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { VscGear } from 'react-icons/vsc';
import { articleSortActions } from '@/features/article-sort';
import { SortModal } from '@/features/article-sort/ui/sort-modal/SortModal';
import { useAppDispatch } from '@/shared/hooks/redux/useAppDispatch';

export const ArticleSort = ({ ...rest }: FlexProps) => {
  const dispatch = useAppDispatch();
  const handleModalOpen = () => dispatch(articleSortActions.setOpen(true));

  return (
    <>
      <Flex
        alignItems="center"
        justify="center"
        borderRadius="50%"
        w="80px"
        h="80px"
        bg="green.400"
        cursor="pointer"
        boxShadow="base"
        color="white"
        onClick={handleModalOpen}
        {...rest}
      >
        <Icon fontSize="24px" as={VscGear} />
      </Flex>
      <SortModal />
    </>
  );
};
