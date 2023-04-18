import React, { useState } from 'react';
import { Empty, Table, Typography } from 'antd';
import type { TableRowSelection } from 'antd/es/table/interface';
import { filterOldDataByDate } from '@/utils';

type Props = {
  columnsExpanded?: any,
  dataExpanded?: any,
  data: any,
  columns: any,
  expandTable: boolean,
  loading?: boolean,
  scrollWidth?: any,
  PS:number
}

const { Paragraph, Text } = Typography;

export const DataTable = ({ columnsExpanded, dataExpanded, data, columns, expandTable, loading, scrollWidth,PS }: Props) => 
{

  const pageOptionSize = () => {
    const data = [];
    for (let index = 1; index <= 5; index++) {
      const res = PS * index
      data.push(res)
    }
    return data
  }
  
  const renderTableExpand = () => {
    return <Table columns={columnsExpanded} dataSource={dataExpanded} pagination={false} />
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'release',
        text: 'Select Release Too Far',
        onSelect: (changeableRowKeys) => {
          const response = filterOldDataByDate(data, "release");
          const key = response.map((item) => Number(item.key) + 1);
          setSelectedRowKeys(key)
        },
      },
    ],
  };

  return (
    <>
      {selectedRowKeys.length > 0 && <Paragraph>
        All  <Text strong>{selectedRowKeys.length} items</Text> has choose
      </Paragraph>}
      <Table
        dataSource={data?.map((item: any, index: number) => {
          return { ...item, key: index + 1 };
        })}
        columns={[
          {
            title: "#",
            dataIndex: "key",
            width: 60,
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
        pagination={data &&  data?.length > PS && {
          defaultPageSize: PS,
          showSizeChanger: true,
          pageSizeOptions: pageOptionSize()
        }}
        rowSelection={rowSelection}
        scroll={{ y: 500, x: scrollWidth ? scrollWidth : {} }}
        expandable={{
          expandedRowRender: expandTable ? renderTableExpand : undefined,
          expandRowByClick: expandTable ? true : false,
          defaultExpandedRowKeys: ['0']
        }}
      />
    </>
  );
}


