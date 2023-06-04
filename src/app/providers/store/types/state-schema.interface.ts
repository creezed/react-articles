import { ArticleSortSchema } from '@/features/article-sort';
import { AddEditArticleSchema } from '@/features/add-edit-article';

export interface StateSchema {
  articleSort: ArticleSortSchema;
  addEditArticle: AddEditArticleSchema;
}
