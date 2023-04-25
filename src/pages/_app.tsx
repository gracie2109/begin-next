import "@/styles/globals.css";
import 'antd/dist/reset.css'
import 'aos/dist/aos.css'
import 'swiper/css'
import { MyAppProps } from "@/models/common";
import { Layouts } from "@/components/Layouts";
import { wrapper } from "@/app/store";
import AOS from "aos";
import { useEffect } from "react";


function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default wrapper.withRedux(MyApp);