import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img1 from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='relative '>
        <img
          src={img1}
          alt='Banner Image'
          class='w-full '
          style={{ height: "700px" }}
        />
        <div class='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
        <div className="absolute top-0 left-96 ml-36">
          <SectionTitle
            heading='Featured'
            subheading='From our menu'
            color="white"
          ></SectionTitle>
        </div>
        <div className='absolute top-1/3 flex items-center left-1/4 space-x-10'>
          <img className='w-96 shadow rounded' src={img1} alt='img-not-found' />
          <div className='space-y-3'>
            {" "}
            <p className='text-white text-md'>March 20, 2023</p>
            <p className='text-white text-xl uppercase'>
              Where can i get some?
            </p>
            <p className='text-white text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Vero, perspiciatis.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <button className='bg-yellow-400 text-white font-medium p-2 px-4 rounded'>
              Get more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
