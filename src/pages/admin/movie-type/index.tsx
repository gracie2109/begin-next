import Link from 'next/link';
import { Button, Tooltip, Typography } from 'antd';
import { compareDate, formatWord, getColumnTable, SharedIcons } from '@/utils';
import { DataTable, HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState } from 'react';
import { useSearchTable } from '@/hooks';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { listMovieTypes } from '@/features/movie-type/actions'
const { Text } = Typography;
const { FaArrowRight, HighlightOutlined, PlusOutlined } = SharedIcons;


const MovieFormat: MyPage = () => {
  const { getColumnSearchProps } = useSearchTable();
  const route = useRouter();
  const [selectedArr, setSelectedArr] = useState<any>([]);
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector((state) => state.listMovieTypeReducer);

  useEffect(() => {
    (async () => { await dispatch(listMovieTypes()) })();
  }, []);

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
      render: (_: any, { id, name }: any) => (
        <Tooltip title="Edit"> <HighlightOutlined onClick={() => { route.push(`/admin/movie/${id}`) }} /></Tooltip>
      ),
      width: 120
    },

  ];
  const dataSource: any[] = data.map((item: any, index: any) => {
    return {
      key: index,
      id: item._id,
      name: formatWord(item.name, "title"),
      updateAt: item.updatedAt,
      credit: item.imdbId ? "IMDB" : "Thủ công",
      createdAt: item.createdAt
    }
  })
  console.log("selectedArr", selectedArr);

  const components = [
    {
      key: 1,
      comp: <Link href="/admin/movie-type/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo danh sách</Button></Link>
    },
    {
      key: 2,
      comp: <Link href="/admin/movie"> <Button type="primary" icon={<FaArrowRight />}>Danh sách phim</Button></Link>
    },

  ]
  return (
    <>
      <HeaderAction
        title="Danh sách thể loại phim"
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