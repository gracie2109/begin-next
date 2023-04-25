import { useState } from "react";
import { Col, Row, Button, Typography } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { SharedIcons, Products_data ,formatWord} from "@/utils";
import { Pagination, Navigation, A11y, FreeMode } from "swiper";
import 'swiper/swiper-bundle.css'

const { LeftOutlined, RightOutlined } = SharedIcons

const SaleProduct = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  // eslint-disable-next-line no-unused-vars
  const [init, setInit] = useState<boolean>(false);

  return (
    <div>
      <>
        <Row align="middle" justify="space-between">
          <Col span={8}>
            <Row >
                <Col>da</Col>
                <Col>
                    <Typography.Title>{formatWord("Sản phẩm khuyến mãi", "title")}</Typography.Title>
                </Col>
                <Col>
                    Timer
                </Col>
            </Row>
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
                {Products_data.map((item, index) => (
                    <SwiperSlide key={index}>
                        {index +1}
                    </SwiperSlide>
                ))}

          </Swiper>

        </div>

      </>
    </div>
  )
}

export default SaleProduct