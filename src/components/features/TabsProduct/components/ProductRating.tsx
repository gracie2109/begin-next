import { useState, useEffect } from "react";
import { Card, Row, Col, Typography, Avatar, Rate, Radio, Button, Progress, Modal, Input, Form, Divider,Grid, Tag , Space} from "antd";
import { SharedIcons, calcProductRateStartPercent } from "@/utils";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import type { SelectProps, RadioChangeEvent } from 'antd';
import type { SelectCommonPlacement } from 'antd/es/_util/motion';
import { UserOutlined,CheckCircleTwoTone } from '@ant-design/icons';
const { AiFillStar } = SharedIcons;
const { useBreakpoint } = Grid;
const ProductRating = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const screens = useBreakpoint();
    const rateList = [
        {
            start: 1,
            quantity: 100
        },
        {
            start: 2,
            quantity: 14
        },
        {
            start: 3,
            quantity: 16
        },
        {
            start: 4,
            quantity: 18
        },
        {
            start: 5,
            quantity: 0
        },
    ];
    const tagsData = ['Tất cả','5 sao', '4 sao', '3 sao', '2 sao','1 sao'];
    const [selectedTags, setSelectedTags] = useState<string[]>(['Tất cả']);
    const customIcons: Record<number, React.ReactNode> = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
      };
    
      const onFinish = (values: any) => {
        form.resetFields();
        console.log("values", values)
      }
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <Card>
            <>
                <Row gutter={[16, 8]}>
                    <Col md={24} className="rate_abs">
                        <Row justify="space-evenly" >
                            <Col xs={24} md={6}>
                                <div className="block text-center">
                                    <Typography.Text >Đánh Giá Trung Bình</Typography.Text>
                                    <Typography.Title type="danger" style={{ margin: 0 }}> 5 / 5</Typography.Title>
                                    <Rate disabled defaultValue={2} /><br />
                                    <Typography.Text type="secondary" style={{ margin: 0 }}>88 đánh giá </Typography.Text>
                                </div>
                            </Col>
                            <Col xs={24} md={6} >
                                { rateList.map((item, index) => (
                                <Row align="middle" justify="space-around" gutter={[0,4]} key={index}>
                                    <Col span={2} className="text-center" >
                                        <div className="flex align-middle">
                                            <Typography.Text >{item?.start}</Typography.Text> 
                                            <AiFillStar fill="#fadb14" size={20} />
                                        </div>
                                    </Col>
                                    <Col span={20}><Progress percent={calcProductRateStartPercent(item?.quantity)} status="active" showInfo={false} /></Col>
                                    <Col span={2}>{item?.quantity}</Col>
                                </Row>
                                ))}

                            </Col>
                            <Col xs={24} md={6}>
                                <Typography.Text >Bạn đã dùng sản phẩm này? </Typography.Text> <br/>
                                <Button type="primary" danger onClick={() => setIsModalOpen(!isModalOpen)} >
                                    GỬI ĐÁNH GIÁ
                                </Button>
                                <Modal title="Đánh giá sản phẩm" open={isModalOpen}  onCancel={() =>{ setIsModalOpen(!isModalOpen);form.resetFields()}} footer={null}>
                                    <Row align="middle" justify="center" gutter={[8,8]}>
                                        <Col ><img style={{textAlign: "center"}} src="https://images.fpt.shop/unsafe/fit-in/96x96/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/8/637982457696470604_apple-watch-ultra-49mm-alpine-loop-cam-1.jpg" /></Col>
                                        <Col ><Typography.Title level={5} >Apple Watch Ultra GPS + Cellular 49mm Titanium Alpine Loop Small</Typography.Title></Col>
                                        
                                    </Row>
                                    {/*** Form gửi nhận xét, đánh giá ***/}
                                    <Form onFinish={onFinish}>
                                        <Form.Item  name="rate_start"  rules={[{ required: true, message: 'Please input your username!' }]} style={{textAlign: "center"}} >
                                            {/* @ts-ignore-next-line */}
                                            <Rate defaultValue={5} character={({ index }: { index: number }) => customIcons[index + 1]} />
                                        </Form.Item>
                                        <Form.Item  name="rate_desc"  rules={[{ required: true, message: 'Please input your username!' }]} >
                                            <Input.TextArea  showCount={false}
                                                rows={4}
                                                style={{  resize: 'none'}}
                                                placeholder="Hãy chia sẻ cảm nhận của bạn về sản phẩm"
                                                />
                                        </Form.Item>
                                        
                                        <Divider />

                                        <Form.Item  name="user_gender"  rules={[{ required: true, message: 'Please input your username!' }]}  >
                                            <Radio.Group name="radiogroup" defaultValue={1}>
                                                <Radio value={1}>Anh</Radio>
                                                <Radio value={2}>Chị</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                          <Row gutter={[8,0]}>
                                            <Col span={12} >
                                                <Form.Item  name="user_name"  rules={[{ required: true, message: 'Please input your username!' }]} style={{textAlign: "center"}} >
                                                    <Input placeholder="Nhập họ và tên"/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item  name="user_phone"  rules={[{ required: true, message: 'Please input your username!' }]} style={{textAlign: "center"}} >
                                                    <Input placeholder="Nhập số điện thoại"/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item  name="user_mail"  rules={[{ required: true, message: 'Please input your username!' }]} style={{textAlign: "center"}} >
                                                    <Input placeholder="Nhập email(để nhận thông báo phản hồi)"/>
                                                </Form.Item>
                                            </Col>
                                          </Row>
                                        <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
                                        <Button type="primary" danger htmlType="submit" style={{width: "100%"}}>
                                            Hoàn tất
                                        </Button>
                                        </Form.Item>
                                    </Form>
                                    
                                </Modal>
                       
                            </Col>
                        </Row>
                    </Col>
                    <Col md={24}>
                        <Row justify="start" align="middle" gutter={[32,8]}>
                            <Col><Typography.Text>Lọc xem theo:</Typography.Text></Col>
                            <Col>
                                <Radio.Group value="" onChange={(e) => console.log("Này là filter rate theo star",e.target.value)}>
                                    <Radio.Button value="all_star">Tất cả</Radio.Button>
                                    <Radio.Button value="5sao">5 sao</Radio.Button>
                                    <Radio.Button value="4sao">4 sao</Radio.Button>
                                    <Radio.Button value="3sao">3 sao</Radio.Button>
                                    <Radio.Button value="2sao">2 sao</Radio.Button>
                                    <Radio.Button value="1sao">1 sao</Radio.Button>
                                </Radio.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={24} >

                        <Row gutter={[16,8]} align="stretch">
                           <Col xs={0}> <Avatar size="large" icon={<UserOutlined />} /></Col>
                            <Col>
                                <Row align="middle" gutter={[16,0]} >
                                    <Col>
                                        <Avatar size="small" icon={<UserOutlined />} />
                                    </Col>
                                    <Col>
                                        <Typography.Title level={4}>Tuyết</Typography.Title>
                                    </Col>
                                    <Col>
                                        <Row gutter={[8,8]}>
                                            <Col><CheckCircleTwoTone twoToneColor="#48bb78" /></Col>
                                            <Col><Typography style={{color: "#48bb78"}}>Đã mua hàng tại APP NAME</Typography></Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Rate style={{color: "#fadb14", fontSize: "15px"}} value={5}  disabled/>
                                    </Col>
                                    <Col span={24}>
                                        <Typography.Text style={{color: "#444b52", fontSize: "16px", fontWeight: 400}}>Cấu hình khủng, máy khá là nhiều tính năng mới hữu ích</Typography.Text>
                                    </Col>
                                    <Col>
                                        <Typography.Text type="secondary">5 ngày trước</Typography.Text>
                                        <Button type="link">Trả lời</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        </Card>
    )
}
export default ProductRating