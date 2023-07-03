import {useState} from "react";
import {DataTable} from "@/components/common";
import {useRouter} from "next/router";
import { Tag, Table, Tooltip, Button } from 'antd';
import { getColumnTable,SharedIcons } from "@/utils";
type Props = {
    dataSource:any,
    loading?:any,
    compStatus?:any
}
const { SettingOutlined,MdModeEditOutline } = SharedIcons
const  FetchData = ({dataSource, loading, compStatus}:Props) => {
    const [selectedArr, setSelectedArr] = useState<any>([]);
    const route = useRouter();
    console.log("selectedArr", selectedArr)


    const columns: any = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Status', dataIndex: 'status', key: 'status',
            render: (_:any, {status}:any) => (
                <>
                    <Tag color={status ? "green" : "volcano"}>
                        {status ? "Hoat dong" : "Ngung hd"}
                    </Tag>
                </>

            )},
        { title: 'Desc', dataIndex: 'desc', key: 'desc' },
        { title: 'Action', key: 'operation', render: (_:any, record:any) => (
           <>
            <Tooltip title="Chỉnh sửa">
                <Button icon={<MdModeEditOutline />} 
                onClick={() => route.push(`/admin/attributes/${record?.id}`)}></Button>
            </Tooltip>
           </>) },
    ];

   const data  = dataSource.map((item:any, index:any) => {
       return {
            id: item?._id,
           key: `${item.value}.${index}.${item?.name}`,
           status: item?.status,
           name: item?.name,
           desc: item?.desc,
           children: item?.children.map((a:any, b:any) => {
               return {
                   key: `${a.value}.${b}.${a?.name}`,
                   status: a?.status,
                   name: a?.name,
                   desc: a?.desc,
                   id: a?._id
               }
           })
       }
   })

   const pageOptionSize = () => {
    const data = [];
    for (let index = 1; index <= 5; index++) {
      const res = 5 * index
      data.push(res)
    }
    return data
  }



    return (
        <>
            <Table
                dataSource={data}
                columns={columns}
                pagination={data &&  data?.length > 5 && {
                    defaultPageSize: 5,
                    showSizeChanger: true,
                    pageSizeOptions: pageOptionSize()
                  }}
            />
        </>
    )
}

export default FetchData;
