import { useParams } from 'react-router-dom';
import { Box, Card, Container, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { AddCommentForm } from '@/features/add-comment-form';
import { ArticleDetail } from '@/entities/article/ui/article-detail/ArticleDetail';
import { CommentList } from '@/entities/comment';

const ArticlePage = () => {
  const { id } = useParams();

  if (!id) {
    return <Text>dfbfb</Text>;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container maxW="1200px">
      <Card as="article" borderRadius="18px">
        <ArticleDetail />
      </Card>
      <Card
        padding="55px"
        borderRadius="16px"
        display="flex"
        flexDirection="column"
        gap="20px"
        my="20px"
      >
        <Box mb="24px">
          <Text fontWeight={500} fontSize="18px" mb="16px">
            Что думаете?
          </Text>
          <AddCommentForm />
        </Box>

        <CommentList />
      </Card>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default ArticlePage;
