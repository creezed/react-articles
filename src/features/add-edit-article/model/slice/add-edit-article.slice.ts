import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { ArticleBlock } from '@/shared/models/article';
import { ArticleBlockType } from '@/shared/models/article/article-block.enum';
import { AddEditArticleSchema } from '../types/add-edit-article.schema';

const initialState: AddEditArticleSchema = {
  article: {
    id: nanoid(),
    title: 'Заголовок статьи',
    subtitle: 'Поздаголовок статьи',
    img: '',
    createdAt: '',
    likes: 0,
    dislikes: 0,
    blocks: [],
  },
};

const addEditArticleSLice = createSlice({
  name: 'add-edit-article',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.article.title = action.payload;
    },
    setSubtitle(state, action: PayloadAction<string>) {
      state.article.subtitle = action.payload;
    },
    addBlock(state, action: PayloadAction<ArticleBlock>) {
      switch (action.payload.type) {
        case ArticleBlockType.TEXT:
          state.article.blocks.push(action.payload);
          return;
        case ArticleBlockType.IMAGE:
          state.article.blocks.push(action.payload);
          return;
        default:
          state.article.blocks = [...state.article.blocks];
      }
    },
    removeBlock(state, action: PayloadAction<{ index: number }>) {
      state.article.blocks = state.article.blocks.filter(
        (_, blockIndex) => blockIndex !== action.payload.index,
      );
    },
    upBlock() {},
    downBlock() {},
  },
});

export const { actions: addEditArticleActions } = addEditArticleSLice;
export const { reducer: addEditArticleReducer } = addEditArticleSLice;
