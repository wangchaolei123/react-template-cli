import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import LayoutMenu from "./Primary/components/Menu/index";
import LayoutHeader from "./Primary/components/Header";
import style from './index.less';

function PrimaryLayout() {
	const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={style.container}>
    <Sider trigger={null} width={220} collapsed={collapsed} theme="light">
      <LayoutMenu />
    </Sider>
    <Layout>
    <LayoutHeader />
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
</Layout>
  );
}
export default PrimaryLayout;
