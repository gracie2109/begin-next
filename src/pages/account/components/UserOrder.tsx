import React,{useState, useEffect}   from "react";
import {
    Row,
    Col,
    Typography,
    Grid
} from "antd";
import {formatCurrency} from "@/utils";
const {useBreakpoint} = Grid;

const UserOrder = () => {
    const screens = useBreakpoint();
    const TestImag2 = 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858632184994_iphone-14-pro-dd-1.jpg'
    return (
        <Row gutter={[0, 8]}>
            <Col md={24} xs={24}>
                {/* Avatar   */}
                <div className="grid place-items-center">
                    <Typography.Title level={3}>  Đơn hàng của bạn </Typography.Title>
                </div>
            </Col>
            <Col md={24} xs={24}>
                    {/* @ts-ignore */}
                    {/* responsive mobile */}
                    <Row  style={{backgroundColor: "#fff",width: "100%"}} gutter={[0, 32]}>
                        {Array.from([0,10], (_:any, key:any) => (
                            <React.Fragment key={key}>
                                <Col span={4}>
                                    <img src={TestImag2} alt="product_image" style={{width: "50px", objectFit: "cover"}} />
                                </Col>
                                <Col span={20} style={{marginBottom: "10px"}}>
                                    <Row>
                                        <Col span={24}>
                                            <Typography.Text> iPhone 14 Pro 128GB </Typography.Text>
                                        </Col>
                                        <Col span={24} style={{textAlign: "end"}}>
                                            <Typography.Text type="secondary" > x1</Typography.Text>
                                        </Col>
                                        <Col span={24} style={{textAlign: "end", borderBottomColor: "red"}}>
                                            <Row align="middle">
                                                <Col span={7} style={{textAlign: "left",border: "1px solid red"}}>
                                                    <div className="text-orange-700 text-[10px] p-[1px]"> 7 ngày trả hàng</div>
                                                </Col>
                                                <Col span={17}> <Typography.Text type="secondary" >{formatCurrency(10000)}</Typography.Text></Col>
                                            </Row>
                                        </Col>
                                        <hr style={{ borderBottomColor: "#dcdcdc", width: "100%", borderTopColor: "transparent", margin: "3px 0"}}/>
                                        <Col span={24} style={{textAlign: "end"}}>
                                            <Row justify="space-around" align="top">
                                                <Col span={12} style={{textAlign: "left"}}>
                                                    1 sản phẩm
                                                </Col>
                                                <Col span={12}>
                                                    <Typography.Text strong type="danger" style={{paddingRight: "5px"}}>Thành tiền:</Typography.Text>
                                                    <Typography.Text strong>{formatCurrency(10000)}</Typography.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
            </Col>
        </Row>
    )
}
export default UserOrder;

