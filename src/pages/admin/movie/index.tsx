import Link from 'next/link';
import { Button,Tabs } from 'antd';
import { SharedIcons } from '@/utils';
import { HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { listMovie } from '@/features/movie/actions';
import FetchData from './_fetchData';
const { FaArrowRight, PlusOutlined } = SharedIcons;


const Index:MyPage = () => {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector((state) => state.listMovieReducer);
  const [dataActive, setDataActive] = useState<any[]>([]);
  const [dataInActive, setDataInActive] = useState<any[]>([]);

  useEffect(() => {
    (async () => { await dispatch(listMovie()) })();
  }, []);

  useEffect(() => {
    if (data) {
      setDataActive(data?.filter((item: any) => item?.status == 0));
      setDataInActive(data?.filter((item: any) => item?.status !== 0))
    }
  }, [data]);

  const components = [
    {
      key: 1,
      comp: <Link href="/admin/movie/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo phim</Button></Link>
    },
    {
      key: 2,
      comp: <Link href="/admin/movie-type"> <Button type="primary" icon={<FaArrowRight />}>Thể loại phim</Button></Link>
    },

  ];
  const items: any[] = [
    {
      key: 1,
      label: `Phim đang chiếu (${dataActive.length})`,
      children: <FetchData dataSource={ dataActive } loading={pending} compStatus="active"/>
    },
    {
      key: 2,
      label: `Phim đã dừng hoạt động(${dataInActive.length}) `,
      children: <FetchData dataSource={ dataInActive } loading={pending} compStatus="inActive"/>
    },
  ]
  return (
    <>
      <HeaderAction
        title="Danh sách phim"
        components={components}
      />

      <Tabs
        defaultActiveKey="1"
        size={"small"}
        style={{ marginBottom: 32 }}
        items={items}
      />
    </>
  )
}

export default Index;
Index.Layout="Admin"