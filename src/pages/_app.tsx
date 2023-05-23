import "@/styles/globals.css";
import 'antd/dist/reset.css'
import 'aos/dist/aos.css'
import 'swiper/css'
import { MyAppProps } from "@/models/common";
import { Layouts } from "@/components/Layouts";
import { wrapper } from "@/app/store";
import AOS from "aos";
import React,{ useEffect } from "react";
import { ConfigProvider , FloatButton} from 'antd';
function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] || (({ children }:any) => <>{children}</>);
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, []);
  return (
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b',
              wireframe: true
            },
          }}
      >
        <Layout>
            <Component {...pageProps} />
        </Layout>

      </ConfigProvider>

  );
}
export default wrapper.withRedux(MyApp);