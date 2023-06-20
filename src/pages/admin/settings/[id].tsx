import { MyPage } from '@/models/common';
import { useRouter } from 'next/router';
import { Button, Form , message } from "antd";
import { HeaderAction } from '@/components/common';
import { useEffect, useState } from "react";
import { SharedIcons } from "@/utils";
import Link from "next/link";
import SettingForm from "./components/SettingForm";
const { ArrowLeftOutlined } = SharedIcons;

const SettingDetail: MyPage = () => {
    const [mode, setMode] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const route = useRouter();
    const id = route.query.id;
    const [form] = Form.useForm();
    const [isPublish, setIsPublish]= useState<any>(false);
    const [isMaintain, setIsMaintain]= useState<any>(false);

    useEffect(() => {
        if (id == "create" || id === undefined) {
            setMode("create");
        }else{
            setMode(`Update: ${id}`);
        }
    }, [id]);


    useEffect(() => {
        if(mode && id && (mode !== "create" && id !== "create")){
            resetData()
        }
    },[id, mode]);


    const resetData = () => {
        setIsPublish(data.status);
        setIsMaintain(data.maintain);
        form.setFieldsValue({
            ...data
        });
    };


    const onFinish = (values: any) => {
        console.log("values", values);
       
    }

    const onReset = () => {
        if(mode === "create"){
            form.resetFields();
        }else{
            resetData()
        }
    }

    return (
        <>
            {contextHolder}
            <HeaderAction title={`${mode === "create" ? "Thêm mới" : `${mode}`}`} components={[
                {
                    key: 1,
                    comp: <Link href="/admin/settings"> <Button type="dashed" icon={<ArrowLeftOutlined />}>Quay lại</Button></Link>
                },
            ]} />
            <SettingForm
                form={form}
                onFinish={onFinish}
                onReset={onReset}
                isPublish={isPublish}
                setIsPublish={setIsPublish}
                isMaintain={isMaintain}
                setIsMaintain={setIsMaintain}
            />
        </>
    )
}

export default SettingDetail;
SettingDetail.Layout = "Admin";

export const data =
{
    _id: 1,
    name: "Eccommerce",
    images: undefined,
    desc: "Website phục vụ mục đích kinh doanh,...",
    status: true,
    maintain: false,
    address: [
        "110 Yên Nghĩa, quận Hà đông, thành phố Hà Nội",
        "112 d Nghĩa, quận Hà đông, thành phố Hà Nội"
    ],
    map: undefined,
    phone: "0327072255",
    email: undefined,
    social: [
        {
            name: "Facebook",
            value: "https://www.facebook.com/"
        },
        {
            name: "Instagram",
            value: "https://www.instagram.com/"
        },

    ]
}