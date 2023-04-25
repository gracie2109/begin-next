import { Card, Avatar } from 'antd';
import { EditOutlined, SettingOutlined, } from '@ant-design/icons';
import React from 'react'

type Props = {
  productChild?: any
}
const { Meta } = Card;
const ProductCard = ({ productChild }: Props) => {
  return (
    <div className='prd_cart border border-red-600 w-full '>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />
        ]}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title="Card title"
          description={productChild}
        />
      </Card>
    </div>
  )
}

export default ProductCard