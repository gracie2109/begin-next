import type { TabsProps } from 'antd';
import { Tabs, Typography } from "antd";
import {useEffect, useState} from "react"
type Props = {
    data:any,
    prId: any
}
const TabsProduct = ({data, prId} : Props) => {
  const [activeKey, setActiveKey] = useState(1)
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: <Typography.Title level={4} type={activeKey !=='1' ? "secondary": ""}>Mô tả sản phẩm</Typography.Title>,
          children: `Content of Tab Pane 1`,
        },
        {
          key: '2',
          label:  <Typography.Title level={4} type={activeKey !=='2' ? "secondary": ""}>Đánh Giá - Nhận Xét Từ Khách Hàng</Typography.Title>,
          children: `Content of Tab Pane 2`,
        },
        {
          key: '3',
          label:  <Typography.Title level={4} type={activeKey !=='3' ? "secondary": ""}> Chính sách đổi trả</Typography.Title>,
          children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label:  <Typography.Title level={4} type={activeKey !=='4' ? "secondary": ""}>Điều khoản dịch vụ</Typography.Title>,
            children: `Content of Tab Pane 2`,
          },
          {
            key: '5',
            label:  <Typography.Title level={4} type={activeKey !=='5' ? "secondary": ""}>Câu hỏi thường gặp</Typography.Title>,
            children: `Content of Tab Pane 3`,
          },
      ];


      
    const onChange = (key:any) => {
      setActiveKey(key)
    }
    return (
        <Tabs defaultActiveKey={"1"} items={items} onChange={onChange} />
    )
}

export default TabsProduct