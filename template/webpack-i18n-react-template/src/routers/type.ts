export interface MetaProps {
	requiresAuth?: boolean;
	title?: string;
	key?: string;
}

export interface RouteObject {
	children?: RouteObject[];
	element?: React.ReactNode;
	title?:string;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
