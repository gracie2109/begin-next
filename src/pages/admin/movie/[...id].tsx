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

const MovieDetail: MyPage = () => {
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
            setMode(`Update thông tin ${id?.[0]}`);
            setFormType("normal")
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
                    comp: <Link href="/admin/movie"> <Button type="dashed" icon={<ArrowLeftOutlined />}>Quay lại</Button></Link>
                },
            ]}/>
            {mode === "create" && (
                <>
                    <Button icon={<SiThemoviedatabase />} type="text" onClick={() =>setFormType("tmdb")}>
                        Nhập thông tin form từ TMDB API
                    </Button>
                    <Button type="text" onClick={() =>setFormType("normal")}>
                        Nhập thông tin form bằng cơm
                    </Button>
                </>
            )}

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

export default MovieDetail;
MovieDetail.Layout = "Admin";