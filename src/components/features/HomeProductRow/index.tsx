import { useState } from "react";
import { Col, Row, Button, Typography, Grid } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { SharedIcons, Products_data, formatWord } from "@/utils";
import { Pagination, Navigation, A11y, FreeMode } from "swiper";
import CountDown from "../CountDown";
import 'swiper/swiper-bundle.css'
import ProductCard from "@/components/common/ProductCard";
const { useBreakpoint } = Grid;
const { LeftOutlined, RightOutlined } = SharedIcons
type variantSlide = "SLIDER" | "LIST";
import Link from "next/link";

type Props = {
  data:any,
  title:any,
  showTimer:boolean,
  type :variantSlide
}

const HomeProductRow = ({ data,  title,showTimer,type}:Props) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [init, setInit] = useState<boolean>(false);
  const screens = useBreakpoint();

  const SEVEN_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000; // Expires after 1 days!!!
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

  return (

      <div className={`my-[5rem] ${!screens.xs? "mx-[3rem]" : "mx-[10px]"} py-7 `}>
        <Row align="middle" justify="space-between" wrap className="grid_cus">
          <Col  xs={24} sm={18}>
            <Row align="middle" justify="start" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
              <Row align="middle" justify="start" gutter={4}>
              <Col>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
              </Col>
              <Col>
                <Typography.Title
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                level={screens.xs ? 4: 1}
                className="inline-block">{formatWord(title, "title")}</Typography.Title>
              </Col>
              </Row>

              </Col>
              {
                showTimer && (
                      <Col>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <CountDown targetDate={dateTimeAfterSevenDays} />
                        </div>
                      </Col>
                  )
              }
            </Row>
          </Col>
          {type === "SLIDER" && (
              <Col  xs={24} sm={4}>
                <Row justify="end" gutter={[48, 16]}>
                  <Col> <Button type="text" icon={<LeftOutlined />} ref={(node) => setPrevEl(node)}></Button> </Col>
                  <Col> <Button type="text" icon={<RightOutlined />} ref={(node) => setNextEl(node)} ></Button> </Col>
                </Row>
              </Col>
          )}
        </Row>

          <div className="mt-[3rem]">
            {type === "SLIDER" ? (
                <Swiper
                    modules={[Navigation, Pagination, A11y, FreeMode]}
                    slidesPerView={(screens.xs) ? 2 : 6 }
                    navigation={{ prevEl, nextEl }}
                    onInit={() => setInit(true)}
                    freeMode={true}
                >
                  <Row>
                    {Products_data.map((item, index) => (
                        <SwiperSlide key={index}>
                          <ProductCard child={item} key={index} />
                        </SwiperSlide>
                    ))}
                  </Row>
                </Swiper>
            ):(
                  <>
                    <Row justify="space-around" >
                      {Products_data.slice(0,12).map((item, index) => (
                          <Col xs={12} md={4}  key={index}><ProductCard child={item} key={index}  /></Col>
                      ))}
                    </Row>
                  </>
            )}
          </div>
        <div className="mt-[3rem] w-full grid place-content-center">

          <button className="min-w-[300px] bg-black text-slate-100  p-3 outline-none border-none rounded cursor-pointer" >
            <Link href='/product' style={{color: "white"}}>Xem tất cả</Link>
          </button>
        </div>
      </div>

  )
}

export default HomeProductRow