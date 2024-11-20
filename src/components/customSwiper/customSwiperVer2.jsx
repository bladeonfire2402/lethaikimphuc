// Import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export const CustomSwiperVer2 = ({imgList}) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false, // Keeps autoplay active even after user interaction
      }}
      loop={true} // Ensures infinite looping
      spaceBetween={50}
      slidesPerView={1}
    >
      {imgList.map((img)=>(
        <SwiperSlide>
          <img src={img}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
