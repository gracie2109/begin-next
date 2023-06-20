import Link from 'next/link';
import {
    App,
    Button,
    Tag,
    Tooltip,
    } from 'antd';
import { DataTable, HeaderAction } from '@/components/common';
import { getColumnTable, SharedIcons } from '@/utils';
import { MyPage } from '@/models/common';
import { RenderImage } from '@/components/common';
import { useAppDispatch } from '@/app/hooks';
import { useRouter } from 'next/router';
import { useSearchTable } from '@/hooks';
import styled from "styled-components";
const { MdModeEditOutline, PlusOutlined ,EyeOutlined} = SharedIcons;

const Index:MyPage = () => {
    const dispatch = useAppDispatch();
    const { modal } = App.useApp();
    const router = useRouter();
    const { getColumnSearchProps } = useSearchTable();


    const headerActionComp = [
        {
            key: 1,
            comp: <Link href="/admin/settings/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo cài đặt mới </Button></Link>
        }
    ];

    const columns = [
        { ...getColumnTable("images"), render: (_: any, { images }: any) => <RenderImage source={images} preview />,width: "100px",fixed: 'left'},
        { ...getColumnTable("name"), ...getColumnSearchProps("name"), sorter: (a: any, b: any) => a.name.localeCompare(b.name),fixed: 'left' },
        {
            ...getColumnTable("status"), render: (_: any, { status }: any) => (
                <>
                    <Tag color={status ? "#2db7f5" : "#108ee9"}>
                        {status ? `Đang hoạt động` : ``}
                    </Tag>
                </>
            ),
            filters: [
                { text: 'Đang hoạt động', value: true },
                { text: 'Không hoạt động', value: false },
            ],
            onFilter: (value: string, record: any) => record?.status == value,
        },
        {
            ...getColumnTable("maintain"), render: (_: any, { maintain }: any) => (
                <>
                    <Tag color={maintain ? "#2db7f5" : "#108ee9"}>
                        {maintain ? `Đang bảo trì` : ``}
                    </Tag>
                </>
            ),
            filters: [
                { text: 'Đang bảo trì', value: true },
                { text: 'Không bảo trì', value: false },
            ],
            onFilter: (value: string, record: any) => record?.maintain == value,
        },
        {
            title: 'Action',
            key: 'operation',
            render: (_:any, record:any) => (
                <div className="flex gap-2">
                     <Tooltip title="Xem nhanh">
                        <Button icon={<EyeOutlined />} 
                        onClick={() => handleModal(record)}></Button>
                    </Tooltip>
                    <Tooltip title="Chỉnh sửa">
                        <Button icon={<MdModeEditOutline />} 
                        onClick={() => router.push(`/admin/settings/${record?._id}`)}></Button>
                    </Tooltip>
                </div>
            ),
            width: "100px"
        }
    ];
    const handleModal = (values:any) => {
        modal.info({
            title: `Cửa hàng: ${values?.name}`,
            width: '1000px',
            content: (
               <ModalApp>
                    <ModalGroup>
                        <ModalName>Địa chỉ</ModalName>
                        <ModalValue>{values?.address?.map((item:any) => <div>{item}</div>)}</ModalValue>
                    </ModalGroup>
                    <ModalGroup>
                        <ModalName>Số điện thoại</ModalName>
                        <ModalValue>{values?.phone}</ModalValue>
                    </ModalGroup>
                    <ModalGroup>
                        <ModalName>Email</ModalName>
                        <ModalValue>{values?.email}</ModalValue>
                    </ModalGroup>
                    <ModalGroup>
                        <ModalName>Trạng thái</ModalName>
                        <ModalValue>{values?.status ? "Đang hoạt động" : "Dừng hoạt động"}</ModalValue>
                    </ModalGroup>
                    <ModalGroup>
                        <ModalName>Mô tả</ModalName>
                        <ModalValue>{values?.desc}</ModalValue>
                    </ModalGroup>
                    <ModalGroup>
                        <ModalName>Mạng xã hội</ModalName>
                        <ModalTable>
                            <tr>
                                <th>Tên</th>
                                <th>Địa chỉ</th>
                            </tr>
                           
                            {values?.social?.map((item:any, index:any) => (
                                <tr key={index}>
                                    <td>{item?.name}</td>
                                    <td><Link href={item?.value}>{item?.value}</Link></td>
                                </tr>
                            ))}

                            </ModalTable>
                    </ModalGroup>
               </ModalApp>
            )
        })
    }
    return (
        <>
            <HeaderAction
                title="Cài đặt trang web"
                components={headerActionComp}
            />
           <DataTable  
                PS={5} 
                columns={columns} 
                data={data} 
                expandTable={false}
            />
        </>
    )
}

export default Index;
Index.Layout="Admin";
export const data: any[] = [
    {
        _id: 1,
        name: "Eccommerce",
        images: undefined,
        desc: "Website phục vụ mục đích kinh doanh,...",
        status: true,
        maintain: false,
        address: [
            "110 Yên Nghĩa, quận Hà đông, thành phố Hà Nội",
            "112 d Nghĩa, quận Hà đông, thành phố Hà Nội"
        ],
        map: undefined,
        phone: "0327072255",
        email: undefined,
        social: [
            {
                name: "Facebook",
                value: "https://www.facebook.com/"
            },
            {
                name: "Instagram",
                value: "https://www.instagram.com/"
            },

        ]
    },

];

const ModalApp = styled.div`
    width: 100%;
`;
const ModalGroup  = styled.div `
    display: flex;
    margin-bottom: 1rem;
`;

const ModalName = styled.div`
    width: 30%;
    font-weight: bold;
`;
const ModalValue = styled.div`
   width: calc(100% - 30%);
`;
const ModalTable = styled.table`
  border-collapse: collapse;
  width: 100%;
    table, td, th {
        border: 1px solid;
    }
    td, th{
        padding: 0 1rem;
    }
`;