import { Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface ArticleSubtitleProps extends PropsWithChildren {
  contentEditable?: boolean;
}

export const ArticleSubtitle = ({
  children,
  contentEditable = false,
}: ArticleSubtitleProps) => {
  return (
    <Text
      my="8px"
      fontSize="18px"
      as="p"
      outline="none"
      contentEditable={contentEditable}
    >
      {children}
    </Text>
  );
};
