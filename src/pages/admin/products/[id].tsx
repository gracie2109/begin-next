import { MyPage } from '@/models/common';
import { useRouter } from 'next/router';
import MovieForm from "@/pages/admin/movie/components/MovieForm";
import {Button, Form} from "antd";
import { HeaderAction } from '@/components/common';
import {useEffect, useState} from "react";
import {SharedIcons} from "@/utils";
import Link from "next/link";
const {SiThemoviedatabase} = SharedIcons;
const { ArrowLeftOutlined} = SharedIcons;

const ProductDetail: MyPage = () => {
    const [mode, setMode] = useState("");
    const [formType, setFormType] = useState("")
    const route = useRouter();
    const id = route.query.id;
    const [form]  = Form.useForm();

    useEffect(() => {
        if(id && id?.[0] === "create"){
            setMode("create");
            setFormType("normal")
        }else{
            setMode(`Update: ${id?.[0]}`);
            setFormType("normal");
            form.setFieldsValue({...data})
        }
    },[id]);

    const onFinish = (values:any) => {
        console.log("values")
    }

    const onReset  = () =>{
        form.resetFields()
    }

    return (
        <>
            <HeaderAction title={`${mode === "create" ? "Thêm mới": `${mode}` }`} components={[
                {
                    key: 1,
                    comp: <Link href="/admin/products"> <Button type="dashed" icon={<ArrowLeftOutlined />}>Quay lại</Button></Link>
                },
            ]}/>
            <MovieForm
                form={form}
                onFinish={onFinish}
                onReset={onReset}
                formType={formType}
                formMode={mode}
            />
        </>
    )
}

export default ProductDetail;
ProductDetail.Layout = "Admin";

export const data =
    {
        key: 1,
        id: 1,
        name: "Data1",
        image: undefined,
        runTime: 200,
        revenue: 250000000,
        release: Date.now(),
        updateAt: Date.now(),
        status: 0
    }