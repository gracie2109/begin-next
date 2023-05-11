import {useState, useEffect} from "react";
import { MyPage } from '@/models/common';
import { Row, Col, Typography, Space, Card, Divider, Button,Input, Form,Breadcrumb } from "antd";
import { Products_data, formatCurrency} from "@/utils";
import Link from "next/link";
import 'swiper/swiper-bundle.css'
import OrderFinal from "./components/OrderFinal"

const Checkouts:MyPage = () => {
    const [form] = Form.useForm();
    const [cloneList, setCloneList] = useState([...Products_data]);
    const [money, setMoney] = useState(0);

    useEffect(() => {
        const money = cloneList.reduce((acc, curr) => acc + curr.price, 0);
        setMoney(money);
    }, [cloneList]);


    const items = [
        { title: 'Giỏ hàng', href: '/cart'},
        { title: 'Thông tin giao hàng' },
        { title: 'Phương thức thanh toán' },
    ];

    return (
        <Card>
            <Row >
                <Col md={12} xs={24}> 
                   <div className="mb-5"> 
                        {/* App Name  */}
                        <Typography.Title level={4}>
                            <Link href="/" style={{color: "#000"}}>MODE FASHION</Link>
                        </Typography.Title>

                        {/* breadcrumb  */}
                        <Breadcrumb separator=">"  items={items}  className="my-3"/>
                        
                        {/*  */}

                        <Typography.Title level={5} type="secondary">
                            Thông tin giao hàng
                        </Typography.Title>
                   </div>

                   <div>
                        <Row gutter={[0, 8]}>
                            <Col span={24}>
                                <Typography.Text>  Bạn đã có tài khoản?  <Link href="/auth/login">Đăng nhập</Link> </Typography.Text>
                            </Col>
                            <Col span={24}>
                                <Form form={form}>
                                    <Row gutter={[0, 0]}>
                                        <Col span={24}>
                                            <Form.Item name="companyVatName" >  <Input placeholder="Tên công ty...."/>  </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Row gutter={[0, 0]}>
                                                <Col md={16} xs={24}>  <Form.Item name="companyVatName" >  <Input  placeholder="Tên công ty...."/>  </Form.Item></Col>
                                                <Col md={8} xs={24}>  <Form.Item name="companyVatName" >  <Input  placeholder="Tên công ty...."/>  </Form.Item></Col>
                                                <Col span={24}>  <Form.Item name="companyVatName" >  <Input  placeholder="Tên công ty...."/>  </Form.Item></Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                        <Col span={24}>
                                                <Row justify="space-between" gutter={[4, 4]}>
                                                    <Col><Typography.Text><Link href="/cart">Giỏ hàng</Link> </Typography.Text></Col>
                                                    <Col>
                                                        <button className="outline-none border-none bg-[#338dbc] p-3"><Link href="/checkouts/step2" style={{color: "#fff"}}>Tiếp tục đến phương thức thanh toán</Link></button>
                                                    </Col>
                                                </Row>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                   </div>
                </Col>
                <Col md={12} xs={24}>
                   <Card>
                        <OrderFinal />
                   </Card> 
                   <Divider /> 
                    <Space.Compact block size="large">
                        <Input style={{ width: 'calc(100% - 20px)'}}/>
                        <Button type="primary" >Sử dụng</Button>
                    </Space.Compact>
                    <Divider /> 
                  
                    <Row justify="space-between">
                        <Col span={12}><Typography.Text>Tạm tính: </Typography.Text></Col>
                        <Col span={12} style={{textAlign: "end"}}> <Typography.Text>{formatCurrency(money)}</Typography.Text></Col>
                        <Col span={12}><Typography.Text>Phí vận chuyển: </Typography.Text></Col>
                        <Col span={12} style={{textAlign: "end"}}><Typography.Text>_</Typography.Text></Col>
                    </Row>
                    <Divider /> 
                    <Row justify="space-between">
                        <Col span={12}><Typography.Text>Tổng cộng: </Typography.Text></Col>
                        <Col > <Typography.Title level={3}>{formatCurrency(money)}</Typography.Title></Col>
                    </Row>

                </Col>
            </Row>
        </Card>
    )
}

export default Checkouts;
Checkouts.Layout="Default"