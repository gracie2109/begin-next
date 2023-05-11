import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, FreeMode, Thumbs } from "swiper";
import 'swiper/swiper-bundle.css'

type Props = {
  slideChildren?: any;
  type: "slider" | "gallary";
  dataLeft?: any,
  dataShow?: any
};

export const SliderShow = ({ slideChildren, type }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
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
              <img src={item} className="object-fit" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {slideChildren && slideChildren.map((item: any, index: any) => (
              <SwiperSlide key={index} >
                <img src={item} className="object-fit" />
              </SwiperSlide>
          ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={5}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs,Pagination]}
            className="mySwiper_thumb"
            style={{maxHeight: "5rem", overflow:"hidden"}}
          >
            {slideChildren && slideChildren.map((item: any, index: any) => (
              <SwiperSlide key={index}  className="swiper_slide_custom">
                <img src={item} className="object-fit" style={{width: "5rem",overflow: "hidden"}} />
              </SwiperSlide>
          ))}
          </Swiper>
        </>
      )}
    </>
  );
};

