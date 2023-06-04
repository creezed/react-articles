import { Box } from '@chakra-ui/react';
import { ArticleTextBlock } from '@/shared/models/article';
import { ArticleTitle } from '@/shared/ui/article-title/ArticleTitle';
import { ArticleSubtitle } from '@/shared/ui/article-subtitle/ArticleSubtitle';

export interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({
  block,
}: ArticleTextBlockComponentProps) => {
  return (
    <Box>
      {block.title && <ArticleTitle>{block.title}</ArticleTitle>}
      {block.paragraphs.map(paragraph => (
        <ArticleSubtitle key={paragraph}>{paragraph}</ArticleSubtitle>
      ))}
    </Box>
  );
};
