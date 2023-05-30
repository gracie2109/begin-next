import {useState} from "react";
import {
    Row,
    Col,
    Typography, Button, Card, Space,Grid
} from "antd";
import {formatCurrency, SharedIcons} from "@/utils";
import Link from "next/link";
import {MyPage} from "@/models/common";
import { v4 as uuidv4 } from 'uuid';
import clsx from "clsx";
import dynamic from "next/dynamic";

const  { BsTruck, LeftOutlined, RightOutlined } = SharedIcons
const  OrderItem:MyPage = () => {
    const screens = Grid.useBreakpoint();
    console.log(screens)
    const [open,setOpen] = useState(false)
    const TestImag2 = 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858632184994_iphone-14-pro-dd-1.jpg';

    return (
           <div className={clsx('screens_orrder overflow-hidden', !screens.xs ? "w-1/2 mx-auto" : "w-full ")}>
          <Card>
              <Row gutter={[8, 16]} >
                  <Col span={24} >
                      <Space size="large">
                          <Link href="/account"><LeftOutlined twoToneColor="#eb2f96" /></Link>
                          <Typography.Title level={3}>  Thông tin đơn hàng </Typography.Title>
                      </Space>
                  </Col>
                  <Col span={24} >
                          <Card style={{ backgroundColor: "#d9edf7" }}>
                          <Typography.Text strong> Đơn hàng đã hoàn thành </Typography.Text>
                          <Typography.Paragraph>
                              Cảm ơn bạn đã đánh giá mua hàng. Mọi thắc mắc xin liên hệ cho quản trị viên
                          </Typography.Paragraph>
                      </Card>
                  </Col>
                  <Col span={24} >
                      <Card >
                          <Row gutter={[8,8]} align="stretch">
                              <Col span={2} style={{textAlign: "end"}}><BsTruck/></Col>
                              <Col span={22}>

                                  <Typography.Text strong> Địa chỉ nhận hàng</Typography.Text>
                                  <Typography.Paragraph>
                                      Phương Thảo <br/>
                                      0327072255<br/>
                                      Tòa nhà Mitec, Dương Đình Nghệ, Phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội
                                  </Typography.Paragraph>
                              </Col>
                          </Row>
                      </Card>
                  </Col>
                  <Col span={24} >
                          <Card style={{boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px"}}>
                          <Col span={4} >
                              <img src={TestImag2} alt="product_image" style={{width: "50px", objectFit: "cover"}} />
                          </Col>
                          <Col span={24}>
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
                                              <div className="text-orange-700 text-[10px] p-[1px] text-center"> 7 ngày trả hàng</div>
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
                      </Card>
                  </Col>
                  <Col span={24} >
                      <Row justify="end" align="stretch">
                          {open && (
                              <Col span={24} data-aos="fade-up"
                                   data-aos-anchor-placement="top-bottom"
                              >
                                     <Row>
                                         <Col span={12}>
                                             <Typography.Text type="secondary">Tổng tiền hàng </Typography.Text>
                                         </Col >
                                         <Col span={12} style={{textAlign: "end"}}>
                                             <Typography.Text type="secondary"> {formatCurrency(1200000)}</Typography.Text>
                                         </Col>
                                         <Col span={12}>
                                             <Typography.Text type="secondary">Phí vận chuyển</Typography.Text>
                                         </Col >
                                         <Col span={12} style={{textAlign: "end"}}>
                                             <Typography.Text type="secondary"> {formatCurrency(1200000)}</Typography.Text>
                                         </Col>
                                         <Col span={12}>
                                             <Typography.Text type="secondary">Giảm giá phí vận chuyển</Typography.Text>
                                         </Col >
                                         <Col span={12} style={{textAlign: "end"}}>
                                             <Typography.Text type="secondary"> {formatCurrency(1200000)}</Typography.Text>
                                         </Col>
                                         <Col span={12}>
                                             <Typography.Text type="secondary">Voucher từ shop</Typography.Text>
                                         </Col >
                                         <Col span={12} style={{textAlign: "end"}}>
                                             <Typography.Text type="secondary"> {formatCurrency(1200000)}</Typography.Text>
                                         </Col>
                                     </Row>
                              </Col>
                          )}

                          <Col span={12} >
                              <Typography>Thành tiền</Typography>
                          </Col >
                          <Col span={12} style={{textAlign: "end"}}>
                             <Space>
                                 <Typography.Text strong> {formatCurrency(1200000)}</Typography.Text>
                                 {!open && <RightOutlined onClick={() => setOpen(!open)}/>}
                             </Space>
                          </Col>
                      </Row>
                  </Col>
                  <Col span={24}>
                      {/*<Card bodyStyle={{padding: 0}}>*/}
                      <Card>
                          <Row gutter={[8,8]} align="stretch">
                              <Col span={2} style={{textAlign: "end"}}><BsTruck/></Col>
                              <Col span={22}>
                                  <Typography.Text strong>Phương thức thanh toán</Typography.Text>
                                  <Typography.Paragraph>
                                    Tiền mặt
                                  </Typography.Paragraph>
                              </Col>
                          </Row>
                      </Card>
                  </Col>
                  <Col span={24}>
                      <Card bodyStyle={{padding: 0}}>
                            <Row justify="space-between">
                                <Col span={12}><Typography.Text strong>Mã đơn hàng</Typography.Text></Col>
                                <Col span={12} style={{textAlign: "end"}}><Typography.Text strong>{ uuidv4().slice(0, 20)}</Typography.Text></Col>
                                <Col span={12}><Typography.Text>Thời gian đặt hàng</Typography.Text></Col>
                                <Col span={12} style={{textAlign: "end"}}>{ uuidv4().slice(0, 10)}</Col>
                                <Col span={12}><Typography.Text>Thời gian thanh toán </Typography.Text></Col>
                                <Col span={12} style={{textAlign: "end"}}>{ uuidv4().slice(0, 10)}</Col>
                                <Col span={12}><Typography.Text>Thời gian giao hàng cho vận chuyển</Typography.Text></Col>
                                <Col span={12} style={{textAlign: "end"}}>{ uuidv4().slice(0,10)}</Col>
                                <Col span={12}><Typography.Text>Thời gian hoàn th</Typography.Text></Col>
                                <Col span={12} style={{textAlign: "end"}}>{ uuidv4().slice(0, 10)}</Col>
                            </Row>
                      </Card>
                  </Col>
                  <Col span={24}>
                      <Row justify="space-between" gutter={[8,8]}>
                          <Col span={12}><Button style={{width: "100%"}}>Liên hệ</Button></Col>
                          <Col span={12}><Button style={{width: "100%"}}>Đánh giá</Button></Col>
                      </Row>
                  </Col>
                  <Col span={24}>
                      <Button type="primary" style={{width: '100%'}}>Mua lại</Button>
                  </Col>
              </Row>
          </Card>
       </div>
    )
}

export  default OrderItem;
OrderItem.Layout = "Main"