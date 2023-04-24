import { PropsWithChildren } from 'react';
import HeaderClient from './Header'
import { Col, Layout, Row } from 'antd';

const { Content, Footer } = Layout;
type Props = {}

const ClientTheme = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <HeaderClient />
      <div className="container mx-auto z-0">
        <Content style={{ height: "auto", minHeight: "100vh"}}>
         {children}
        </Content>
        <Footer style={{ textAlign: 'center', position: "relative", bottom: 0, width: '100%' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </div>
    </Layout>

  )
}

export default ClientTheme