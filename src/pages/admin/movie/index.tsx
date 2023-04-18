import Link from 'next/link';
import { Button, Tooltip, Typography, Row, Col, Modal, Table } from 'antd';
import { compareDate, dataPro, formatCurrency, formatMovieRunTime, formatWord, getColumnTable, SharedIcons } from '@/utils';
import { DataTable, HeaderAction, RenderImage, ModalComp } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState } from 'react';
import { useSearchTable, useModal } from '@/hooks';
import { useRouter } from 'next/router';
const { Text } = Typography;
const { FaArrowRight, InfoCircleOutlined, HighlightOutlined, MoreOutlined, PlusOutlined  } = SharedIcons;


const Movie: MyPage = () => {
  const loading = false
  const { getColumnSearchProps } = useSearchTable();
  const route = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns: any = [
    { ...getColumnTable('image'), render: (_: any, { image }: any) => (<RenderImage source={image} />),width: 90 },
    {
      ...getColumnTable('name'), ...getColumnSearchProps('name'),
      render: (_: any, { name, id }: any) => <Link href={`/admin/movie/${id}`}><Text>{name}</Text></Link>
    },
    { ...getColumnTable('runTime'), ...getColumnSearchProps('runTime'),width: 90  },
    { ...getColumnTable('revenue'), ...getColumnSearchProps('revenue') },
    {
      ...getColumnTable('release'), render: (_: any, { release }: any) => (
        <Tooltip title={compareDate(release).covertDate}>
          {compareDate(release).compare}
        </Tooltip>
      )
    },
    {
      title: "action",
      key: "action",
      render: (_: any, { id, name }: any) => (
        <Row justify="space-between" align="middle" className='[&>div]:cursor-pointer'>
          <Col> <Tooltip title="Edit"> <HighlightOutlined onClick={() => { route.push(`/admin/movie/${id}`) }} /></Tooltip></Col>
          <Col> <Tooltip title="Infomation">
            <Button type="link" onClick={showModal} icon={<InfoCircleOutlined />}>   </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Text>{name}</Text>
            </Modal>
          </Tooltip></Col>
          <Col> <Tooltip title="More"> <MoreOutlined /></Tooltip></Col>
        </Row>
      ),
      width: 120
    },

  ];

  const data: any[] = dataPro.map((item, index) => {

    return {
      key: index,
      image: item.image,
      id: item._id,
      name: formatWord(item.name, "title"),
      runTime: formatMovieRunTime(item.runTime),
      revenue: formatCurrency(item.profit),
      release: item.releaseDate,
    }
  })

  const components = [
    {
      key: 1,
      comp: <Link href="/admin/movie/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo phim</Button></Link>
    },
    {
      key: 2,
      comp: <Link href="/admin/movie-format"> <Button type="primary" icon={<FaArrowRight />}>Thể loại phim</Button></Link>
    },

  ]
  return (
    <>
      <HeaderAction
        title="Danh sách phim"
        components={components}
      />
      <DataTable
        data={data}
        columns={columns}
        expandTable={false}
        loading={loading}
        PS={7}
      />
    </>
  )
}

export default Movie;
Movie.Layout = "Admin";