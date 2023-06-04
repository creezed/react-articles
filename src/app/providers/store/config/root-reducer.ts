import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store/types/state-schema.interface';
import { articleSortReducer } from '@/features/article-sort';
import { addEditArticleReducer } from '@/features/add-edit-article';

export const rootReducer = combineReducers<Record<keyof StateSchema, Reducer>>({
  articleSort: articleSortReducer,
  addEditArticle: addEditArticleReducer,
});
