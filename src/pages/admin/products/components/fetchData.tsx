import { Tag, Tooltip, Button} from "antd";
import { SetStateAction, useState } from "react";
import { DataTable } from "@/components/common";
import { getColumnTable,SharedIcons } from "@/utils";
import { useSearchTable } from "@/hooks";
import { RenderImage } from './../../../../components/common/RenderImage/RenderImage';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { useRouter } from 'next/router';

type Props = {
    dataSource: any,
    loading: any,
    compStatus: any
}
const { SettingOutlined,MdModeEditOutline } = SharedIcons
const FetchData = ({ dataSource, loading, compStatus }: Props) => {
    const router = useRouter();
    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<any>>({});


    const handleChange = (pagination: any, filters: SetStateAction<Record<string, FilterValue | null>>, sorter: SorterResult<any>) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter as SorterResult<any>);
    };


    const { getColumnSearchProps } = useSearchTable();
    const data = dataSource && dataSource?.map((item: any) => {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            cost: item.cost,
            quantity: item.quantity,
            status: item.status,
            isPromotion: item.isPromotion,
            discount: item.discount,
            discountAt: item.discountAt,
            short_desc: item.short_desc,
            desc: item.desc,
            images: item.images,
            lastQuantity: item.lastQuantity
        }
    });

    const columns = [
        { ...getColumnTable("images"), render: (_: any, { images }: any) => <RenderImage source={images} preview />,width: "100px",fixed: 'left'},
        { ...getColumnTable("name"), ...getColumnSearchProps("name"), sorter: (a: any, b: any) => a.name.localeCompare(b.name),fixed: 'left' },
        { ...getColumnTable("price"), ...getColumnSearchProps("price"), sorter: (a: any, b: any) => Number(a.price) - Number(b.price) },
        { ...getColumnTable("cost"), ...getColumnSearchProps("cost"), sorter: (a: any, b: any) => Number(a.price) - Number(b.price) },
        { ...getColumnTable("quantity"), ...getColumnSearchProps("quantity"), sorter: (a: any, b: any) => Number(a.price) - Number(b.price) },
        {
            ...getColumnTable("discount"), render: (_: any, { discount }: any) => (
                <>
                    <Tag color={discount?.type === 0 ? "#2db7f5" : "#108ee9"}>
                        {discount?.type === 0 ? `Giảm ${discount?.value} vnd` : `Giảm ${discount?.value}%`}
                    </Tag>
                </>
            ),
            filters: [
                { text: 'Giảm tiền mặt', value: 0 },
                { text: 'Giảm %', value: 1 },
            ],
            onFilter: (value: string, record: any) => record?.discount?.type == value,
        },
        {
            ...getColumnTable("lastQuantity"), render: (_: any, { lastQuantity }: any) => (
                <Tag color={lastQuantity <= 10 ? "geekblue" : "volcano"}>
                    {lastQuantity <= 10 ? `Còn ${lastQuantity} sp` : ` ${lastQuantity} sp`}
                </Tag>
            ),
            sorter: (a: any, b: any) => Number(a.lastQuantity) - Number(b.lastQuantity)
        },
        {
            title: 'Action',
            key: 'operation',
            render: (_:any, record:any) => (
                <div className="flex gap-2">
                     <Tooltip title="Chỉnh sửa">
                        <Button icon={<MdModeEditOutline />} 
                        onClick={() => router.push(`/admin/products/${record?.id}`)}></Button>
                    </Tooltip>
                    <Tooltip title="Cài đặt">
                        <Button icon={<SettingOutlined />} 
                        onClick={() => router.push(`/admin/products/${record?.id}/settings`)}></Button>
                    </Tooltip>
                </div>
            ),
        }
    ];

    return (
        <DataTable
            data={data}
            columns={columns}
            PS={5}
            expandTable={false}
            onChange={handleChange}
        />
    )
}

export default FetchData;