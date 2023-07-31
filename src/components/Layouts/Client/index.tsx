import {PropsWithChildren, useRef,useState} from 'react';
import {Layout, Spin} from 'antd';

const HeaderClient = dynamic(() => import('./Header'))
const FooterClient = dynamic(() => import('./Footer'));
import {useObserver} from "@/hooks"
import dynamic from "next/dynamic";

const {Content} = Layout;

const ClientTheme = ({children}: PropsWithChildren) => {
    const mainRef = useRef(null);
    const showMain = useObserver(mainRef);
    return (
        <Layout>
            <HeaderClient/>
            <div className="container mx-auto z-0 " ref={mainRef}>
                {!showMain ?
                    <div style={{height: "100vh", display: "grid", placeItems: "center"}}>
                        <Spin/>
                    </div>
                    : (
                        <Content style={{height: "100%"}}>
                            {children}
                        </Content>
                    )}
            </div>
            <FooterClient/>
        </Layout>

    )
}

export default ClientTheme