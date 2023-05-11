import { useState, useEffect } from "react";
import {  Col, Row, Button, Typography, Grid } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { SharedIcons, Category_data ,formatWord} from "@/utils";
import { Pagination, Navigation, A11y, FreeMode } from "swiper";
import 'swiper/swiper-bundle.css';
import Link from "next/link";
const { useBreakpoint } = Grid;

const {  LeftOutlined, RightOutlined, FaArrowRight } = SharedIcons

const Category = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [init, setInit] = useState(false);
  const screens = useBreakpoint();


  return (
    <div>
      <>
        <Row align="middle" justify="space-between" >
          <Col span={8} xs={12}>
           <Typography.Title 
             data-aos="fade-right" 
             data-aos-offset="300"  
             data-aos-easing="ease-in-sine"
             level={screens.xs ? 4 : 1}
             >Danh mục nổi bật</Typography.Title>
          </Col>
          <Col span={8} xs={12}>
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
            slidesPerView={screens.xs ? 1 : 4}
            navigation={{ prevEl, nextEl }}
            onInit={() => setInit(true)}
            freeMode={true}
            className="mobile:hidden tablet:block"
          >

            {Category_data.map((item, index) => (
              <SwiperSlide className="res-slide" key={index} style={{ marginTop: "1rem" }}>
                <div className=" relative w-full h-full max-w-[332px] max-h-[449px]">
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[5rem] backdrop-sepia-0 bg-white/60">
                  <Link href={item.name} className=" block  mt-[1.5rem]">
                    <Row justify="space-around" align="middle" >
                      <Col>
                        <Typography.Title level={screens.xs ? 5: 4}  >{formatWord(item.name, "title")}</Typography.Title>
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