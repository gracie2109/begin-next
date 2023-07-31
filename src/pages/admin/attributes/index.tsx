import Link from 'next/link';
import dynamic from "next/dynamic";
import {Button, Tabs, Form} from 'antd';
import {SharedIcons} from '@/utils';
import {HeaderAction} from '@/components/common';
import {useContext, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "@/app/hooks";

const FetchData = dynamic(() => import('./components/FetchData'), {ssr: false});
const FilterSection = dynamic(() => import("./components/FilterSection"), {ssr: false});
const {FaArrowRight, PlusOutlined} = SharedIcons;


const Index= () => {
    const dispatch = useAppDispatch();
    const [dataActive, setDataActive] = useState<any[]>([]);
    const [dataInActive, setDataInActive] = useState<any[]>([]);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [form] = Form.useForm();

    useEffect(() => {
        if (data) {
            setDataActive(data?.filter((item: any) => item?.status === true) as any);
            setDataInActive(data?.filter((item: any) => item?.status === false) as any);
        }
    }, [data])

    const onFinish = (values: any) => {
        console.log("onFinish", values)
    }

    const onReset = () => {
        form.resetFields();
    };

    const headerActionComp = [
        {
            key: 1,
            comp: <Link href="/admin/attributes/create"> <Button type="dashed" icon={<PlusOutlined/>}>Tạo thuộc
                tính</Button></Link>
        }
    ];
    const tabItems: any[] = [
        {
            key: 1,
            label: `thuộc tính đang sử dụng  (${dataActive.length})`,
            children: <FetchData dataSource={dataActive} compStatus="active"/>
        },
        {
            key: 2,
            label: `Thuộc tính ngừng sử dụng (${dataInActive.length}) `,
            children: <FetchData dataSource={dataInActive} compStatus="inActive"/>
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
                style={{marginBottom: 32}}
                items={tabItems}
            />
        </>
    )
}

export default Index;

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