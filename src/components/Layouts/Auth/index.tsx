import {CSSProperties, PropsWithChildren} from 'react';
import {Grid} from "antd";

const {useBreakpoint} = Grid
const AuthTheme = ({ children }: PropsWithChildren) => {
    const screen = useBreakpoint();

    const style:CSSProperties = {
        display: "grid",
        placeItems: "center",
        height: '100vh',
        position: "fixed",
        left: 0,
        top: 0,
        right: 0
    }

    return (
        <div style={{backgroundColor: "#dcdcdc", minHeight: "100vh"}}>
            <div className="sticky top-0 bg-slate-100 h-[50px]">
                APP_NAME
            </div>
            <div style={!screen.xs ? style : undefined}>
                {children}
            </div>
        </div>

    )
}

export default AuthTheme;

