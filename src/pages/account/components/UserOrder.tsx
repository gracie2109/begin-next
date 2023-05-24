import {useState, useEffect,Fragment}   from "react";
import {
    Row,
    Col,
    Typography,
    Grid,
    Table,
    Tag,
    Button,
    Space,
    Tooltip,
    Popconfirm,
    message,
    notification

} from "antd";
import {formatCurrency} from "@/utils";
import type { ColumnsType } from 'antd/es/table';
import { v4 as uuidv4 } from 'uuid';
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    DeleteOutlined,
    SyncOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import moment from "moment";
import {useRouter} from "next/router";
const {useBreakpoint} = Grid;

const UserOrder = () => {
    const screens = useBreakpoint();
    const router = useRouter();

    function getRndInteger(min:any, max:any) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    const confirm = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        notification.open({
            type: "success",
            message: 'Xóa thành công ',
            description:
                'Đơn hàng đã được xóa.',
        });
    };


    const columns: ColumnsType<any> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            width: 50,
            fixed: 'left',
        },
        {
            title: 'Ngày mua',
            dataIndex: 'date',
            key: 'date',
            width: 120,
            fixed: 'left',
        },
        {
            title: 'Mã vận đơn',
            dataIndex: 'orderCode',
            key: 'orderCode',

        },
        {
            title: `${screens.xs ? "SL" : 'Số lượng'}`,
            dataIndex: 'quanty',
            key: 'quanty',
            width: screens.xs ? 50 : 100,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            width: 150,
            render: (_:any, {status}:any) => (
                <>
                    {status === 0 && (  <Tag color="#2db7f5" icon={<ExclamationCircleOutlined />}>Chờ xác nhận</Tag>  )}
                    {status === 1 && (  <Tag color="#108ee9" icon={<ExclamationCircleOutlined />}>Chờ lấy hàng  </Tag>  )}
                    {status === 2 && (  <Tag color="processing" icon={<SyncOutlined spin />}>Đang giao</Tag>  )}
                    {status === 3 && (  <Tag icon={<CheckCircleOutlined />} color="success"> Đã giao</Tag>  )}
                    {status === 4 && (  <Tag icon={<CloseCircleOutlined />} color="error">Đã hủy</Tag>  )}
                </>
            )
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            width: 150,
        },
        {
            title: 'Action',
            key: 'operation',
            render: (_:any, {status, orderCode}:any) => (
                <>
                <Space>
                    <Button type="text" onClick={() => router.push('/account/order/3')}
                            icon={ <Tooltip title="Chi tiết đơn hàng"><InfoCircleOutlined /></Tooltip>}
                    ></Button>
                    {(status === 0 ||  status === 1) &&(

                            <Popconfirm
                                title="Hủy đơn hàng"
                                description=" Bạn có chắc muốn hủy đơn này? "
                                onConfirm={(e:any) =>{confirm(e)}}
                                okText="Đồng ý"
                                cancelText="Từ chối"
                            >
                                <Button type="text" danger icon={<DeleteOutlined />}></Button>
                            </Popconfirm>
                        )
                    }
                </Space>
                </>
            ),
        },
    ];


    const data: any[] = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            key: i +1,
            orderCode: uuidv4().slice(0, 20),
            date: `${moment().format("L")}`,
            quanty: getRndInteger(1, 90),
            totalPrice: `${formatCurrency(45000000)}`,
            status:  getRndInteger(0,5)
        });
    }

    const pageOptionSize = () => {
        const data = [];
        for (let index = 1; index <= 5; index++) {
            const res = 10 * index
            data.push(res)
        }
        return data
    }
    return (
        <Row gutter={[0, 8]}>
            <Col md={24} xs={24}>
                <div className="grid place-items-center">
                    <Typography.Title level={3}>  Đơn hàng của bạn </Typography.Title>
                    {screens.xs && <Typography.Text mark> Kéo sang phải để xem chi tiết bảng</Typography.Text>}
                </div>
            </Col>
            <Col md={24} xs={24}>
                <Table columns={columns} dataSource={data}
                       scroll={{x: 1000}}
                       pagination={data &&  data?.length > 10 && {
                           defaultPageSize: 10,
                           showSizeChanger: true,
                           pageSizeOptions: pageOptionSize()
                       }}
                />
            </Col>
        </Row>
    )
}
export default UserOrder;

