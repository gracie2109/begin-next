import type { TabsProps } from 'antd';
import { Tabs, Typography , Grid} from "antd";
import {useEffect, useState} from "react";
import ProductRating from "./components/ProductRating";                    
import ProductDescription from "./components/ProductDescription";                    
import Policy from "./components/Policy";                    
import QA from "./components/QnA";                    
type Props = {
    data:any,
    prId: any
}
const {useBreakpoint} = Grid
const TabsProduct = ({data, prId} : Props) => {
  const [activeKey, setActiveKey] = useState<string>('1');
  const screens = useBreakpoint()
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: <Typography.Title level={!screens.xs ? 4: 5} style={{color: `${activeKey === "1" ? "#000" : "#dcdcdc"}`}}>Mô tả sản phẩm</Typography.Title>,
          children: <ProductDescription />,
        },
        {
          key: '2',
          label:  <Typography.Title level={!screens.xs ? 4: 5} style={{color: `${activeKey === "2" ? "#000" : "#dcdcdc"}`}}>Đánh Giá - Nhận Xét Từ Khách Hàng</Typography.Title>,
          children: <ProductRating />,
        },
        {
            key: '4',
            label:  <Typography.Title level={!screens.xs ? 4: 5} style={{color: `${activeKey === "4" ? "#000" : "#dcdcdc"}`}}>Điều khoản dịch vụ</Typography.Title>,
            children: <Policy />,
          },
          {
            key: '5',
            label:  <Typography.Title level={!screens.xs ? 4: 5} style={{color: `${activeKey === "5" ? "#000" : "#dcdcdc"}`}}>Câu hỏi thường gặp</Typography.Title>,
            children: <QA />
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