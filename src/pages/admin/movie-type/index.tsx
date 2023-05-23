import Link from 'next/link';
import {Button, Form, Tooltip, Typography} from 'antd';
import { compareDate, formatWord, getColumnTable, SharedIcons } from '@/utils';
import { DataTable, HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState } from 'react';
import { useSearchTable } from '@/hooks';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { listMovieTypes } from '@/features/movie-type/actions'
import FilterSection from "@/pages/admin/movie/components/FilterSection";
const { Text } = Typography;
const { FaArrowRight, HighlightOutlined, PlusOutlined } = SharedIcons;


const MovieFormat: MyPage = () => {
  const [openFilter,setOpenFilter ] = useState<boolean>(false);
  const [form] = Form.useForm();
  const { getColumnSearchProps } = useSearchTable();
  const route = useRouter();
  const [selectedArr, setSelectedArr] = useState<any>([]);
  const dispatch = useAppDispatch();
  const { data, pending } = useAppSelector((state) => state.listMovieTypeReducer);

  useEffect(() => {
    (async () => { await dispatch(listMovieTypes()) })();
  }, []);

  const onFinish = (values:any) => {
    console.log("onFinish", values)
  }

  const onReset = () => {
    form.resetFields();
    setOpenFilter(!openFilter)
  };


  const columns: any = [
    {
      ...getColumnTable('name'), ...getColumnSearchProps('name'),
      render: (_: any, { name, id }: any) => <Link href={`/admin/movie-type/${id}`}><Text>{name}</Text></Link>
    },
    {
      ...getColumnTable('updateAt'), render: (_: any, { updateAt }: any) => (
        <> {compareDate(updateAt).covertDate}</>
      )
    },
    { ...getColumnTable('credit') },
    {
      title: "action",
      key: "action",
      render: (_: any, { id }: any) => (
        <Tooltip title="Edit"> <HighlightOutlined onClick={() => { route.push(`/admin/movie/${id}`) }} /></Tooltip>
      ),
      width: 120
    },

  ];
  const dataSource: any[] = data?.map((item: any, index: any) => {
    return {
      key: index,
      id: item._id,
      name: formatWord(item.name, "title"),
      updateAt: item.updatedAt,
      credit: item.imdbId ? "IMDB" : "Thủ công",
      createdAt: item.createdAt
    }
  })

  const components = [
    {
      key: 'filterSection',
      comp: <FilterSection
      openFilter={openFilter}
      setOpenFilter={setOpenFilter}
      form={form}
      onFinish={onFinish}
      onReset={onReset}
  />
    },
    {
      key: 1,
      comp: <Link href="/admin/movie-type/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo thể loại</Button></Link>
    },
    {
      key: 2,
      comp: <Link href="/admin/movie"> <Button type="primary" icon={<FaArrowRight />}>Ds phim</Button></Link>
    },

  ]
  return (
    <>
      <HeaderAction
        title="Ds thể loại phim"
        components={components}
      />
      <DataTable
        data={dataSource}
        columns={columns}
        expandTable={false}
        loading={pending}
        PS={7}
        selectedArr={selectedArr}
        setSelectedArr={setSelectedArr}
        filterOldCondition="createdAt"
      />
    </>
  )
}

export default MovieFormat;

MovieFormat.Layout = "Admin";