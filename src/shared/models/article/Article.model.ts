import { ArticleBlock } from '@/shared/models/article/article-block.enum';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  blocks: ArticleBlock[];
}
