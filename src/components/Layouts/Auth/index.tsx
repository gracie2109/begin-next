import {CSSProperties, PropsWithChildren, useEffect, useState} from 'react';
import {Grid} from "antd";
import Link from "next/link";

const AuthTheme = ({ children }: PropsWithChildren) => {
    const screen = Grid.useBreakpoint();
    const bg= "https://res.cloudinary.com/dta662hjr/image/upload/v1689668612/Life_Goes_On-removebg-preview_z4anny.png"
    const style:CSSProperties = {
        display: "grid",
        placeItems: "flex-end",
        position: "absolute",
        left: 0,
        top: "10%",
        right: "10%",
        overflowY: "hidden"
    }

    return (
        <div style={{ minHeight: "100vh", height: "auto", position:"absolute", width: "100%"}}>
            {!screen.xs && (
                <div className="background overflow-hidden relative min-h-screen">
                    <img src={ bg ? bg: ""} alt="" style={{objectFit: "cover", height: "100vh", overflow: "hidden"}}/>
                    <div style={{
                        backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)",
                        background: "rgb(0 0 0 / 10%)",
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

