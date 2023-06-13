import { MyPage } from '@/models/common';
import { useRouter } from 'next/router';
import { Button, Form , message } from "antd";
import { HeaderAction } from '@/components/common';
import { useEffect, useState } from "react";
import { SharedIcons } from "@/utils";
import Link from "next/link";
import AttributesForm from "@/pages/admin/attributes/components/AttributesForm";
const { ArrowLeftOutlined } = SharedIcons;
import slug from "slug"

const AttributeDetail: MyPage = () => {
    const [mode, setMode] = useState("");
    const route = useRouter();
    const id = route.query.id;
    const [form] = Form.useForm();
    const [isParent, setIsParent]= useState<boolean>(false);
    const [attrOptions, setAttrOptions] = useState<string | undefined>(undefined);
    const [fakeList, setFakeList] = useState<any>([])

    useEffect(() => {
        if (id == "create" || id === undefined) {
            setMode("create");
        }else{
            setMode(`Update: ${id}`);
        }
    }, [id]);


    useEffect(() => {
        if(mode && id && (mode !== "create" && id !== "create")){
            // form.setFieldsValue({
            //     ...data
            // });
        }
    },[id, mode])



    const onFinish = (values: any) => {
        values.isParent = isParent;
        values.value = slug(values.name);
        console.log("values", values)
        if(mode === "create" || id === "create"){
           if(isParent) {
               values.children = [];
               setFakeList([...fakeList, values])
               route.push("/admin/attributes")
           }else{
               values.parent= isParent ? undefined : attrOptions;
               const findParent = fakeList.find((item:any) => item.value === values.parent);
               findParent.children.push(values);
           }
        }
    }

    console.log("fakeList", fakeList)
    const onReset = () => {
        form.resetFields();
        setAttrOptions(undefined);
        setIsParent(false)
    }

    return (
        <>
            <HeaderAction title={`${mode === "create" ? "Thêm mới" : `${mode}`}`} components={[
                {
                    key: 1,
                    comp: <Link href="/admin/attributes"> <Button type="dashed" icon={<ArrowLeftOutlined />}>Quay lại</Button></Link>
                },
            ]} />
            <AttributesForm
                form={form}
                onFinish={onFinish}
                onReset={onReset}
                formMode={mode}
                isParent = {isParent}
                setIsParent = {setIsParent}
                attrOptions = {attrOptions}
                setAttrOptions = {setAttrOptions}
                data={fakeList}
            />
        </>
    )
}

export default AttributeDetail;
AttributeDetail.Layout = "Admin";


