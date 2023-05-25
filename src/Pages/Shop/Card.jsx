import React from "react";
import Button from "../../Shared/Button/Button";

const Card = ({ menu }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-96 mt-5'>
      <img
        src={menu.image}
        alt={menu.name}
        className='w-full h-56 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{menu.name}</h3>
        <p className='text-gray-600 mb-2'>Price: ${menu.price}</p>
        <div className='flex items-center justify-center'>
          <Button text='Add to cart'></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
