import {useState} from "react";
import {Tabs, Card, Typography} from "antd";
import {v4 as uuidv4} from 'uuid';
import dynamic from 'next/dynamic';

const UserInfo = dynamic(() => import("./components/userInfo"));
const UserOrder = dynamic(() => import("./components/UserOrder"));
const AddressBook = dynamic(() => import("./components/AddressBook"));
const ChangePassWord = dynamic(() => import("@/pages/account/components/ChangePassWord"));


const Account = () => {
    const [activeKey, setActiveKey] = useState<string>("1");
    //@ts-ignore
    const tabs = [
        {
            id: uuidv4(),
            label: <Typography.Text style={{color: `${activeKey === "1" ? "#000" : "rgb(142 138 138)"}`}}>Thông
                tin</Typography.Text>,
            key: "1",
            children: activeKey === "1" ? <UserInfo/> : <></>

        },
        {
            id: uuidv4(),
            label: <Typography.Text style={{color: `${activeKey === "2" ? "#000" : "rgb(142 138 138)"}`}}>Đơn
                mua</Typography.Text>,
            key: "2",
            children: activeKey === "2" ? <UserOrder/> : <></>,
        },
        {
            id: uuidv4(),
            label: <Typography.Text style={{color: `${activeKey === "3" ? "#000" : "rgb(142 138 138)"}`}}>Đổi mật
                khẩu</Typography.Text>,
            key: "3",
            children: activeKey === "3" ? <ChangePassWord/> : <></>,
        },
        {
            id: uuidv4(),
            label: <Typography.Text style={{color: `${activeKey === "4" ? "#000" : "rgb(142 138 138)"}`}}>Sổ địa
                chỉ</Typography.Text>,
            key: "4",
            children: activeKey === "4" ? <AddressBook/> : <></>
        }
    ];

    return (
        <div className="w-full mt-5 mx-auto">
            <Card
                bodyStyle={{padding: "0 10px", minHeight: "100vh", backgroundColor: "#ffffff", width: "100%"}}>
                <Tabs
                    defaultActiveKey="info"
                    tabPosition={"top"}
                    items={tabs}
                    size="large"
                    style={{width: "100%", padding: "0", margin: 0}}
                    onChange={(key) => {
                        setActiveKey(key)
                    }}
                />
            </Card>
        </div>
    )
}
export default Account;