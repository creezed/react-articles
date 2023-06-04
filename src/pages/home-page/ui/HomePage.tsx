import { Container } from '@chakra-ui/react';
import { ArticleSort } from '@/features/article-sort';
import { ArticlesList } from '@/entities/article';

const HomePage = () => {
  return (
    <Container maxW="1200px">
      <ArticlesList />
      <ArticleSort position="absolute" bottom="16px" right="16px" />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
