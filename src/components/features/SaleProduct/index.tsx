import { useState } from "react";
import { Col, Row, Button, Typography } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { SharedIcons, Products_data ,formatWord} from "@/utils";
import { Pagination, Navigation, A11y, FreeMode } from "swiper";
import CountDown  from "../CountDown";
import 'swiper/swiper-bundle.css'
import ProductCard from "@/components/common/ProductCard";

const { LeftOutlined, RightOutlined } = SharedIcons

const SaleProduct = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [init, setInit] = useState<boolean>(false);


  const SEVEN_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000; // Expires after 1 days!!!
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

  return (
    <div className="bg-[#faefec]">
        <div className=" my-[5rem] mx-[3rem] py-7">
        <Row align="middle" justify="space-between">
          <Col span={16}>
            <Row align="middle" justify="start" gutter={[16,16]}>
                <Col>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                  </span>
                </Col>
                <Col>
                    <Typography.Title level={2} className="inline-block">{formatWord("Sản phẩm khuyến mãi", "title")}</Typography.Title>
                </Col>
                <Col>
                    <CountDown  targetDate={dateTimeAfterSevenDays}/>
                </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row justify="end" gutter={[48, 16]}>
              <Col> <Button type="text" icon={<LeftOutlined />} ref={(node) => setPrevEl(node)}></Button> </Col>
              <Col> <Button type="text" icon={<RightOutlined />} ref={(node) => setNextEl(node)} ></Button> </Col>
            </Row>
          </Col>
        </Row>

        <div className="mt-[3rem]">
          <Swiper
            modules={[Navigation, Pagination, A11y, FreeMode]}
            spaceBetween={30}
            slidesPerView={5}
            navigation={{ prevEl, nextEl }}
            onInit={() => setInit(true)}
            freeMode={true}
          >
              {Products_data.map((item, index) => (
                  <SwiperSlide key={index}>
                      <ProductCard child={item}/>
                  </SwiperSlide>
              ))}
          </Swiper>

        </div>
        <div className="mt-[3rem] w-full grid place-content-center">
           <button className="w-[50rem] bg-slate-300 text-black font-bold p-3 outline-none border-none rounded cursor-pointer">Xem tất cả</button>
        </div> 
        </div>
    </div>
  )
}

export default SaleProduct