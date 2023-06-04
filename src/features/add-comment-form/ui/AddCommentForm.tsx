import { Button, Flex, Textarea } from '@chakra-ui/react';

export const AddCommentForm = () => {
  return (
    <Flex flexDir="column">
      <Textarea
        focusBorderColor="green"
        colorScheme="green"
        variant="filled"
        resize="none"
        _focusVisible={{ outline: '0px none transparent' }}
        minHeight="160px"
        placeholder="Оставьте свой комментарий"
      />
      <Flex w="full" justify="flex-end" mt="12px">
        <Button colorScheme="green" type="submit">
          Отправить
        </Button>
      </Flex>
    </Flex>
  );
};
