import { BreadcrumbCustom } from '@/components/common';
import MenuAdmin from './Menu';
import { Layout } from 'antd';
import { SharedIcons } from '@/utils';
import React, { useState , PropsWithChildren, useLayoutEffect } from 'react';
import Link from "next/link";
const { Header, Sider, Content } = Layout;
const { MenuFoldOutlined,  MenuUnfoldOutlined,  ArrowLeftOutlined} = SharedIcons;

const  AdminTheme = ({children}:PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <Layout className="layout" >
        <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="xs" theme='light'>
            <div className='logo h-[64px] flex items-center justify-start gap-4 pl-7 bg-[#001529]'>
              <ArrowLeftOutlined style={{color: "#ffff"}} />
              <Link href="/" className="font-bold	text-white">{collapsed ? "A" : "APP NAME"}</Link>
            </div>
          <MenuAdmin />
        </Sider>
        <Layout className="site-layout">
          <Header
              className="site-layout-background"
              style={{
                padding: 0,
                backgroundColor: "#001529",
                height: "64px"
              }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger ',
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

