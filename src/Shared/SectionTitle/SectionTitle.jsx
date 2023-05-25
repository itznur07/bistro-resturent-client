import React from "react";

const SectionTitle = ({ heading, subheading, color }) => {
  return (
    <div className='text-center my-10 space-y-2'>
      <h1 className='text-xl text-yellow-600 font-medium'>
        ---{subheading}---
      </h1>
      <h1 className={`text-4xl uppercase text-${color}`}>{heading}</h1>
    </div>
  );
};

export default SectionTitle;
