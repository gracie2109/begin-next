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
import { HydrationProvider, Server, Client } from "react-hydration-provider";

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] || (({ children }:any) => (
          <div className="mx-auto container relative top-0 my-7">
              {children}
          </div>)
  );
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, []);
  return (
      <HydrationProvider>
          <Client>
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

          </Client>
          <Server>
              <p>Loading....</p>
          </Server>
      </HydrationProvider>
  );
}
export default wrapper.withRedux(MyApp);