import React from 'react';
import lazyLoad from "@/routers/lazyLoad";
import Layout from "@/layouts/index";
import { RouteObject } from "@/routers/type";

// home
const homeRouter:RouteObject[] = [
	{
		element: <Layout />,
		children: [
			{
				path: "/home",
				title: 'menu.home',
				element: lazyLoad(React.lazy(() => import("@/pages/home/index"))),
			}
		]
	}
];

export default homeRouter;
