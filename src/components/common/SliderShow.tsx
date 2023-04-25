import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/swiper-bundle.css'

type Props = {
  slideChildren: any;
  type: "slider" | "gallary";
  dataLeft?: any,
  dataShow?: any
};

const SliderShow = ({ slideChildren, type }: Props) => {
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
