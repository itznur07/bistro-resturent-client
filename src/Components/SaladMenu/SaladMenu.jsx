import React, { useEffect, useState } from "react";
import Button from "../../Shared/Button/Button";
import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import sectionImg from "../../assets/menu/salad-bg.jpg";

const SaladMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const saladMenu = data.filter((menu) => menu.category === "salad");
        setMenus(saladMenu);
      });
  }, []);

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <Cover
        img={sectionImg}
        heading='Salads'
        subheading='Some Salads Menu items'
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

export default SaladMenu;
