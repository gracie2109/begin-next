import AttributesForm from '@/pages/admin/attributes/components/AttributesForm';
import Link from 'next/link';
import slug from "slug";
import { Button, Form, App } from 'antd';
import { HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { SharedIcons } from '@/utils';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
const { ArrowLeftOutlined } = SharedIcons;

 
const EditAttribute:MyPage = () => {
    const [form]= Form.useForm();
    const route = useRouter();
    const id = route.query.id;
    const [isParent, setIsParent] = useState<boolean>(false);
    const [attrOptions, setAttrOptions] = useState<string | undefined>(undefined);
    const [status, setStatus] = useState<boolean>(false);
    const [mode, setMode]= useState<any>(null);

    const items = useMemo(() => { return data.find((item) => item?._id === id) },[id]);
    const parents = useMemo(() => { return data.filter((item) => item.status == true ) },[]);


    useEffect(() => {
        if (id == "create" || id === undefined) setMode("create");
        else setMode(`Update: ${id}`);
    }, [id]);


    useEffect(() =>{ 
        if(mode && id && (mode !== "create" && id !== "create"))  renderData();
        
    },[items,mode]);


    const renderData = () => {
        if(items && mode !== "create") {
            setIsParent(items?.isParent);
            setStatus(items?.status);
            form.setFieldsValue({
                ...items
            });
        }
    }

    const onReset = () => { 
        if(items && mode !== "create") {
            renderData();
        }else{
            form.resetFields();
            setAttrOptions(undefined);
            setIsParent(false);
            setStatus(true)  
        }
        
    }
  
    const onFinish = (values: any) => {
       if(mode === "create"){
        values.isParent = isParent;
        values.value = slug(values.name);
            if (isParent) {
                values.children = [];
                route.push("/admin/attributes")
            } else {
                values.parent = isParent ? undefined : attrOptions;
                const findParent = parents.find((item: any) => item.value === values.parent);
                if(findParent){
                    findParent.children.push(values);
                }
            }
       }
    }
    return (
        <>
          <HeaderAction title={mode === "create" ? "Thêm mới" : "Cập nhật"} components={[
                {
                    key: 1,
                    comp: <Link href="/admin/attributes"> <Button type="dashed" icon={<ArrowLeftOutlined/>}>Quay
                        lại</Button></Link>
                },
            ]}/>
            <AttributesForm
                form={form}
                onFinish={onFinish}
                onReset={onReset}
                parents={parents}
                isParent={isParent}
                setIsParent={setIsParent}
                attrOptions={attrOptions}
                setAttrOptions={setAttrOptions}
                status={status}
                setStatus={setStatus}
             />
        </>
    )
}
export default  EditAttribute;
EditAttribute.Layout="Admin";

export const data = [
    {
      _id: "1",
      name: "mau sac",
      desc: "mau sac",
      status: true,
      isParent: true,
      value: "mau-sac",
      children: [
        {
          name: "vang",
          desc: "vang",
          status: true,
          isParent: false,
          value: "vang",
          _id: "1.1",
          children: [],
        },
        {
          name: "den",
          desc: "den",
          status: true,
          isParent: true,
          value: "den",
          _id: "1.2",
          children: [],
        },
      ],
    },
    {
      name: "kich thuoc",
      desc: "kich thuoc",
      status: true,
      isParent: true,
      value: "kich-thuoc",
      children: [],
      _id: "2",
    },
  ];