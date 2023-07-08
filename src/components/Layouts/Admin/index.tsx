import {BreadcrumbCustom} from '@/components/common';
import MenuAdmin from './Menu';
import {Layout, Grid} from 'antd';
import {SharedIcons} from '@/utils';
import React, {useState, PropsWithChildren, useLayoutEffect} from 'react';
import Link from "next/link";

const {Header, Sider, Content} = Layout;
const {MenuFoldOutlined, MenuUnfoldOutlined, ArrowLeftOutlined} = SharedIcons;

const AdminTheme = ({children}: PropsWithChildren) => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                theme='light'
            >
                <MenuAdmin />
            </Sider>
            <Layout>
                <BreadcrumbCustom />
                <Content style={{ margin: '24px 2px',paddingLeft: "16px" , background: "#ffff", minHeight: "100vh", boxSizing: "border-box", overflow: "hidden"}}>
                    {children}
                </Content>

            </Layout>
        </Layout>
    )
}
export default AdminTheme

