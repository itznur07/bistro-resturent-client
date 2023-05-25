import React, { useEffect, useState } from "react";
import Button from "../../Shared/Button/Button";
import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import sectionImg from "../../assets/menu/dessert-bg.jpeg";

const DessertMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const dessertMenu = data.filter((menu) => menu.category === "dessert");
        setMenus(dessertMenu);
      });
  }, []);

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <Cover
        img={sectionImg}
        heading='Desserts'
        subheading='Some Desserts Menu items'
        size='3xl'
      ></Cover>
      <div className='grid grid-cols-2 mb-5 gap-10'>
        {menus?.slice(0, 6).map((menu) => (
          <MenuCard key={menu._id} item={menu}></MenuCard>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <Button text='Order now'></Button>
      </div>
    </div>
  );
};

export default DessertMenu;
