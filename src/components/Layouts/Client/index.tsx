import { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import HeaderClient from './Header/index';
import FooterClient from './Footer';

const { Content } = Layout;

const ClientTheme = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <HeaderClient />
      <div className="container mx-auto z-0 ">
        <Content style={{ height: "100%"}}>
         {children}
        </Content>
      </div>
      <FooterClient />
    </Layout>

  )
}

export default ClientTheme