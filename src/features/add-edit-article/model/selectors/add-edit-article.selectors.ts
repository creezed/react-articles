import { StateSchema } from '@/app/providers/store/types/state-schema.interface';

export const addEditArticleSelectors = {
  getArticle: (state: StateSchema) => state.addEditArticle.article,
};
