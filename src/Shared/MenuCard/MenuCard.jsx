import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className='flex items-center space-x-4'>
      <div>
        <img className='w-24 h-20 rounded-full' src={item.image} alt={item.name} />
      </div>
      <div>
        <p className="uppercase">{item.name}</p>
        <p>{item.recipe}</p>
      </div>
      <div className="text-yellow-500 font-medium">${item.price}</div>
    </div>
  );
};

export default MenuCard;
