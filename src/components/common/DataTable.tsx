import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Empty, Space, Table } from 'antd';

type Props = {
  columnsExpanded?: any,
  dataExpanded?: any,
  data: any,
  columns: any,
  expandTable: boolean,
  loading: boolean,
  scrollWidth?: any;
}
const DataTable = ({ columnsExpanded, dataExpanded, data, columns, expandTable, loading, scrollWidth }: Props) => {
  const PAGE_SIZE = 5;
  const expandedRowRender = () => {
    return <Table columns={columnsExpanded} dataSource={dataExpanded} pagination={false} />;
  };

  return (
    <>
      {expandTable ? (
        <Table
          dataSource={data?.map((item: any, index: number) => {
            return { ...item, key: index + 1 };
          })}
          columns={[
            {
              title: "#",
              dataIndex: "key",
              width: 30,
              fixed: "left",
            },
            ...columns,
          ]}
          locale={{
            emptyText: (
              <div style={{ padding: "16px 0 0" }}>
                <Empty
                  description="Không tìm thấy dữ liệu"
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </div>
            ),
          }}
          loading={loading}
          pagination={data && data?.length > PAGE_SIZE && {
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20", "30"]
          }}
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
          scroll={scrollWidth ? scrollWidth : {}}
        />
      ) : (
        <Table
          dataSource={data?.map((item: any, index: number) => {
            return { ...item, key: index + 1 };
          })}
          columns={[
            {
              title: "#",
              dataIndex: "key",
              width: 30,
              fixed: "left",
            },
            ...columns,
          ]}
          locale={{
            emptyText: (
              <div style={{ padding: "16px 0 0" }}>
                <Empty
                  description="Không tìm thấy dữ liệu"
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </div>
            ),
          }}
          loading={loading}
          pagination={data && data?.length > PAGE_SIZE && {
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20", "30"]
          }}
          scroll={scrollWidth ? scrollWidth : {}}
        />
      )}
    </>
  );
}

export default DataTable;


