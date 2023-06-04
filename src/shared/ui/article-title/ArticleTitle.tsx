import { Heading } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface ArticleTitleProps extends PropsWithChildren {
  contentEditable?: boolean;
}

export const ArticleTitle = ({
  children,
  contentEditable,
}: ArticleTitleProps) => {
  return (
    <Heading
      fontWeight={500}
      color="blackAlpha.900"
      fontSize="28px"
      as="h4"
      my="32px"
      mb="8px"
      outline="none"
      contentEditable={contentEditable}
    >
      {children}
    </Heading>
  );
};
