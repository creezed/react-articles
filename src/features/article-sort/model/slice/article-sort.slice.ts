import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleSortSchema } from '../types/article-sort.schema';

const initialState: ArticleSortSchema = {
  modalIsOpen: false,
};

export const articleSortSlice = createSlice({
  name: 'choose-city',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { actions: articleSortActions } = articleSortSlice;
export const { reducer: articleSortReducer } = articleSortSlice;
