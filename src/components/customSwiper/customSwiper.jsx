// Import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export const CustomSwiper = ({imgList}) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1500, // 3 seconds delay
        disableOnInteraction: false, // Keeps autoplay active even after user interaction
      }}
      loop={true} // Ensures infinite looping
      spaceBetween={50}
      slidesPerView={2}
    >
      {imgList.map((img)=>(
        <SwiperSlide className=''>
          <div className='flex justify-center'>
           <img className='swiper-img' src={img} alt=''/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
