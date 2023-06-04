import { Card, Flex, Heading, Text } from '@chakra-ui/react';
import { BlocksMenu } from '@/features/add-edit-article/ui/blocks-menu/BlocksMenu';
import { addEditArticleSelectors } from '@/features/add-edit-article/model/selectors/add-edit-article.selectors';
import { EditMenu } from '@/features/add-edit-article/ui/edit-menu/EditMenu';
import { ArticleImgBlockComponent } from '@/entities/article/ui/article-img-block-component/ArticleImgBlockComponent';
import { ArticleTextBlockComponent } from '@/entities/article/ui/article-text-block-component/ArticleTextBlockComponent';
import { useAppSelector } from '@/shared/hooks/redux/useAppSelector';
import {
  ArticleBlock,
  ArticleBlockType,
} from '@/shared/models/article/article-block.enum';

interface AddEditArticleProps {
  isEdit: boolean;
}

export const AddEditArticle = ({ isEdit }: AddEditArticleProps) => {
  const article = useAppSelector(addEditArticleSelectors.getArticle);

  const renderBlock = (block: ArticleBlock, index: number) => {
    switch (block?.type) {
      case ArticleBlockType.IMAGE:
        return (
          <Flex key={block.id} justify="space-between" align="center">
            <ArticleImgBlockComponent block={block} />
            <EditMenu blockIndex={index} />
          </Flex>
        );
      case ArticleBlockType.TEXT:
        return (
          <Flex key={block.id} justify="space-between" align="center">
            <ArticleTextBlockComponent block={block} />
            <EditMenu blockIndex={index} />
          </Flex>
        );
      default:
        return null;
    }
  };

  return (
    <Card px="32px" py="36px" as="article" borderRadius="18px">
      <Heading
        as="h3"
        color="blackAlpha.900"
        fontWeight={500}
        fontSize="24px"
        mb="24px"
      >
        {isEdit ? 'Редактирование статьи' : 'Создание статьи'}
      </Heading>
      <Heading
        as="h3"
        color="blackAlpha.900"
        fontWeight={500}
        fontSize="48px"
        mb="8px"
      >
        {article.title}
      </Heading>
      <Text fontSize="20px" as="p">
        {article.subtitle}
      </Text>
      {article?.blocks?.map(renderBlock)}
      <BlocksMenu mt="16px" />
    </Card>
  );
};
