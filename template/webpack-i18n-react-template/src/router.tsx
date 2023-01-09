import React, { lazy } from 'react';
import { useRoutes } from 'react-router';

const Home = lazy(() => import('@/pages/home'));
const Mine = lazy(() => import('@/pages/mine'));
const Login = lazy(() => import('@/pages/login'));

export function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'mine',
      element: <Mine />,
    },
  ]);
}

const a = {
  form: {},
  fields: [
    {
      component: 'Upload',
      componentProps: {},
      validation: {},
      hidden: {
        dataPredicate: {
          conditions: [
            {
              field: ':searchParams.disclaimer',
              condition: 'string_equals',
              value: false,
            },
          ],
        },
      },
    },
  ],
};
