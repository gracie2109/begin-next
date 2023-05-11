import { useRef, useState, useEffect } from 'react'
import { Products_data, formatCurrency } from "@/utils";
import { Typography,List, Avatar, Badge } from "antd";

type Props = {}

const OrderFinal = (props: Props) => {
  const [cloneList, setCloneList] = useState([...Products_data]);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    const money = cloneList.reduce((acc, curr) => acc + curr.price, 0);
    setMoney(money);
  }, [cloneList]);
  return (
    <>
      <List
        dataSource={cloneList}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <>
                  <Badge count={1} color={"rgba(0, 0, 0, 0.25)"} >
                    <Avatar src={item?.images?.[0] || item?.images || ""} shape="square" size={64} />
                  </Badge>
                </>
              }
              title={<a href="https://ant.design">{item?.name}</a>}
              description={"Xám / S"}
            />
            <div>
              <Typography.Text strong >{formatCurrency(item?.price)}</Typography.Text>
            </div>
          </List.Item>
        )}
      />
    </>
  )
}

export default OrderFinal