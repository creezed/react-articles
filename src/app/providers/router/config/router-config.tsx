import { SignUpPage } from '@/pages/sign-up-page';
import { SignInPage } from '@/pages/sign-in-page';
import { HomePage } from '@/pages/home-page';
import { AddEditArticlePage } from '@/pages/edit-article-page';
import { ArticlePage } from '@/pages/article-page';
import { AppRoutes, AppRoutesKeys } from '@/shared/enums/router';
import { AppRouteProps } from '@/shared/types/app-route-props.type';
import { PublicLayout } from '@/shared/ui/layouts/public-layout/PublicLayout';

export const routerConfig: Record<AppRoutesKeys, AppRouteProps> = {
  [AppRoutesKeys.HOME]: {
    path: AppRoutes.HOME,
    element: <HomePage />,
    layout: <PublicLayout />,
  },
  [AppRoutesKeys.LOGIN]: {
    path: AppRoutes.LOGIN,
    element: <SignInPage />,
  },
  [AppRoutesKeys.REGISTRATION]: {
    path: AppRoutes.REGISTRATION,
    element: <SignUpPage />,
  },
  [AppRoutesKeys.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <div>not found</div>,
  },
  [AppRoutesKeys.ARTICLE]: {
    path: AppRoutes.ARTICLE,
    element: <ArticlePage />,
    layout: <PublicLayout />,
  },
  [AppRoutesKeys.ADD_ARTICLE]: {
    path: AppRoutes.ADD_ARTICLE,
    element: <AddEditArticlePage />,
    layout: <PublicLayout />,
  },
  [AppRoutesKeys.EDIT_ARTICLE]: {
    path: AppRoutes.EDIT_ARTICLE,
    element: <AddEditArticlePage />,
    layout: <PublicLayout />,
  },
};
