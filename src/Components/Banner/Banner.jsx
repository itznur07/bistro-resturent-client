import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1 from "../../../src/assets/home/01.jpg";
import banner2 from "../../../src/assets/home/02.jpg";
import banner3 from "../../../src/assets/home/03.png";
import banner4 from "../../../src/assets/home/04.jpg";
import banner5 from "../../../src/assets/home/05.png";

const Banner = () => {
  /** Slider settings */
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const imgSrc = [banner1, banner2, banner3, banner4, banner5];

  return (
    <>
      <Slider {...settings}>
        <div style={{height : "700px"}} className='overflow-hidden'>
          <img
            src={imgSrc[0]}
            alt='Banner 1'
            className='w-full object-cover'
            style={{ height: "600px" }}
          />
        </div>
        <div className='relative h-64 md:h-96'>
          <img
            src={imgSrc[1]}
            alt='Banner 2'
            className='w-full object-cover '
            style={{ height: "600px" }}
          />
        </div>
        <div className='relative h-64 md:h-96'>
          <img
            src={imgSrc[2]}
            alt='Banner 3'
            className='w-full object-cover'
            style={{ height: "600px" }}
          />
        </div>
        <div className='relative h-64 md:h-96'>
          <img
            src={imgSrc[3]}
            alt='Banner 3'
            className='w-full object-cover'
            style={{ height: "600px" }}
          />
        </div>
        <div className='relative h-64 md:h-96'>
          <img
            src={imgSrc[4]}
            alt='Banner 3'
            className='w-full object-cover'
            style={{ height: "600px" }}
          />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
