import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from '@/routers/type';
import Login from '@/pages/login/index';

import home from './modules/home';
import error from './modules/error';

export const rootRoutes:RouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/login' />
	},
	{
		path: '/login',
		element: <Login />,
	},
	...home,
	...error,
	{
		path: '*',
		element: <Navigate to='/404' />
	}
];

export function AppRoutes() {
  return useRoutes(rootRoutes);
}