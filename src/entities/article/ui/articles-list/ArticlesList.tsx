import { Flex } from '@chakra-ui/react';
import { ArticleListItem } from '@/entities/article';

export const ArticlesList = () => {
  const renderArticle = () => {
    return <ArticleListItem />;
  };

  return (
    <Flex gap="30px" flexDirection="column">
      {Array.from({ length: 10 }).map(renderArticle)}
    </Flex>
  );
};
