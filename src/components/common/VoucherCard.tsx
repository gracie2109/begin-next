import { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Button, Space, Popover } from "antd"
import Image from "next/image";
import { SharedIcons } from "@/utils";

type Props = {
  data: any;
}
const { AiOutlineInfoCircle } = SharedIcons;

export const VoucherCard = ({ data }: Props) => {

  const RenderVoucherDetail = () => {
    return (
      <>
        Nội dung card
      </>
    )
  }

  return (
    <Card style={{ fontSize: 36, marginBottom: "1rem" }} bodyStyle={{ padding: ".7rem" }} >
      <Row align="middle">
        <Col span={6}>
          <img src={data.img} alt="voucher_image" style={{width: '3rem', height: "3rem"}}/>
        </Col>
        <Col span={18}>
          <Space className="mb-2">
            <Row >
              <Col><Typography.Text strong>{data.title}</Typography.Text> </Col>
              <Col><Typography.Text>{data.condition}</Typography.Text></Col>
            </Row>
            <Popover content={RenderVoucherDetail} title={data.title}>
              <Button type="link" icon={<AiOutlineInfoCircle />}></Button>
            </Popover>
          </Space>

          <Space>
            <Row>
              <Col>
                <Typography.Text type="secondary" >Mã: </Typography.Text>
                <Typography.Text strong>{data.code}</Typography.Text>
              </Col>
              <Col>
                <Typography.Text type="secondary" >HSD:  {data.due}</Typography.Text>
              </Col>
            </Row>
            <div className="border border-solid border-red-600">
              <Typography.Text copyable={{ text: `${data.code}`, tooltips: false}} >
                saoc Lấy mã
              </Typography.Text>
            </div>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

