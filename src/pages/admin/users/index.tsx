import Link from 'next/link';
import dynamic from "next/dynamic";
import {Button, Tabs, Form} from 'antd';
import { SharedIcons } from '@/utils';
import { HeaderAction } from '@/components/common';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const FetchData  =  dynamic(() => import('./components/fetchData'));
const FilterSection = dynamic(() => import("./components/FilterSection"));
const { FaArrowRight, PlusOutlined } = SharedIcons;


const Index= () => {
    const dispatch = useAppDispatch();
    const [dataActive, setDataActive] = useState<any[]>([]);
    const [dataInActive, setDataInActive] = useState<any[]>([]);
    const [openFilter,setOpenFilter ] = useState<boolean>(false);
    const [form] = Form.useForm();
    const pending = false;

    const onFinish = (values:any) => {
        console.log("onFinish", values)
    }

    const onReset = () => {
        form.resetFields();
        setOpenFilter(!openFilter)
    };
    useEffect(() =>{
        setDataActive(data?.filter((item) => item.status == 0))
        setDataInActive(data?.filter((item) => item.status !== 0))
    },[data])
    const headerActionComp = [
        {
            key: 1,
            comp: <Link href="/admin/users/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo mới người dùng </Button></Link>
        }
    ];
    const tabItems: any[] = [
        {
            key: 1,
            label: `Người dùng đang hoạt động (${dataActive.length})`,
            children: <FetchData dataSource={dataActive} loading={pending} compStatus="active"/>
        },
        {
            key: 2,
            label: `Người dùng ngừng hoạt động (${dataInActive.length}) `,
            children: <FetchData dataSource={dataInActive} loading={pending} compStatus="inActive"/>
        }
    ];

    return (
        <>
            <HeaderAction
                title="Danh sách người dùng"
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

const data = [
    {
        _id: 1,
        name: "Ussers1",
        phone: "0327072255",
        status: 1,
        gender: 1,
        images: undefined,
        googleId: "123123123123",
        facebookId: undefined,
        email: "admin@gmail.com",
        fullName: "Trijnh Phuong thai",
        role: 1,
        dob:undefined,
        address: undefined
    },
    {
        _id: 2,
        name: "ussers 2",
        phone: "0327072255",
        status: 0,
        gender: 1,
        images: undefined,
        googleId: "123123123123",
        facebookId: undefined,
        email: "admin@gmail.com",
        fullName: "Trijnh Phuong thai",
        role: 1,
        dob:undefined,
        address: undefined
    }
]