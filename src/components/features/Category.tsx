import { useState, useRef } from "react";
import { Carousel, Col, Row, Space, Button, Typography } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { SharedIcons } from "@/utils/contants";
import { Pagination, Navigation, Autoplay, A11y, FreeMode } from "swiper";
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";


const { PlusOutlined, LeftOutlined, RightOutlined } = SharedIcons

type Props = {}

const Category = (props: Props) => {
  const swiper = useSwiper();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  const [_, setInit] = useState(false);
  return (
    <div>
      <Typography.Title>Danh mục nổi bật</Typography.Title>
      <>
          <Row align="middle" justify="space-between">
            <Col span={8}>
                Left data
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
              slidesPerView="auto"
              navigation={{ prevEl, nextEl }}
              onInit={() => setInit(true)}
            >
              <SwiperSlide className="res-slide" >
                <div className="category_slide">
                            ssS
                </div>
              </SwiperSlide>
             
            </Swiper>

          </div>
      
        </>
    </div>
  )
}

export default Category