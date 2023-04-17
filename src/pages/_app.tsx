import "../styles/globals.css";
import { MyAppProps } from "@/models/common";
import { Layouts } from "@/components/Layouts";
function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;