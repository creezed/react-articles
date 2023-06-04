import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { AddEditArticle } from '@/features/add-edit-article';

const AddEditArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Container maxW="1200px">
      <AddEditArticle isEdit={isEdit} />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default AddEditArticlePage;
