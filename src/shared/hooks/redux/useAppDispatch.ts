import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/store/config/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
