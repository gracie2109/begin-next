import {useState} from "react";
import {DataTable} from "@/components/common";
import { Tag, Table } from 'antd';
type Props = {
    dataSource:any,
    loading?:any,
    compStatus?:any
}
const  FetchData = ({dataSource, loading, compStatus}:Props) => {
    const [selectedArr, setSelectedArr] = useState<any>([]);

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
        { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
    ];

   const data  = dataSource.map((item:any, index:any) => {
       return {
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
               }
           })
       }
   })

    return (
        <>
            <DataTable
                data={data}
                columns={columns}
                expandTable={true}
                PS={5}
                selectedArr = {selectedArr}
                setSelectedArr = {setSelectedArr}
            />
        </>
    )
}

export default FetchData;
