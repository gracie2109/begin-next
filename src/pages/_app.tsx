import "@/styles/globals.css";
import 'antd/dist/reset.css'
import 'aos/dist/aos.css'
import 'swiper/css';
import {MyAppProps} from "@/models/common";
import {Layouts} from "@/components/Layouts";
import {wrapper} from "@/app/store";
import AOS from "aos";
import React, {useEffect, ReactDOM, Suspense} from "react";
import NextNProgress from "nextjs-progressbar";
import {ConfigProvider, Spin, App} from 'antd';
import {useRouter} from 'next/router';
import {HydrationProvider, Server, Client} from "react-hydration-provider";
import {LoadingCustom} from "@/components/common";


function MyApp({Component, pageProps}: MyAppProps) {
    useEffect(() => {
        AOS.init()
    }, []);
    const {asPath} = useRouter();

    const LayoutByPath = ({children}: ReactDOM | Element | any) => {
        if (asPath.includes("/admin")) {
            return <Layouts.Admin>{children}</Layouts.Admin>;
        } else if (asPath.includes("/auth")) {
            return <Layouts.Auth>{children}</Layouts.Auth>;
        } else if (asPath.includes("/")) {
            return <Layouts.Main>{children}</Layouts.Main>;
        }
        return (
            <div className="mx-auto container relative top-0 my-7">
                {children}
            </div>
        );
    };
    return (
        <HydrationProvider>
           <Client>
               <ConfigProvider theme={{token: {colorPrimary: '#3f50b5'}}}>
                   <App>
                       <LayoutByPath>
                           <Component {...pageProps} />
                       </LayoutByPath>
                   </App>
               </ConfigProvider>
               <NextNProgress color="#3f50b5" options={{showSpinner: false}}/>
           </Client>
            <Server>
                <LoadingCustom />
            </Server>
        </HydrationProvider>
    );
}

export default wrapper.withRedux(MyApp);