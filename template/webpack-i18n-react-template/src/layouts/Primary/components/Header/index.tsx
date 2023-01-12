import React from 'react';
import { Layout } from "antd";
import CollapseIcon from "./components/CollapseIcon";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;

	return (
		<Header>
			<CollapseIcon />
		</Header>
	);
};

export default LayoutHeader;
