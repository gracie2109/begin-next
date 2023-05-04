import { useEffect, useState } from 'react';
import { MyPage } from '@/models/common';
import { Row, Col, Typography, Space, Card, Divider, Rate, Button, InputNumber, Skeleton } from "antd";
import { Products_data, vouchers_data, policy_data, formatWord, SharedIcons } from "@/utils";
import { VoucherCard, SliderShow } from '@/components/common';
import { useRouter } from 'next/router';
import TabsProduct from "@/components/features/TabsProduct";
import Link from "next/link"
const { BsFacebook, BsPinterest, FaFacebookMessenger, AiFillTwitterCircle, ImLink, AiFillThunderbolt } = SharedIcons;

const DetailProduct: MyPage = () => {
    const router = useRouter();
    const [product, setProduct] = useState<any>()
    const id = router.query.id;


    useEffect(() => {
        const prd = Products_data.find((item: any) => item?.id == id);
        setProduct(prd)
    }, [id])

    return (
        <>
            {product ? (
                <>
                    <Card className="mt-7 h-auto min-h-screen overflow-hidden" >
                        <Row gutter={[8, 6]} align="stretch">
                            {/* gallary thumb */}
                            <Col span={6} >
                                <SliderShow type="gallary" slideChildren={product && product?.images} />
                            </Col>

                            {/* ProductContent */}
                            <Col span={12} >
                                <>
                                    <Typography.Title level={3}>Kính thời trang Prada 1</Typography.Title>
                                    <div className="mb-4">
                                        <Space split={<Divider type="vertical" />}>
                                            <Typography.Text><Typography.Text type="secondary">Mã sản phẩm: </Typography.Text><Typography.Text strong>DEMO001-1</Typography.Text></Typography.Text>
                                            <Typography.Text><Typography.Text type="secondary">Tình trạng: </Typography.Text><Typography.Text strong>Còn hàng</Typography.Text></Typography.Text>
                                        </Space>
                                    </div>
                                    {/* price */}
                                    <div className="mb-4">
                                        <Row align={"middle"}>
                                            <Col span={4}><Typography.Text strong>Giá: </Typography.Text></Col>
                                            <Col span={10}>
                                                <Row gutter={[16, 16]} align="middle">
                                                    <Col><Typography.Text strong type="danger">7,015,000₫</Typography.Text></Col>
                                                    <Col><Typography.Text delete>7,750,000₫</Typography.Text></Col>
                                                    <Col >
                                                        <div className='bg-red-600 text-white p-1 rounded-full my-auto'>
                                                            <Row justify="center" align="middle">
                                                                <Col > <AiFillThunderbolt fill='white' /> </Col>
                                                                <Col>10%</Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={6}>
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
                                            <Col span={4}><Typography.Text strong>Màu sắc: </Typography.Text></Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                    </div>

                                    {/* Size */}
                                    <div className="mb-4">
                                        <Row align={"middle"}>
                                            <Col span={4}><Typography.Text strong>Kích thước: </Typography.Text></Col>
                                            <Col>
                                                { }
                                            </Col>
                                        </Row>
                                    </div>

                                    {/* Quantity */}
                                    <div className="mb-4">
                                        <Row align={"middle"}>
                                            <Col span={4}><Typography.Text strong>Số lượng: </Typography.Text></Col>
                                            <Col span={10}>
                                                <InputNumber 
                                                    min={1}
                                                    max={99}
                                                    style={{ width: 200 }}
                                                    addonBefore={<Button type="link" onClick={() => console.log("add")} > +</Button>}
                                                    addonAfter={<Button type="link" onClick={() => console.log("add")}> -</Button>}
                                                    defaultValue={1} />

                                            </Col>
                                        </Row>
                                    </div>

                                    {/* button */}
                                    <div className="my-7">
                                        <Row align="middle" justify="space-between" gutter={[8, 8]}>
                                            <Col span={12} >
                                                <Button size="large" className="w-full bg-red-600 text-white font-bold hover:text-red-600 hover:bg-slate-200 outline-none ">{formatWord("thêm vào giỏ", "uppercase")}</Button>
                                            </Col>
                                            <Col span={12}>
                                                <Button size="large" className="w-full bg-salte-100 text-red-600 font-bold border border-red-600 outline-none"><Link href="/cart">{formatWord("mua ngay", "uppercase")} </Link></Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <Row align="middle" >
                                            <Col span={4}><Typography.Title level={4}>Chia sẻ: </Typography.Title></Col>
                                            <Col>
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
                            <Col span={6} className="">
                                {vouchers_data.map((item, index) => (
                                    <VoucherCard data={item} key={index} />
                                ))}
                            </Col>

                            {/* policy */}
                            <Col span={18} offset={6}>
                                <Row gutter={[16, 32]}>
                                    {policy_data.map((item, index) => (
                                        <Col span={8} key={index}>
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
