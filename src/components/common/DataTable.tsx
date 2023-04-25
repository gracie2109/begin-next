import React, { useState } from 'react';
import { Empty, Table, Typography, Button, Col, Row , Tooltip} from 'antd';
import type { TableRowSelection } from 'antd/es/table/interface';
import { ConditionType, filterOldDataByDate,SharedIcons } from '@/utils';

type Props = {
  columnsExpanded?: any,
  dataExpanded?: any,
  data: any,
  columns: any,
  expandTable: boolean,
  loading?: boolean,
  scrollWidth?: any,
  PS:number,
  selectedArr: any,
  setSelectedArr:any,
  filterOldCondition:ConditionType
}
const { Paragraph, Text } = Typography;
const { MdSyncAlt , AiOutlineClear,BsListColumnsReverse } = SharedIcons
export const DataTable = ({filterOldCondition, columnsExpanded, dataExpanded, data, columns, expandTable, loading, scrollWidth,PS, setSelectedArr }: Props) => 
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
  const [dataHasSelect, setDataHasSelect] = useState<any[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    setDataHasSelect(data.map((item:any) => (item.key + 1)))
  };

  const handleAll = () => {
    setSelectedRowKeys(dataHasSelect)
  }
  const reset = () => {
    setSelectedRowKeys([]);
    setDataHasSelect([]);
    setSelectedArr([])
  }

  const updateStatus = () => {
    const res: any[] = [];
    for (const a in data) {
      for (const b of selectedRowKeys) {
          if(b == (+a + 1)){
             res.push(data[a])
          }
  
      }
    }
    setSelectedArr(res)
  }
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      {
        key: 'release',
        text: 'Release > 1 month',
        onSelect: () => {
          const response = filterOldDataByDate(data, filterOldCondition);
          const key = response.map((item) => Number(item.key) + 1);
          setSelectedRowKeys(key);
          setDataHasSelect(response);
        },
      },
      {
        key: "all",
        text: "Select all data",
        onSelect: (changeableRowKeys) => {
          setSelectedRowKeys(changeableRowKeys);
          const hasSl = data.filter((item:any) => !changeableRowKeys.includes((item?.key) + 1));
          const hasSlKey = hasSl.map((item:any) => (item.key) + 1);
          setDataHasSelect([...changeableRowKeys, ...hasSlKey]);
        }
      },
      {
        key: "clear",
        text: "Clear all",
        onSelect: () => {reset()}
      }
    ],
  };

  return (
    <>
      {selectedRowKeys.length > 0 && dataHasSelect.length > 0 && 
      (
        <Row justify="start" align="middle" gutter={[16, 16]}>
          <Col>
            <Paragraph style={{paddingTop: '1rem'}}>
              All  <Text strong>{selectedRowKeys.length} / {dataHasSelect?.length} items</Text> has choose
            </Paragraph>
          </Col>
          <Col>
            { selectedRowKeys.length !== dataHasSelect?.length && (
              <Tooltip title="Choose All">
                <Button icon={<BsListColumnsReverse />} onClick={() => handleAll()}></Button>
              </Tooltip>
            )}
          </Col>
          <Col>
            <Tooltip title="Clear All">
              <Button icon={<AiOutlineClear />} onClick={reset} ></Button>
            </Tooltip>
          </Col>
         
          <Col>
            <Tooltip title="Chuyển trạng thái">
              <Button icon={<MdSyncAlt />} onClick={updateStatus}></Button>
            </Tooltip>
          </Col>
        </Row>
      )}

      <Table
        dataSource={data?.map((item: any, index: number) => {
          return { ...item, key: index + 1};
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


