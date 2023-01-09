import React, { FC } from 'react';
import { TabBar } from 'antd-mobile';
import { useNavigate } from 'react-router';

const tabs = [
  {
    key: '/',
    title: '首页',
  },
  {
    key: '/mine',
    title: '我的',
  },
];

const Footer: FC = () => {
  const navigate = useNavigate();

  return (
    <TabBar onChange={(key) => navigate(key)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} title={item.title} />
      ))}
    </TabBar>
  );
};
export default Footer;
