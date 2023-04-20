import Link from 'next/link';
import { Button, Tooltip, Typography, Row, Col, Modal, Tabs } from 'antd';
import { compareDate,getColumnTable, SharedIcons } from '@/utils';
import { DataTable, RenderImage } from '@/components/common';
import { useEffect, useState } from 'react';
import { useSearchTable } from '@/hooks';
import { useRouter } from 'next/router';
const { Text } = Typography;
const { InfoCircleOutlined, HighlightOutlined, MoreOutlined } = SharedIcons;

type Props = {
  dataSource: any,
  loading: boolean,
  compStatus: string
}

const FetchData = ({ dataSource, loading , compStatus }: Props) => {
  const { getColumnSearchProps } = useSearchTable();
  const route = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArr, setSelectedArr] = useState<any>([]);


  const res = [...selectedArr, compStatus];
  console.log("update data", res);





  const columns: any = [
    { ...getColumnTable('image'), render: (_: any, { image }: any) => (<RenderImage source={image} />), width: 90 },
    {
      ...getColumnTable('name'), ...getColumnSearchProps('name'),
      render: (_: any, { name, id }: any) => <Link href={`/admin/movie/${id}`}><Text>{name}</Text></Link>
    },
    { ...getColumnTable('runTime'), ...getColumnSearchProps('runTime'), width: 90 },
    { ...getColumnTable('revenue'), ...getColumnSearchProps('revenue') },
    {
      ...getColumnTable('release'), render: (_: any, { release }: any) => (
        <Tooltip title={compareDate(release).covertDate}>
          {compareDate(release).compare}
        </Tooltip>
      )
    },
    {
      ...getColumnTable('updateAt'), render: (_: any, { updateAt }: any) => (
        <> {compareDate(updateAt).covertDate}</>
      )
    },
    {
      title: "action",
      key: "action",
      render: (_: any, { id, name }: any) => (
        <Row justify="space-between" align="middle" className='[&>div]:cursor-pointer'>
          <Col> <Tooltip title="Edit"> <HighlightOutlined onClick={() => { route.push(`/admin/movie/${id}`) }} /></Tooltip></Col>
          <Col> <Tooltip title="Infomation">
            <Button type="link" onClick={() => setIsModalOpen(!isModalOpen)} icon={<InfoCircleOutlined />}>   </Button>
            <Modal title="Basic Modal" open={isModalOpen} footer={null}>
              <Text>{name}</Text>
            </Modal>
          </Tooltip></Col>
          <Col> <Tooltip title="More"> <MoreOutlined /></Tooltip></Col>
        </Row>
      ),
      width: 120
    },

  ];

  return (
    <DataTable
      data={dataSource}
      columns={columns}
      expandTable={false}
      loading={loading}
      PS={7}
      selectedArr={selectedArr}
      setSelectedArr={setSelectedArr}
      filterOldCondition="release"
    />

  )
}

export default FetchData;