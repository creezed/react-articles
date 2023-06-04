import { StateSchema } from '@/app/providers/store/types/state-schema.interface';

export const articleSortSelectors = {
  getOpen: (state: StateSchema) => state.articleSort.modalIsOpen,
};
