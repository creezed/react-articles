import { Route, Routes } from 'react-router-dom';
import { AppRouteProps } from '@/shared/types/app-route-props.type';
import { PageLoader } from '@/shared/ui/page-loader/PageLoader';
import { routerConfig } from '../config/router-config';
import { GuardAuth } from './GuardAuth';

export const AppRouter = () => {
  const renderRoute = (route: AppRouteProps) => {
    const loadElement = <PageLoader>{route.element}</PageLoader>;

    const validElement = route?.roles ? (
      <GuardAuth roles={route.roles} element={loadElement} />
    ) : (
      loadElement
    );

    return route?.layout ? (
      <Route key={route.path} element={route.layout}>
        <Route path={route.path} element={validElement} />
      </Route>
    ) : (
      <Route key={route.path} path={route.path} element={validElement} />
    );
  };

  return <Routes>{Object.values(routerConfig).map(renderRoute)}</Routes>;
};
