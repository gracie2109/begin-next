import Link from 'next/link';
import dynamic from "next/dynamic";
import {Button, Tabs, Form} from 'antd';
import { SharedIcons } from '@/utils';
import { HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const FetchData  =  dynamic(() => import('./components/FetchData'));
const FilterSection = dynamic(() => import("./components/FilterSection"));
const { FaArrowRight, PlusOutlined } = SharedIcons;


const Index:MyPage = () => {
    const dispatch = useAppDispatch();
    const [dataActive, setDataActive] = useState<any[]>([]);
    const [dataInActive, setDataInActive] = useState<any[]>([]);
    const [openFilter,setOpenFilter ] = useState<boolean>(false);
    const [form] = Form.useForm();

    useEffect(() => {
        setDataActive(dataAttr.filter((item:any) => item.status === true));
        setDataInActive(dataAttr.filter((item:any) => item.status === false))
    },[dataAttr])

    const onFinish = (values:any) => {
        console.log("onFinish", values)
    }

    const onReset = () => {
        form.resetFields();
        setOpenFilter(!openFilter)
    };

    const headerActionComp = [
        {
            key: 1,
            comp: <Link href="/admin/attributes/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo thuộc tính</Button></Link>
        }
    ];
    const tabItems: any[] = [
        {
            key: 1,
            label: `thuộc tính đang sử dụng  (${dataActive.length})`,
            children: <FetchData dataSource={dataActive}  compStatus="active"/>
        },
        {
            key: 2,
            label: `Thuộc tính ngừng sử dụng (${dataInActive.length}) `,
            children: <FetchData dataSource={dataInActive}  compStatus="inActive"/>
        }
    ];

    return (
        <>
            <HeaderAction
                title="Danh sách thuộc tính"
                components={headerActionComp}
                children={
                    <FilterSection
                        openFilter={openFilter}
                        setOpenFilter={setOpenFilter}
                        form={form}
                        onFinish={onFinish}
                        onReset={onReset}
                    />
                }
            />
            <Tabs
                defaultActiveKey="1"
                size={"small"}
                style={{ marginBottom: 32 }}
                items={tabItems}
            />
        </>
    )
}

export default Index;
Index.Layout="Admin";

export const dataAttr  = [
    {
        name: "mau sac",
        desc: "mau sac",
        status: false,
        isParent: true,
        value: "mau-sac",
        children: [
            {
                name: "vang",
                desc: "vang",
                status: true,
                isParent: false,
                value: "vang",
                children: []
            },
            {
                name: "den",
                desc: "den",
                status: true,
                isParent: true,
                value: "den",
                children: []
            },
        ]
    },
    {
        name: "kich thuoc",
        desc: "kich thuoc",
        status: true,
        isParent: true,
        value: "kich-thuoc",
       children: []
    }

]