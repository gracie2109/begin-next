import "@/styles/globals.css";
import 'antd/dist/reset.css'
import 'aos/dist/aos.css'
import 'swiper/css';
import { MyAppProps } from "@/models/common";
import { Layouts } from "@/components/Layouts";
import { wrapper } from "@/app/store";
import AOS from "aos";
import { useEffect, useLayoutEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { ConfigProvider , Spin,App} from 'antd';
import { HydrationProvider, Server, Client } from "react-hydration-provider";

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] || (({ children }:any) => (
            <App>
                <div className="mx-auto container relative top-0 my-7">
                    {children}
                </div>
            </App>
    )
  );
  useLayoutEffect(() => {
    AOS.init()
  }, []);

  return (
      <HydrationProvider>
          <NextNProgress color="#00b96b" options={{ showSpinner: false }} />
          <Client>
              <ConfigProvider
                  theme={{
                      token: {
                          colorPrimary: '#00b96b',
                          wireframe: true
                      },
                  }}
              >
                <App>
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
                </App>
              </ConfigProvider>

          </Client>
          <Server>
            <div style={{height: "100vh", display: "grid", placeItems: "center"}}>
                <Spin  />
            </div>
          </Server>
      </HydrationProvider>
      
  );
}
export default wrapper.withRedux(MyApp);