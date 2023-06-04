import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/shared/models/user';

export type AppRouteProps = RouteProps & {
  roles?: UserRole[];
  layout?: JSX.Element;
};
