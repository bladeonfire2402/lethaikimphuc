// Import Swiper core and required modules
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export const CustomSwiperVer3 = ({imgList,time}) => {
  return (
    <Swiper
      modules={[Autoplay,EffectFade]}
      autoplay={{
        delay: time, 
        disableOnInteraction: false, // Keeps autoplay active even after user interaction
      }}
      effect={'fade'}
      loop={true} // Ensures infinite looping
      spaceBetween={50}
      slidesPerView={1}
    >
      {imgList.map((img)=>(
        <SwiperSlide>
          <img src={img} alt=''/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
