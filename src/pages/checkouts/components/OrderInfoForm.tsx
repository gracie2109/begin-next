import {useState, useEffect} from "react";
import { Row, Col, Typography, Space, Card, Divider, Button,Input, Form,Breadcrumb } from "antd";
import Link from "next/link";
import Providers from "@/components/common/Providers";
import {v4 as uuidv4} from "uuid";

type Props = {
    form:any,
    onFinish:any,
    setOrderAddress:any

}
const OrderInfoForm = ({form,onFinish, setOrderAddress}:Props) => {
    const [address, setAddress] = useState<any>(undefined);
    const handleCreate = (value: any) => {
        value.id = uuidv4();
        value.address = address;
        setOrderAddress(address)
    }


    return (
        <Form form={form} onFinish={onFinish}>
            <Row gutter={[0, 0]}>
                <Col span={24}>
                    <Form.Item name="companyVatName" >
                        <Input placeholder="Tên công ty...."/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Row gutter={[4, 0]}>
                        <Col md={16} xs={24}>
                            <Form.Item name="companyVatName2" >
                                <Input  placeholder="Tên công ty...."/>
                            </Form.Item>
                        </Col>
                        <Col md={8} xs={24}>
                            <Form.Item name="companyVatName3" >
                                <Input  placeholder="Tên công ty...."/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="companyVatName4" >
                                <Input  placeholder="Tên công ty...."/>
                            </Form.Item></Col>
                        <Col  span={24}>
                            <Form.Item 
                            rules={[{ required: true, message: 'Please input the title of collection!' }]}
                        >
                            <Providers setAddress={setAddress}/>
                        </Form.Item>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row justify="space-between" gutter={[4, 4]}>
                        <Col><Typography.Text><Link href="/cart">Giỏ hàng</Link> </Typography.Text></Col>
                        <Col>
                            <button type="submit" className="outline-none border-none bg-[#338dbc] p-3 text-white">
                                Tiếp tục đến phương thức thanh toán
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}
export  default OrderInfoForm