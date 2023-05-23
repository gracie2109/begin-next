import {useState, useEffect}   from "react";
import {Tabs, Card, Grid, Typography, Row, Col, Layout} from "antd";
import {MyPage} from "@/models/common";
import { v4 as uuidv4 } from 'uuid';
import UserInfo from "./components/userInfo";
import UserOrder from "./components/UserOrder";
import ChangePassWord from "@/pages/account/components/ChangePassWord";
const {useBreakpoint} = Grid;
import Link from "next/link"
const Account:MyPage = () => {
    const screens = useBreakpoint();
    const [activeKey, setActiveKey] = useState<string>('1');
    const tabs = [
        {
            id:uuidv4(),
            label: <Typography.Text style={{color: `${activeKey === "1" ? "#000" : "#dcdcdc"}`}}>Thông tin</Typography.Text>,
            key: "1",
            children: <UserInfo />
        },
        {
            id:uuidv4(),
            label: <Typography.Text style={{color: `${activeKey === "2" ? "#000" : "#dcdcdc"}`}}>Đơn mua</Typography.Text>,
            key: "2",
            children: <UserOrder />
        },
        {
            id:uuidv4(),
            label: <Typography.Text style={{color: `${activeKey === "3" ? "#000" : "#dcdcdc"}`}}>Đổi mật khẩu</Typography.Text>,
            key: "3",
            children: <ChangePassWord />
        },
    ];
    const onChange = (key:any) => {
        setActiveKey(key)
    }
    return (
               <div className="w-full mt-5 mx-auto">
                   <Card
                       bodyStyle={{padding: "0 10px", minHeight: "100vh" , backgroundColor: "#ffffff", width: "100%"}}>
                       <Tabs
                           defaultActiveKey="info"
                           tabPosition={"top"}
                           items={tabs}
                           size="large"
                           style={{width: "100%", padding: "0", margin: 0}}
                           onChange={onChange}
                       />
                   </Card>
               </div>
    )
}
export default Account;
Account.Layout = "Main"