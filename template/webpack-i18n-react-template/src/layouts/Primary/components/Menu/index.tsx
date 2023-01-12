import React,{useState, useMemo} from "react";
import { useLocation, useNavigate,matchRoutes } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import {useIntl} from 'react-intl';
import { rootRoutes } from '@/routers/index';
import './index.less';
interface MenuParam{
	key:string,
	label:string,
}
const LayoutMenu = () => {
	const { pathname } = useLocation();
	const routes = matchRoutes(rootRoutes, location.pathname);
	const { formatMessage } = useIntl();
	const navigate = useNavigate();

	const menuList = useMemo(()=>{
		const newMenu:any[] = [];
		if(routes) {
			 routes.forEach((item) => {
				if(item.route?.path) {
					const route:MenuParam = {
						key: item.route?.path,
						label: formatMessage({id:item.route?.title}),
					};
				  newMenu.push(route)
				}
			})
		}
		return newMenu;
	},[routes])
	const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
		navigate(key);
	};

	return (
		<div className="menu">
				<Menu
					mode="inline"
					triggerSubMenuAction="click"
					items={menuList}
					onClick={clickMenu}
				></Menu>
		</div>
	);
};
export default LayoutMenu;
