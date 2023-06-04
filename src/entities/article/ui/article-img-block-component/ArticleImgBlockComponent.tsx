import { Box, Image } from '@chakra-ui/react';
import { ArticleImageBlock } from '@/shared/models/article';
import { ArticleTitle } from '@/shared/ui/article-title/ArticleTitle';

export interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock;
}

export const ArticleImgBlockComponent = ({
  block,
}: ArticleImageBlockComponentProps) => {
  return (
    <Box>
      {block.title && <ArticleTitle>{block.title}</ArticleTitle>}
      <Box borderRadius="8px" overflow="hidden">
        <Image src={block.src} alt={block.title} />
      </Box>
    </Box>
  );
};
