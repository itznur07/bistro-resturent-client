import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

/** Images for swiper  slider */
import s1 from "../../assets/home/slide1.jpg";
import s2 from "../../assets/home/slide2.jpg";
import s3 from "../../assets/home/slide3.jpg";
import s4 from "../../assets/home/slide4.jpg";
import s5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

SwiperCore.use([Navigation, Pagination]);

const OrderOnline = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <SectionTitle
        heading='from 11am-10pm'
        subheading='Order Online'
      ></SectionTitle>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div>
            <img
              src={s1}
              alt='Image 1'
              className='w-full h-auto relative hover:scale-105 transition ease-linear duration-150 cursor-pointer '
            />
            <h2 className='text-2xl font-medium text-gray-200  absolute left-1/3 bottom-5'>
              SALADS
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={s2}
              alt='Image 2'
              className='w-full h-auto relative hover:scale-105 transition ease-linear duration-150 cursor-pointer'
            />
            <h2 className='text-2xl font-medium text-gray-200  absolute left-1/3 bottom-5'>
              SOUPS
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={s3}
              alt='Image 3'
              className='w-full h-auto relative hover:scale-105 transition ease-linear duration-150 cursor-pointer'
            />
            <h2 className='text-2xl font-medium text-gray-200  absolute left-1/3 bottom-5'>
              PIZZAS
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={s4}
              alt='Image 4'
              className='w-full h-auto relative hover:scale-105 transition ease-linear duration-150 cursor-pointer'
            />
            <h2 className='text-2xl font-medium text-gray-200  absolute left-1/3 bottom-5'>
              DESSERTS
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={s5}
              alt='Image 4'
              className='w-full h-auto relative hover:scale-105 transition ease-linear duration-150 cursor-pointer'
            />
            <h2 className='text-2xl font-medium text-gray-200  absolute left-1/3 bottom-5'>
              SALADS
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderOnline;
