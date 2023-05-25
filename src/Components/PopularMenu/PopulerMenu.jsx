import React, { useEffect, useState } from "react";
import Button from "../../Shared/Button/Button";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PopulerMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((menu) => menu.category === "popular");
        setMenus(popularMenu);
      });
  }, []);

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <SectionTitle
        heading='Popular Menu'
        subheading='From our menu'
      ></SectionTitle>

      <div className='grid grid-cols-2 mb-5 gap-10'>
        {menus?.map((menu) => (
          <MenuCard key={menu._id} item={menu}></MenuCard>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <Button text='Order now'></Button>
      </div>
    </div>
  );
};

export default PopulerMenu;
