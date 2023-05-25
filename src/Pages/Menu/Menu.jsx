import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import DessertMenu from "../../Components/DessertsMenu/DessertsMenu";
import PizzaMenu from "../../Components/PizzaMenu/PizzaMenu";
import SaladMenu from "../../Components/SaladMenu/SaladMenu";
import TodaysOffer from "../../Components/TodaysOffer/TodaysOffer";
import pageCover from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Helmet>
        <title>Bistro Boss - Menu</title>
      </Helmet>
      <Cover
        img={pageCover}
        heading='Our Menu'
        subheading='This is menu page'
        size='5xl'
      ></Cover>
      <TodaysOffer></TodaysOffer>
      <DessertMenu></DessertMenu>
      <PizzaMenu></PizzaMenu>
      <SaladMenu></SaladMenu>
    </div>
  );
};

export default Menu;
