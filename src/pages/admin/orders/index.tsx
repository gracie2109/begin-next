import Link from 'next/link';
import dynamic from "next/dynamic";
import {Button, Tabs, Form} from 'antd';
import {SharedIcons} from '@/utils';
import {HeaderAction} from '@/components/common';
import {MyPage} from '@/models/common';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import { v4 as uuidv4 } from 'uuid';
const FetchData = dynamic(() => import('./components/fetchData'));
const FilterSection = dynamic(() => import("./components/FilterSection"));
const {FaArrowRight, PlusOutlined} = SharedIcons;


const Index: MyPage = () => {
    const dispatch = useAppDispatch();
    const [dataActive, setDataActive] = useState<any[]>([]);
    const [dataInActive, setDataInActive] = useState<any[]>([]);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [form] = Form.useForm();
    const pending = false;

    const onFinish = (values: any) => {
        console.log("onFinish", values)
    }

    useEffect(() => {
        if(data){
            setDataActive(data?.filter((item:any) => [4,5].includes(item.status)));
            setDataInActive(data?.filter((item:any) => [4,5]!.includes(item.status)));
        }
    },[data])
    const onReset = () => {
        form.resetFields();
        setOpenFilter(!openFilter)
    };

    const headerActionComp = [
        {
            key: 1,
            comp: <Link href="/admin/products/create"> <Button type="dashed" icon={<PlusOutlined/>}>Tạo sản
                phẩm </Button></Link>
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
                title="Danh sách đơn hàng"
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
Index.Layout = "Admin";
const data = [
    {
        _id: "123",
        userId: "1",
        shippingInfo: {
            name: "người dùng 1",
            phone: "0327072255",
            isMain: true,
            id: "6f7da6db-2bd9-47e4-9375-66c47ab3f438",
            address: {
                province: {
                    "key": "92",
                    "value": "92",
                    "children": "Thành phố Cần Thơ"
                },
                district: {
                    "key": "925",
                    "value": "925",
                    "children": "Huyện Cờ Đỏ"
                },
                ward: {
                    "key": "31274",
                    "value": "31274",
                    "children": "Xã Đông Thắng"
                },
                desc: "sssas"
            }
        },
        orderItem: [
            {
                _id: "1231313213",
                name: "Sản phẩm 1",
                price: 120000,
                quantity: 2
            },
            {
                _id: "1231313213",
                name: "Sản phẩm 2",
                price: 120000,
                quantity: 1
            },
            {
                _id: "1231313213",
                name: "Sản phẩm 1",
                price: 120000,
                quantity: 12
            }
        ],
        orderPrice: 1200000,
        voucherId: {
            name: "qweqweqwe",
            cost: 123000,
            quantity: "123",
            isPushlish: false,
            discount: {type: 1, value: 10},
            short_desc: "123hgrfdcxsz",
            desc: ",kmhngbfvdcsxz",
            isPromotion: true,
            price: 111000

        },
        totalPrice: 1200000,
        createddAt: new Date(),
        status: 1,// 0 :đâng tiếp nhaann, 1: chờ xuwr lí, 2: đang vận chuyên, 3:giao thành ooong, 4: huuyr đơn, 5: đơn hoàn
        shippingFee: 0,
        orderCode: uuidv4()
    },
    {
        _id: "123",
        userId: "6f7da6db-2bd9-47e4-9375-66c47ab3f438",
        shippingInfo: {
            name: "người dùng 2",
            phone: "0904789343",
            isMain: true,
            id: "6f7da6db-2bd9-47e4-9375-66c47ab3f438",
            address: {
                province: {
                    "key": "92",
                    "value": "92",
                    "children": "Thành phố Cần Thơ"
                },
                district: {
                    "key": "925",
                    "value": "925",
                    "children": "Huyện Cờ Đỏ"
                },
                ward: {
                    "key": "31274",
                    "value": "31274",
                    "children": "Xã Đông Thắng"
                },
                desc: "sssas"
            }
        },
        orderItem: [
            {
                _id: "1231313213",
                name: "Sản phẩm 1",
                price: 120000,
                quantity: 2
            },
            {
                _id: "1231313213",
                name: "Sản phẩm 2",
                price: 120000,
                quantity: 1
            },
            {
                _id: "1231313213",
                name: "Sản phẩm 1",
                price: 120000,
                quantity: 12
            }
        ],
        orderPrice: 1200000,
        voucherId: {
            name: "qweqweqwe",
            cost: 123000,
            quantity: "123",
            isPushlish: false,
            discount: {type: 1, value: 10},
            short_desc: "123hgrfdcxsz",
            desc: ",kmhngbfvdcsxz",
            isPromotion: true,
            price: 111000

        },
        totalPrice: 1200000,
        createddAt: new Date(),
        status: 4,// 0 :đâng tiếp nhaann, 1: chờ xuwr lí, 2: đang vận chuyên, 3:giao thành ooong, 4: huuyr đơn, 5: đơn hoàn
        shippingFee: 0,
        orderCode: uuidv4()
    },
]