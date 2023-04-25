import { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import HeaderClient from './Header';
import FooterClient from './Footer';

const { Content, Footer } = Layout;

const ClientTheme = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <HeaderClient />
      <div className="container mx-auto z-0">
        <Content style={{ height: "auto", minHeight: "100vh"}}>
         {children}
        </Content>
      </div>
      <FooterClient />
    </Layout>

  )
}

export default ClientTheme