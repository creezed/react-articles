import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/enums/router';
import { UserRole, UserRoles } from '@/shared/models/user';

interface RequireAuthProps {
  roles?: UserRole[];
  element: JSX.Element;
}

export const GuardAuth = ({
  roles,
  element,
}: RequireAuthProps): JSX.Element => {
  const auth = false;
  const userRoles = [{ id: 1, value: UserRoles.USER }];

  const userHasRole: boolean = useMemo(() => {
    if (!roles) {
      return false;
    }

    return roles.some(role => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={AppRoutes.HOME} replace />;
  }
  if (!userHasRole) {
    return <Navigate to={AppRoutes.HOME} replace />;
  }
  return element;
};
