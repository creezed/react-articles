import { Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

const ErrorPage: FC = () => {
  return (
    <Flex
      height="full"
      width="full"
      justify="center"
      align="center"
      flexDirection="column"
      as="section"
      gap={2}
    >
      <Heading mt="24px" color="text.heading">
        500
      </Heading>
      <Text as="span" fontWeight={500}>
        Something went wrong
      </Text>
      <Text as="span" fontWeight={500}>
        Internal server error
      </Text>
    </Flex>
  );
};

// eslint-disable-next-line import/no-default-export
export default ErrorPage;
