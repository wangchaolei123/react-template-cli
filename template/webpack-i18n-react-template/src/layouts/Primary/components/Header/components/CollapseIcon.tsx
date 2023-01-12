import React,{useState} from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const CollapseIcon = () => {
	// 后期放在状态管理里面去控制
	const [isCollapse,setCollapsed] = useState(false);
	return (
		<div
			className="collapsed"
			onClick={() => {
				//updateCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

export default CollapseIcon;
