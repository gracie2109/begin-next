import { useState, useRef } from "react";
import { Carousel, Col, Row, Space, Button } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { SharedIcons } from "@/utils/contants";
import ProductCard from "./ProductCard";
import { Pagination, Navigation, Autoplay, A11y, FreeMode } from "swiper";
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";


const { PlusOutlined, LeftOutlined, RightOutlined } = SharedIcons
type Props = {
  slideChildren: any;
  type: "slider" | "gallary";
  dataLeft?: any,
  dataShow?: any
};

const SliderShow = ({ slideChildren, type, dataLeft, dataShow }: Props) => {
  const swiper = useSwiper();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  const [_, setInit] = useState(false);

  return (
    <>
      {type && type === "slider" ? (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
        >
          {slideChildren && slideChildren.map((item: any, index: any) => (
            <SwiperSlide key={index} >
              <img src={item.url} className="object-fit" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          This is Thumb Sliders
        </>
      )}
    </>
  );
};

export default SliderShow;
