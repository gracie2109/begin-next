import {useState, useEffect}   from "react";
import {Tabs, Card,Grid} from "antd";
import {MyPage} from "@/models/common";
import { v4 as uuidv4 } from 'uuid';
import UserInfo from "./components/userInfo";
import UserOrder from "./components/UserOrder";
import ChangePassWord from "@/pages/account/components/ChangePassWord";
const {useBreakpoint} = Grid
const Account:MyPage = () => {
    const screens = useBreakpoint()
    const tabs = [
        {
            id:uuidv4(),
            label: "Info",
            key: "info",
            children: <UserInfo />
        },
        {
            id:uuidv4(),
            label: "Đơn mua",
            key: "order",
            children: <UserOrder />
        },
        {
            id:uuidv4(),
            label: "Đổi mật khẩu",
            key: "changePw",
            children: <ChangePassWord />
        },
    ];
    const [tabPosition, setTabPosition] = useState<any>("");

    useEffect(() => {
            if(screens.xs || screens.sm) {
                setTabPosition("top")
            }else{
                setTabPosition("left")
            }
    },[screens]);

    return (
       <Card
           bodyStyle={{padding: "0 10px", minHeight: "100vh" , backgroundColor: "#ffffff", width: "100%"}}>
           <Tabs
               defaultActiveKey="info"
               tabPosition={tabPosition}
               items={tabs}
               style={{width: "100%", padding: "0", margin: 0}}
           />
       </Card>
    )
}
export default Account;
Account.Layout = "Main"