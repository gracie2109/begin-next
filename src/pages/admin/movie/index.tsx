import { useState, useEffect } from "react";
import { MyPage } from "@/models/common";
import DataTable from "@/components/common/DataTable";
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';


const Movie: MyPage = () => {
  const loading = false
  const expandedRowRendercolumns: TableColumnsType<any> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },

  ];
  const expandedRowRendercolumnsdata = [];
  for (let i = 0; i < 3; ++i) {
    expandedRowRendercolumnsdata.push({
      key: i.toString(),
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }


  const columns: TableColumnsType<any> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];


  const data: any[] = [];
  for (let i = 0; i < 10; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screen',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <>

      <DataTable
        data={data}
        columns={columns}
        expandTable={false}
        loading={loading}
      />
    </>
  )
}

export default Movie;
Movie.Layout = "Admin";