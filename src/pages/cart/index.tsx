import {useState, useEffect} from "react";
import { MyPage } from '@/models/common';
import { Row, Col, Typography, Space, Card, Divider, Rate, Button, InputNumber, List , Avatar, Grid as AntdGrid, Badge,Input, Form } from "antd";
import { Products_data,vouchers_data, formatWord, SharedIcons , calcShippingFee,FREE_SHIP_MONEY, formatCurrency} from "@/utils";
import { VoucherCard, SliderShow } from '@/components/common';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, FreeMode ,Grid} from "swiper";
import Link from "next/link";
import 'swiper/swiper-bundle.css'
const { BsTruck ,FaRegCheckCircle,  AiFillCheckCircle,LeftOutlined, RightOutlined} = SharedIcons;
const { useBreakpoint} = AntdGrid;


const Cart:MyPage = () => {
    const [form] = Form.useForm();
    const [cloneList, setCloneList] = useState([...Products_data]);
    const [money, setMoney] = useState(0);
    const [openVat, setOpenVat]= useState(false)
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
    const [init, setInit] = useState<boolean>(false);
    const  screens = useBreakpoint();

    useEffect(() => {
        const money = cloneList.reduce((acc, curr) => acc + curr.price, 0);
        setMoney(money);
    }, [cloneList]);

    const { needMore, percent } = calcShippingFee(money);

    const deleteItem = (item: any) => {
        setCloneList(cloneList.filter((list) => list.id !== item.id))
    }

    return (
        <Card className="my-3">
            <Row  gutter={[32, 16]} align="stretch" >
            <Col span={14} xs={24} md={14}> 
                {/* title */}
                <Row justify="space-between">
                    <Col>
                        <Typography.Title level={4} >Giỏ hàng của bạn</Typography.Title>
                    </Col>
                    <Col>
                        <Typography.Text>Bạn đang có  <Typography.Text strong >10 sản phẩm</Typography.Text> trong giỏ hàng</Typography.Text>
                    </Col>
                </Row>
                <Divider />

                
                {cloneList && cloneList.length > 0 ? (
                    <>
                        {/* Fee chart */}
                        <div className="mb-3">
                            <Row className="my-3" gutter={[8, 8]}>
                                <Col span={24}>
                                    {money && money > FREE_SHIP_MONEY ? (
                                        <Typography.Text>Bạn đã được <Typography.Text strong>MIỄN PHÍ VẬN CHUYỂN</Typography.Text></Typography.Text>
                                    ):(
                                        <Typography.Text>Bạn cần mua thêm <Typography.Text strong>{needMore} để được MIỄN PHÍ VẬN CHUYỂN</Typography.Text></Typography.Text>
                                    )}
                                </Col>

                                <Col span={24}>
                                    <div className="cart-shipping__bar relative top-0 my-[10px] bg-[#e9e9e9] w-full h-[8px] rounded mt-2">
                                        {needMore && needMore !== 0 ? (
                                            <span className="shipping-bar bg-[#ffbc11] relative h-full block transition-[width] rounded ease-in-out duration-[0.4s] delay-0 " style={{ width: `${percent}` }} >
                                                <span className="icon bg-[#ffbc11] text-[#ffbc11] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full absolute right-0  translate-y-[-50%] translate-x-1/2">
                                                    <BsTruck style={{ color: "#fff" }} />
                                                </span>
                                            </span>
                                        ) : (
                                            <span className="shipping-bar bg-[#3d9851] relative h-full block transition-[width] rounded ease-in-out duration-[0.4s] delay-0 " style={{ width: "100%" }} >
                                                <span className="icon bg-[#3d9851] text-[#3d9851] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full absolute  right-0  translate-y-[-50%] translate-x-1/2">
                                                    <BsTruck style={{ color: "#fff" }} />
                                                </span>
                                            </span>
                                        )}
                                    </div>

                                </Col>
                            </Row>
                        
                            <Card  className="my-3" >
                                        <List
                                           
                                            dataSource={cloneList}
                                            renderItem={(item) => (
                                            <List.Item key={item.id} style={{width: '100%'}}>
                                                        <List.Item.Meta
                                                            avatar={
                                                                <Badge count={<span onClick={() => {deleteItem(item)}}>1</span>} className="pointer-cursor">
                                                                    <Avatar src={item?.images?.[0] || item?.images || ""} shape="square" size={80} className="relative">
                                                                    </Avatar>
                                                                </Badge>
                                                            }
                                                            title={<a href="https://ant.design">{item?.name}</a>}
                                                            description={formatCurrency(item?.price)}

                                                        />
                                                    <Row  align ="middle" style={{textAlign: "end"}}>
                                                        <Col span={24}><Typography.Text strong >{formatCurrency(item?.price)}</Typography.Text></Col>
                                                        <Col span={24}>
                                                            <InputNumber 
                                                            style={{width: "auto", maxWidth: "120px"}}
                                                            addonBefore={<Button style={{padding: 0}} type="link"  > +</Button>} 
                                                            addonAfter={<Button style={{padding: 0}} type="link"> -</Button>} defaultValue={100} />
                                                        </Col>
                                                    </Row>
                                            </List.Item>
                                        )}
                                        />
                            </Card>

                            <Card style={{backgroundColor: "#dcdcdc", margin : "3rem 0"}}>
                                <Typography.Text> Ghi chú của bạn </Typography.Text>
                                <Input.TextArea
                                        showCount
                                        maxLength={100}
                                        style={{ height: 120, resize: 'none' }}
                                        id="note"
                                        name="note"
                                        />
                            </Card>


                            {/* VAT */}
                            <Card>  
                                <Row justify="start" gutter={[8,8]}>
                                    <Col>
                                         {!openVat ? (
                                            <FaRegCheckCircle size={24}  onClick={() => setOpenVat(!openVat)} className="cursor-pointer"/>
                                         ):(
                                            <AiFillCheckCircle size={24}  onClick={() => setOpenVat(!openVat)} className="cursor-pointer"/>
                                         )} 
                                    </Col>
                                    <Col> <Typography.Text strong onClick={() => setOpenVat(!openVat)} className="cursor-pointer"> Xuất hoá đơn cho đơn hàng </Typography.Text></Col>
                                </Row>
                                {openVat && (
                                    <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" className="mt-3">
                                        <Form form={form}>
                                            <Row gutter={[16,0]}>
                                                <Col md={8} xs={24}>  <Form.Item name="companyVatName" >  <Input placeholder="Tên công ty...."/>  </Form.Item></Col>
                                                <Col md={8} xs={24}><Form.Item name="companyVatCode" >  <Input placeholder="Mã số thuế...."/>  </Form.Item></Col>
                                                <Col md={8} xs={24}><Form.Item name="companyVatEmail" >  <Input placeholder="Email...."/>  </Form.Item></Col>
                                                <Col md={24} xs={24}><Form.Item name="companyVatAdr" >  <Input placeholder="Địa chỉ công ty...."/>  </Form.Item></Col>
                                                <Col md={24} xs={24}><Button htmlType="submit" style={{backgroundColor: "#dcdcdc"}}>Lưu thông tin</Button></Col>
                                            </Row>
                                        </Form>
                                    </div>
                                )} 

                            </Card>
                        
                        </div>
                    </>
                ):(
                    <>Chuwa cos sp trong gio hafng</>
                )}

            </Col>
            <Col span={8} xs={24} md={8}>
                <Card title={<Typography.Text strong>Thông tin đơn hàng</Typography.Text>}>
                    <Row justify={"space-between"}>
                        <Col><Typography.Text strong> Tổng tiền: </Typography.Text></Col>
                        <Col> <Typography.Title level={4}  type="danger"> {formatCurrency(money)}</Typography.Title></Col>
                    </Row>
                    <Divider />
                    <Typography.Paragraph>
                        <ul>
                            <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
                            <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
                        </ul>
                    </Typography.Paragraph>

                    <div className="my-7">
                        <button className="border-none outline-none text-white uppercase bg-[#ff0000] w-full p-3">
                            <Link href={"/checkouts"}>Thanh toán</Link>
                        </button>
                    </div>
                </Card>
                    
                <div className="my-7">
                    <Card bodyStyle={{padding: '10px' }} style={{backgroundColor: "#d9edf7"}}>
                        <Typography.Text strong> Chính sách mua hàng:</Typography.Text>
                        <Typography.Paragraph style={{paddingTop: "3px"}}>
                            Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu <Typography.Text strong>{formatCurrency(FREE_SHIP_MONEY)}</Typography.Text> trở lên.
                        </Typography.Paragraph>
                    </Card>
                </div>



                <Card bodyStyle={{padding: '10px' }} style={{marginTop: "3rem 0"}} >
                    <Row justify="space-between" gutter={[32, 16]}>
                        <Col span={16}> <Typography.Title level={5}> Khuyến mãi dành cho bạn</Typography.Title></Col>
                        <Col span={8}>
                            <Row justify="end" gutter={[16, 16]}>
                                <Col> <Button type="text" icon={<LeftOutlined />} ref={(node) => setPrevEl(node)}></Button> </Col>
                                <Col> <Button type="text" icon={<RightOutlined />} ref={(node) => setNextEl(node)} ></Button> </Col>
                            </Row>
                        </Col>
                        <Col span={24} >
                            <Swiper
                                modules={[Navigation, Pagination, A11y, FreeMode]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{ prevEl, nextEl }}
                                onInit={() => setInit(true)}
                                freeMode={true}
                                >
                                {vouchers_data.map((item, index) => (
                                    <SwiperSlide key={index} >
                                        <VoucherCard data={item}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper> 

                        </Col>

                    </Row>
                    </Card>
            </Col>
                
            </Row>
        </Card>
    )
}


export default Cart;
Cart.Layout = "Main"