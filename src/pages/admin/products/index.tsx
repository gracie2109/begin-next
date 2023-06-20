import Link from 'next/link';
import dynamic from "next/dynamic";
import {Button, Tabs, Form} from 'antd';
import { SharedIcons } from '@/utils';
import { HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const FetchData  =  dynamic(() => import('./components/fetchData'));
const FilterSection = dynamic(() => import("./components/FilterSection"));
const { FaArrowRight, PlusOutlined } = SharedIcons;


const Index:MyPage = () => {
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
    
    useLayoutEffect(() =>{
        setDataActive(products.filter((item) => item.status === true));
        setDataInActive(products.filter((item) => item.status !== true))
    },[products])


    const headerActionComp = [
        {
            key: 1,
            comp: <Link href="/admin/products/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo sản phẩm </Button></Link>
        }
    ];
    const tabItems: any[] = [
        {
            key: 1,
            label: `Sản phẩm đang bán (${dataActive.length})`,
            children: <FetchData dataSource={dataActive} loading={pending} compStatus="active"/>
        },
        {
            key: 2,
            label: `Sản phẩm ngừng kinh doanh (${dataInActive.length}) `,
            children: <FetchData dataSource={dataInActive} loading={pending} compStatus="inActive"/>
        }
    ];

    return (
        <>
            <HeaderAction
                title="Danh sách sản phẩm"
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
export const products = [
    {
        id: 1, 
        name: "Sản phẩm 1",
        images: [
            {
                url: "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
            }
        ],
        cost: 123000,
        quantity: 1200,
        lastQuantity: 1200,
        status: true,
        isPromotion: true,
        discount: {
            type: 0,
            value: 1200 
        },
        price: 1000,
        discountAt: null,
        short_desc: "short_desc",
        desc: "desc"
    },
    {
        id: 4, 
        name: "Sản phẩm 4",
        images: [
            {
                url: "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
            }
        ],
        cost: 123000,
        quantity: 1200,
        lastQuantity: 1,
        status: true,
        isPromotion: true,
        discount: {
            type: 0,
            value: 1200 
        },
        price: 1000,
        discountAt: null,
        short_desc: "short_desc",
        desc: "desc"
    },
    {
        id: 3, 
        name: "Sản phẩm 3",
        images: [
            {
                url: "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
            }
        ],
        cost: 123000,
        quantity: 1200,
        lastQuantity: 1200,
        status: true,
        isPromotion: true,
        discount: {
            type: 1,
            value: 1200 
        },
        price: 900,
        discountAt: null,
        short_desc: "short_desc",
        desc: "desc"
    },
    {
        id: 2, 
        name: "Sản phẩm 2",
        images: [
            {
                url: "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
            }
        ],
        cost: 123000,
        quantity: 1200,
        lastQuantity: 1200,
        status: false,
        isPromotion: true,
        discount: {
            type: 0,
            value: 1200 
        },
        price: 1000,
        discountAt: null,
        short_desc: "short_desc",
        desc: "desc"
    }
];
