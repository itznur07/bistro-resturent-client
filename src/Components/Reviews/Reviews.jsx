import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
SwiperCore.use([Navigation, Pagination]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-16">
      <SectionTitle
        heading='Testimonials'
        subheading='What our client say'
      ></SectionTitle>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {reviews?.map((review) => (
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center space-y-5 my-10">
                <div className='flex items-center space-x-4 text-xl text-yellow-500'>
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
                <div>
                  <FaQuoteLeft size={72} />
                </div>
                <div>
                  <p className="text-center mx-10">{review.details}</p>
                </div>
                <div>
                  <p className="text-xl uppercase font-medium">{review.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
