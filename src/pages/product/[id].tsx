import { useEffect, useState } from 'react';
import { MyPage } from '@/models/common';
import { Row, Col, Typography, Space, Card, Divider, Rate, Button, InputNumber, Skeleton, Grid, Tag } from "antd";
import {Products_data, vouchers_data, policy_data, formatWord, SharedIcons} from "@/utils";
import { VoucherCard, SliderShow } from '@/components/common';
import { useRouter } from 'next/router';
import TabsProduct from "@/components/features/TabsProduct";
import Link from "next/link";
import { Pagination, Navigation, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
const { LeftOutlined, RightOutlined,BsFacebook, BsPinterest, FaFacebookMessenger, AiFillTwitterCircle, ImLink, AiFillThunderbolt } = SharedIcons;
const { useBreakpoint } = Grid;

const DetailProduct: MyPage = () => {
    const router = useRouter();
    const [product, setProduct] = useState<any>()
    const id = router.query.id;
    const screens = useBreakpoint();
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
    const [init, setInit] = useState(false);
    const [value, setValue] = useState<string | number | null>('10');

    useEffect(() => {
        const prd = Products_data.find((item: any) => item?.id == id);
        setProduct(prd)
    }, [id])

    return (
        <>
            {product ? (
                <>
                    <Card className="mt-7 h-auto min-h-screen overflow-hidden" bodyStyle={{padding: 10}}>
                        <Row gutter={[8, 6]} align="stretch">
                            {/* gallary thumb */}
                            <Col xs={24}  md={6} style={{marginBottom: "5rem"}}>
                                <SliderShow type="gallary" slideChildren={product && product?.images} />
                            </Col>

                           <Col xs={24} md={18}>
                               <Row gutter={[4,4]}>
                                   {/* ProductContent */}
                                   <Col xs={24} md={17} >
                                       <>
                                           <Typography.Title level={screens.xs? 4:3}>Kính thời trang Prada 1</Typography.Title>
                                           <div className="mb-4">
                                               <Space split={<Divider type="vertical" />}>
                                                   <Typography.Text><Typography.Text type="secondary">Mã sản phẩm: </Typography.Text><Typography.Text strong>DEMO001-1</Typography.Text></Typography.Text>
                                                   <Typography.Text><Typography.Text type="secondary">Tình trạng: </Typography.Text><Typography.Text strong>Còn hàng</Typography.Text></Typography.Text>
                                               </Space>
                                           </div>
                                           {/* price */}
                                           <div className="mb-4">
                                               <Row align={"middle"}>
                                                   <Col xs={0} md={4} xl={4}><Typography.Text strong>Giá: </Typography.Text></Col>
                                                   <Col xs={24} md={15} xl={15}>
                                                       <Row  align="middle">
                                                           <Col xs={8} md={5} ><Typography.Text strong type="danger">7,015,000₫</Typography.Text></Col>
                                                           <Col xs={8} md={5}><Typography.Text delete>7,750,000₫</Typography.Text></Col>
                                                           <Col xs={8} md={5}>
                                                               <div className='bg-red-600 text-white p-1 rounded-full my-auto'>
                                                                   <Row justify="center" align="middle">
                                                                       <Col> <AiFillThunderbolt fill='white' /> </Col>
                                                                       <Col>10%</Col>
                                                                   </Row>
                                                               </div>
                                                           </Col>
                                                       </Row>
                                                   </Col>
                                                   <Col xs={24} md={5} xl={5}>
                                                       <Space align="center">
                                                           <Rate disabled defaultValue={5} style={{ fontSize: 14 }} />
                                                           <Typography.Text type="secondary">(5)</Typography.Text>
                                                       </Space>
                                                   </Col>
                                               </Row>
                                           </div>

                                           {/* Color */}
                                           <div className="mb-4">
                                               <Row justify="space-between" align={"middle"}>
                                                   <Col md={4} xs={24}><Typography.Text strong>Màu sắc: </Typography.Text></Col>
                                                   <Col>
                                                   </Col>
                                               </Row>
                                           </div>

                                           {/* Size */}
                                           <div className="mb-4">
                                               <Row align={"middle"}>
                                                   <Col md={4} xs={24}><Typography.Text strong>Kích thước: </Typography.Text></Col>
                                                   <Col>
                                                       { }
                                                   </Col>
                                               </Row>
                                           </div>

                                           {/* Quantity */}
                                           <div className="mb-4">
                                               <Row align={"middle"}>
                                                   <Col md={4} xs={0}><Typography.Text strong>Số lượng: </Typography.Text></Col>
                                                   <Col span={10}>
                                                       <InputNumber
                                                           min={1}
                                                           max={99}
                                                           style={{ width: 200 , textAlign: "center"}}
                                                           value={value} onChange={setValue}
                                                           addonBefore={<Button style={{padding: 0}} type="link" onClick={() =>setValue(Number(value) +1)}  > +</Button>}
                                                           addonAfter={<Button style={{padding: 0}} type="link" disabled={value === 0} onClick={() =>setValue(Number(value) -1)}> -</Button>}
                                                           defaultValue={1} />
                                                   </Col>
                                               </Row>
                                           </div>

                                           {/* button */}
                                           <div className="my-7">
                                               <Row align="middle" justify="space-between" gutter={[8, 8]}>
                                                   <Col xs={24} md={12} >
                                                       <Button size="large" type="primary" danger style={{width: "100%", fontWeight: "bold"}}>{formatWord("thêm vào giỏ", "uppercase")}</Button>
                                                   </Col>
                                                   <Col xs={24} md={12}>
                                                       <Button size="large" danger style={{width: "100%", fontWeight: "bold"}}><Link href="/cart">{formatWord("mua ngay", "uppercase")} </Link></Button>
                                                   </Col>
                                               </Row>
                                           </div>
                                           <div>
                                               <Row align="middle" >
                                                   <Col xs={0}  md={4} ><Typography.Title level={4}>Chia sẻ: </Typography.Title></Col>
                                                   <Col xs={0}>
                                                       <Space size={12}>
                                                           <BsFacebook size={30} fill={"rgb(24, 119, 242)"} />
                                                           <FaFacebookMessenger size={30} fill={"rgb(0, 132, 255)"} />
                                                           <AiFillTwitterCircle size={30} fill={"rgb(38, 166, 209)"} />
                                                           <BsPinterest size={30} fill={"rgb(203, 32, 39)"} />
                                                           <ImLink size={30} fill={"rgb(37, 183, 211)"} />
                                                       </Space>
                                                   </Col>
                                               </Row>
                                           </div>
                                       </>
                                   </Col>

                                   {/* VoucherList */}
                                   <Col xs={0} md={7} className="">
                                       {vouchers_data.map((item, index) => (
                                           <VoucherCard data={item} key={index} />
                                       ))}
                                   </Col>

                                   {/* VoucherList Mobile */}
                                   <Col xs={24} md={0} lg={0} xl={0} xxl={0} className="mb-5">
                                       <Button type="text" icon={<LeftOutlined />} ref={(node) => setPrevEl(node)}></Button>
                                       <Button type="text" icon={<RightOutlined />} ref={(node) => setNextEl(node)} ></Button>
                                       <Swiper
                                           modules={[Navigation, Pagination, A11y, FreeMode]}
                                           spaceBetween={30}
                                           slidesPerView={screens.xs ? 1 : 4}
                                           navigation={{ prevEl, nextEl }}
                                           onInit={() => setInit(true)}
                                           freeMode={true}
                                           className="mobile:hidden tablet:block"
                                       >
                                           {vouchers_data.map((item, index) => (
                                               <SwiperSlide className="res-slide" key={index} style={{ marginTop: "1rem" }}>
                                                   <VoucherCard data={item} key={index} />
                                               </SwiperSlide>
                                           ))}
                                       </Swiper>
                                   </Col>


                               </Row>
                           </Col>
                            {/* policy */}
                            <Col xs={24} md={18} offset={!screens.xs?6:0}>
                                <Row gutter={[16, 32]}>
                                    {screens.xs && <Typography.Text strong>Chính sách bán hàng </Typography.Text>}
                                    {policy_data.map((item, index) => (
                                        <Col md={8} xs={24} key={index}>
                                            <Space>
                                                <img src={item.img} style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                                                <Typography.Text>{item.name}</Typography.Text>
                                            </Space>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Card>
                        <TabsProduct data={product} prId={id} />
                    </Card>
                </>
            ) : (
                <Card className="mt-7 h-auto min-h-screen overflow-hidden">
                    <Skeleton></Skeleton>
                </Card>
            )}

        </>
    )
}

export default DetailProduct;
DetailProduct.Layout = "Main"
