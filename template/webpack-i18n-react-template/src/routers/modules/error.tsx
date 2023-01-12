import React from "react";
import lazyLoad from "@/routers/lazyLoad";
import { RouteObject } from "@/routers/type";

// error
const errorRouter: RouteObject[] = [
	{
		path: "/404",
		element: lazyLoad(React.lazy(() => import("@/components/Error/404"))),
	},
];

export default errorRouter;
