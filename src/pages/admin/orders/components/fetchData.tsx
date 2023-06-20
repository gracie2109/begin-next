import {useSearchTable} from "@/hooks";
import {formatCurrency, getColumnTable, SharedIcons} from "@/utils";
import {DataTable, RenderImage} from "@/components/common";
import {Button, Tag, Tooltip} from "antd";
import {useRouter} from "next/router";

type Props = {
    dataSource: any,
    loading: any,
    compStatus: any
}
const {SettingOutlined, MdModeEditOutline} = SharedIcons
const FetchData = ({dataSource, loading, compStatus}: Props) => {
    const {getColumnSearchProps} = useSearchTable();
    const router = useRouter();
    const columns = [
        {
            ...getColumnTable("orderCode"), ...getColumnSearchProps("orderCode"),
            sorter: (a: any, b: any) => a.orderCode.localeCompare(b.orderCode),
            fixed: 'left'
        },
        {
            ...getColumnTable("shippingInfo"),
            sorter: (a: any, b: any) => a?.shippingInfo?.phone.localeCompare(b?.shippingInfo?.phone),
            render: (_:any, {shippingInfo}:any) => <Tooltip title={shippingInfo?.email}>{shippingInfo?.phone}</Tooltip>,
            fixed: 'left'
        },
        {
            ...getColumnTable("totalPrice"), ...getColumnSearchProps("totalPrice"),
            sorter: (a: any, b: any) => Number(a.totalPrice) - Number(b.totalPrice),
            render: (_: any, {totalPrice}: any) => <>{formatCurrency(totalPrice)}</>
        },
        {
            ...getColumnTable("quantity"), ...getColumnSearchProps("quantity"),
            sorter: (a: any, b: any) => Number(a.quantity) - Number(b.quantity)
        },
        {
            title: 'Action',
            key: 'operation',
            render: (_: any, record: any) => (
                <div className="flex gap-2">
                    <Tooltip title="Xem">
                        <Button icon={<MdModeEditOutline/>}
                                onClick={() => router.push(`/admin/orders/${record?.id}`)}></Button>
                    </Tooltip>
                </div>
            ),
        }
    ];
    const data = dataSource && dataSource?.map((item: any) => {
        const quantity = item.orderItem.reduce((acc: any, curr: any) => acc + curr.quantity, 0);

        return {
            id: item._id,
            orderCode: item.orderCode,
            orderPrice: item.orderPrice,
            totalPrice: item.totalPrice,
            status: item.status,
            shippingFee: item.shippingFee,
            createddAt: item.createddAt,
            shippingInfo: item.shippingInfo,
            orderItem: item?.orderItem.length, // sl mặt hàng
            quantity: quantity, // sl sản phẩm
            voucherId: item.voucherId,
        }
    });
    return (
        <DataTable
            data={data}
            columns={columns}
            PS={5}
            expandTable={false}
        />
    )
}

export default FetchData;