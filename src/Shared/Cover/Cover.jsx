import React from "react";

const Cover = ({ img, heading, subheading, size }) => {
  return (
    <div className='relative mb-10'>
      <img
        style={{ height: "500px" }}
        className='w-full object-cover'
        src={img}
        alt=''
      />
      <div
        style={{ width: "500px" }}
        class='absolute top-1/3 left-1/3 p-5 h-56 bg-black opacity-70'
      >
        <div className='text-center mt-14 space-y-3 z-30'>
          <h1 className={`text-white font-bold uppercase text-${size}`}>
            {heading}
          </h1>
          <p className='text-white text-md font-menium uppercase'>
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
