import {CSSProperties, PropsWithChildren, useEffect, useState} from 'react';
import {Grid} from "antd";
import Link from "next/link";


type AuthMode = "login" | "register";
const AuthTheme = ({ children }: PropsWithChildren) => {

    const screen = Grid.useBreakpoint();
    const bg= "https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/59fd5bf8-0338-47a5-abb2-c78d169fcd8f/VN-vi-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    const style:CSSProperties = {
        display: "grid",
        placeItems: "flex-end",
        position: "absolute",
        left: 0,
        top: "13%",
        right: "10%"
    }

    return (
        <div style={{ minHeight: "100vh", height: "auto", position:"absolute", width: "100%"}}>
            {!screen.xs && (
                <div className="background overflow-hidden relative min-h-screen">
                    <img src={bg} alt="" style={{objectFit: "cover", width: "100%", height: "100vh", overflow: "hidden"}}/>
                    <div style={{
                        backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
                        background: "rgb(0 0 0 / 40%)",
                        position: "absolute",
                        top : 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }}></div>
                </div>
            )}
            <div className="fixed w-full top-0 bg-slate-100 h-[50px]">
                <Link href="/" className="h-full flex items-center pl-5 uppercase text-black no-underline">APP_NAME</Link>
            </div>
               <div style={!screen.xs ? style : undefined}>
                       {children}
           </div>
        </div>

    )
}

export default AuthTheme;

