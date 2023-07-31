import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';

type Props = {
    height?:string
}
export const LoadingCustom = ({height}:Props) => {
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin color='#FF0000'/>;
    return (
        <div style={{height: height ? height : "100vh", display: "grid", placeItems:"center"}}>
            <Spin indicator={antIcon}/>
        </div>
    )
}
