import {useState} from "react";
import { Row, Col, Typography, Card,Button } from "antd";
import {  vouchers_data, SharedIcons } from "@/utils";
import { VoucherCard } from '@/components/common';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, FreeMode, Grid } from "swiper";
import 'swiper/swiper-bundle.css';
const {  LeftOutlined, RightOutlined } = SharedIcons;


const VoucherList = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
    const [init, setInit] = useState<boolean>(false);
    return (
        <Card bodyStyle={{ padding: '10px' }} style={{ marginTop: "3rem 0" }} >
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
                            <VoucherCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Col>

        </Row>
    </Card>
    )
}
export default VoucherList