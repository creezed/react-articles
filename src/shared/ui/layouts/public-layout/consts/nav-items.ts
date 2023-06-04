import { IconType } from 'react-icons';
import { FiHome } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { AppRoutes } from '@/shared/enums/router';

interface NavItem {
  name: string;
  icon: IconType;
  linK: AppRoutes;
}
export const navItems: NavItem[] = [
  { name: 'Главная', icon: FiHome, linK: AppRoutes.HOME },
  { name: 'Авторизацяи', icon: AiOutlineUser, linK: AppRoutes.LOGIN },
];
