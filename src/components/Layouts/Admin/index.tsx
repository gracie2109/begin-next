import { BreadcrumbCustom } from '@/components/common';
import MenuAdmin from './Menu';
import { Layout } from 'antd';
import { SharedIcons } from '@/utils';
import React, { useState , PropsWithChildren } from 'react';
import Link from "next/link";
const { Header, Sider, Content } = Layout;
const { MenuFoldOutlined,  MenuUnfoldOutlined,  ArrowLeftOutlined} = SharedIcons;

const  AdminTheme = ({children}:PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
 
  return (
      <Layout className="layout" >
        <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="xs">
            <div className='logo'>
              <Link href="/">APP NAME</Link>
            </div>
          <MenuAdmin />
        </Sider>
        <Layout className="site-layout">
          <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
            <BreadcrumbCustom />
          <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                overflow: "hidden"
              }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
  )
}
export default AdminTheme

