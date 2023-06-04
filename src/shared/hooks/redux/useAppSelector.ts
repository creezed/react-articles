import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store/config/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
