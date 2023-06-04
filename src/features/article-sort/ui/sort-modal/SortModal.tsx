import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import { articleSortSelectors } from '@/features/article-sort/model/selectors/article-sort.selectors';
import { articleSortActions } from '@/features/article-sort';
import { useAppDispatch } from '@/shared/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/redux/useAppSelector';

export const SortModal = () => {
  const dispatch = useAppDispatch();

  const modalOpen = useAppSelector(articleSortSelectors.getOpen);

  const handleModalClose = () => dispatch(articleSortActions.setOpen(false));
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={modalOpen}
      onClose={handleModalClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Сортировка статей</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select placeholder="Категория">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost">Сортировать</Button>
          <Button colorScheme="green" mr={3} onClick={handleModalClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
