import { useState } from "react";
import {  Col, Row, Button, Typography } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { SharedIcons, Category_data ,formatWord} from "@/utils";
import { Pagination, Navigation, A11y, FreeMode } from "swiper";
import 'swiper/swiper-bundle.css'
import Link from "next/link";


const {  LeftOutlined, RightOutlined, FaArrowRight } = SharedIcons

const Category = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  // eslint-disable-next-line no-unused-vars
  const [init, setInit] = useState(false);

  return (
    <div>
      <>
        <Row align="middle" justify="space-between">
          <Col span={8}>
            <Typography.Title>Danh mục nổi bật</Typography.Title>
          </Col>
          <Col span={8}>
            <Row justify="end" gutter={[48, 16]}>
              <Col> <Button type="text" icon={<LeftOutlined />} ref={(node) => setPrevEl(node)}></Button> </Col>
              <Col> <Button type="text" icon={<RightOutlined />} ref={(node) => setNextEl(node)} ></Button> </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <Swiper
            modules={[Navigation, Pagination, A11y, FreeMode]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{ prevEl, nextEl }}
            onInit={() => setInit(true)}
            freeMode={true}
          >

            {Category_data.map((item, index) => (
              <SwiperSlide className="res-slide" key={index} style={{ marginTop: "1rem" }}>
                <div className=" relative w-full h-full max-w-[332px] max-h-[449px]">
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[5rem] bg-slate-100 opacity-[0.6]">
                  <Link href={item.name} className="opacity-1 block text-black opacity-1 mt-[1.5rem]">
                    <Row justify="space-around" align="middle" >
                      <Col>
                        <Typography.Title level={4}  >{formatWord(item.name, "title")}</Typography.Title>
                      </Col>
                      <Col>
                        <Button type="text" icon={<FaArrowRight />}></Button>
                      </Col>
                    </Row>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </>
    </div>
  )
}

export default Category