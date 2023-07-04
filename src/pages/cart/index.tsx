import { useState, useEffect } from "react";
import { MyPage } from '@/models/common';
import { Row, Col, Typography, Card, Divider, Button, InputNumber, List, Avatar, Badge, Input, Form,Alert } from "antd";
import { Products_data, SharedIcons, calcShippingFee, FREE_SHIP_MONEY, formatCurrency } from "@/utils";
import Link from "next/link";
import VatForm from "@/pages/cart/components/VatForm";
import VoucherList from "@/pages/cart/components/voucherList";
const { BsTruck, FaRegCheckCircle, AiFillCheckCircle } = SharedIcons;

const Cart: MyPage = () => {
    const [form] = Form.useForm();
    const [cloneList, setCloneList] = useState([...Products_data]);
    const [money, setMoney] = useState(0);
    const [openVat, setOpenVat] = useState(false)

    const [value, setValue] = useState<string | number | null>('10');

    useEffect(() => {
        const money = cloneList.reduce((acc, curr) => acc + curr.price, 0);
        setMoney(money);
    }, [cloneList]);

    const { needMore, percent } = calcShippingFee(money);

    const deleteItem = (item: any) => {
        setCloneList(cloneList.filter((list) => list.id !== item.id))
    }

    const handleVatForm  = (values:any) => {
        console.log("handleVatForm", values)
    }

    return (
        <Card className="my-3 px-5" bodyStyle={{padding: 5}} style={{overflow: "hidden"}}>
            <Row gutter={[32, 16]} align="stretch" >
                <Col  xs={24} md={16}>
                    {/* title */}
                    <Row justify="space-between">
                        <Col>
                            <Typography.Title level={4} >Giỏ hàng của bạn</Typography.Title>
                        </Col>
                        <Col>
                            <Typography.Text>Bạn đang có  <Typography.Text strong >{cloneList?.length} sản phẩm</Typography.Text> trong giỏ hàng</Typography.Text>
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
                                        ) : (
                                            <Typography.Text>Bạn cần mua thêm <Typography.Text strong>{needMore} để được MIỄN PHÍ VẬN CHUYỂN</Typography.Text></Typography.Text>
                                        )}
                                    </Col>
                                            
                                    <Col span={24}>
                                        <div className="cart-shipping__bar relative top-0 my-[10px] bg-[#e9e9e9] w-full h-[8px] rounded mt-2">
                                            {needMore && needMore !== 0 ? (
                                                <span className="shipping-bar bg-[#ffbc11] relative h-full block transition-[width] rounded ease-in-out duration-[0.4s] delay-0 " style={{ width: `${percent}` }} >
                                                    <span className="icon bg-[#ffbc11] text-[#ffbc11] top-[-15px] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full absolute right-0   translate-x-1/2">
                                                        <BsTruck style={{ color: "#fff" }} />
                                                    </span>
                                                </span>
                                            ) : (
                                                <span className="shipping-bar bg-[#3d9851] relative h-full block transition-[width] rounded ease-in-out duration-[0.4s] delay-0 " style={{ width: "100%" }} >
                                                    <span className="icon bg-[#3d9851] text-[#3d9851] top-[-15px] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full absolute  right-0   translate-x-1/2">
                                                        <BsTruck style={{ color: "#fff" }} />
                                                    </span>
                                                </span>
                                            )}
                                        </div>

                                    </Col>
                                    <Col span={24}>  <Alert message="Bạn có thể click vào sl sp bên trái để xóa sp" type="warning" showIcon closable /></Col>   
                                </Row>

                                <Card className="my-3" >
                                    <List
                                        dataSource={cloneList}
                                        renderItem={(item) => (
                                            <List.Item key={item.id} style={{ width: '100%' }}>
                                                <List.Item.Meta
                                                    avatar={
                                                        <Badge 
                                                            count={<span className="cursor-pointer bg-red-600 text-white w-[20px] h-[20px] text-[7px] rounded-full absolute top-0 grid place-items-center" 
                                                            onClick={() => { deleteItem(item) }}>3</span>} className="pointer-cursor">
                                                            <Avatar src={item?.images?.[0] || item?.images || ""} shape="square" size={80} />
                                                        </Badge>
                                                    }
                                                    title={<a href="https://ant.design">{item?.name}</a>}
                                                    description={formatCurrency(item?.price)}

                                                />
                                                <Row align="middle" style={{ textAlign: "end" }}>
                                                    <Col span={24}><Typography.Text strong >{formatCurrency(item?.price)}</Typography.Text></Col>
                                                    <Col span={24}>
                                                        <InputNumber
                                                            min={1}
                                                            max={99}
                                                            readOnly
                                                            style={{ width: '120px' , textAlign: "center"}}
                                                            value={value} onChange={setValue}
                                                            addonBefore={<Button style={{padding: 0}} type="link" onClick={() =>setValue(Number(value) +1)}  > +</Button>}
                                                            addonAfter={<Button style={{padding: 0}} type="link" disabled={value === 0} onClick={() =>setValue(Number(value) -1)}> -</Button>}
                                                            defaultValue={1} />
                                                    </Col>
                                                </Row>
                                            </List.Item>
                                        )}
                                    />
                                </Card>

                                <Card style={{ backgroundColor: "#dcdcdc", margin: "3rem 0" }}>
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
                                    <Row justify="start" gutter={[8, 8]}>
                                        <Col>
                                            {!openVat ? (
                                                <FaRegCheckCircle size={24} onClick={() => setOpenVat(!openVat)} className="cursor-pointer" />
                                            ) : (
                                                <AiFillCheckCircle size={24} onClick={() => setOpenVat(!openVat)} className="cursor-pointer" />
                                            )}
                                        </Col>
                                        <Col> <Typography.Text strong onClick={() => setOpenVat(!openVat)} className="cursor-pointer"> Xuất hoá đơn cho đơn hàng </Typography.Text></Col>
                                    </Row>
                                    {openVat && (
                                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="mt-3">
                                            <VatForm form={form} onFinish={handleVatForm} />
                                        </div>
                                    )}

                                </Card>

                            </div>
                       
                        </>
                    ) : (
                         <Row align="middle" justify="center">
                            <Col md={12} xs={12}> <img src="https://theme.hstatic.net/200000592359/1001008166/14/cart_banner_image.jpg?v=147" style={{width: "100%", objectFit: "cover"}}/> </Col>
                            <Col md={24} xs={24}  className="text-center">
                                <Typography.Title level={4}>Không có sản phẩm nào trong giỏ hàng</Typography.Title>
                                <Link href="/">Quay về trang chủ</Link>
                            </Col>
                        </Row>
                    )}

                </Col>
                <Col xs={24} md={6}>
                            <Card title={<Typography.Text strong>Thông tin đơn hàng</Typography.Text>}>
                                <Row justify={"space-between"}>
                                    <Col><Typography.Text strong> Tổng tiền: </Typography.Text></Col>
                                    <Col> <Typography.Title level={4} type="danger"> {formatCurrency(money)}</Typography.Title></Col>
                                </Row>
                                <Divider />
                                <Typography.Paragraph>
                                    <ul>
                                        <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
                                        <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
                                    </ul>
                                </Typography.Paragraph>

                                <div className="my-7">
                                    <button className="border-none font-bold outline-none text-white uppercase bg-[#ff0000] w-full p-3 rounded-lg">
                                        <Link href={"/checkouts"} style={{color: "#fff"}}>Thanh toán</Link>
                                    </button>
                                </div>
                            </Card>

                            <div className="my-7">
                                <Card bodyStyle={{ padding: '10px' }} style={{ backgroundColor: "#d9edf7" }}>
                                    <Typography.Text strong> Chính sách mua hàng:</Typography.Text>
                                    <Typography.Paragraph style={{ paddingTop: "3px" }}>
                                        Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu <Typography.Text strong>{formatCurrency(FREE_SHIP_MONEY)}</Typography.Text> trở lên.
                                    </Typography.Paragraph>
                                </Card>
                            </div>
                          <VoucherList />
                        </Col>
            </Row>
        </Card>
    )
}


export default Cart;
Cart.Layout = "Main"