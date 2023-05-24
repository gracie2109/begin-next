import React from 'react'
import {Row, Col,Typography, Card, Breadcrumb}from 'antd';
import Link from 'next/link';
import OrderFinal from "./components/OrderFinal";

type Props = {}
const items = [
  { title: 'Giỏ hàng', href: '/cart'},
  { title: 'Thông tin giao hàng' },
  { title: 'Phương thức thanh toán' },
];
const SecondStep= (props: Props) => {
  return (
    <Card>
      <Row>
        <Col md={12} xs={24}>
        <div className="mb-5"> 
          <Typography.Title level={4}>
              <Link href="/" style={{color: "#000"}}>MODE FASHION</Link>
          </Typography.Title>
          <Breadcrumb separator=">"  items={items}  className="my-3"/>
          <Typography.Title level={5} type="secondary">
              Phương thức vận chuyển
          </Typography.Title> 
        </div>

        <div>
          
        </div>
        </Col>
        <Col md={12} xs={24}>
          <OrderFinal />
        </Col>
      </Row>
    </Card>
  )
}

export default SecondStep;