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
            id: item?._id,
            name: item?.name,
            phone: item?.phone,
            status: item?.status,
            gender: item?.gender,
            images: item?.images,
            email: item?.email,
            fullName: item?.fullName,
            role: item?.role,
            dob:item?.dob,
        }
    });

    const columns = [
        { ...getColumnTable("images"), render: (_: any, { images }: any) => <RenderImage source={images} preview />,width: "100px",fixed: 'left'},
        { ...getColumnTable("email"), ...getColumnSearchProps("email"), sorter: (a: any, b: any) => a.email.localeCompare(b.email) },
        { ...getColumnTable("name"), ...getColumnSearchProps("name"), sorter: (a: any, b: any) => a.name.localeCompare(b.name) },
        { ...getColumnTable("fullName"), ...getColumnSearchProps("fullName"), sorter: (a: any, b: any) => a.fullName.localeCompare(b.fullName) },
        {
            ...getColumnTable("role"), render: (_: any, { role }: any) => (
                <>
                    <Tag color={role === 0 ? "#2db7f5" : "#108ee9"}>
                        {role === 0 ? `Người dùng` : `Quản trị viên`}
                    </Tag>
                </>
            ),
            filters: [
                { text: 'Người dùng', value: 0 },
                { text: 'Quản trị viên', value: 1 },
            ],
            onFilter: (value: string, record: any) => record?.role== value,
        },
        {
            ...getColumnTable("gender"), render: (_: any, { gender }: any) => (
                <>
                    <Tag color={gender === 0 ? "#2db7f5" : "#108ee9"}>
                        {gender === 0 ? `Nam` : `Nữ`}
                    </Tag>
                </>
            ),
            filters: [
                { text: 'Nam', value: 0 },
                { text: 'Nữ', value: 1 },
            ],
            onFilter: (value: string, record: any) => record?.gender == value,
        },
        {
            title: 'Action',
            key: 'operation',
            render: (_:any, record:any) => (
                <div className="flex gap-2">
                    <Tooltip title="Chỉnh sửa">
                        <Button icon={<MdModeEditOutline />}
                                onClick={() => router.push(`/admin/users/${record?.id}`)}></Button>
                    </Tooltip>
                    <Tooltip title="Sổ địa chỉ">
                        <Button icon={<SettingOutlined />}
                                onClick={() => router.push(`/admin/users/${record?.id}/settings`)}></Button>
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
const data = {
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
}
