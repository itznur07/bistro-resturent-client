import React, { useEffect, useState } from "react";
import Button from "../../Shared/Button/Button";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const TodaysOffer = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        const offeredMenu = data.filter((menu) => menu.category === "offered");
        setMenus(offeredMenu);
      });
  }, []);

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <SectionTitle
        heading='Todays offer'
        subheading='Dont miss'
      ></SectionTitle>

      <div className='grid grid-cols-2 mb-8 gap-10'>
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

export default TodaysOffer;
