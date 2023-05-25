import React from "react";
import Featured from "../../Components/Featured/Featured";
import OrderOnline from "../../Components/OrderOnline/OderOnline";
import PopulerMenu from "../../Components/PopularMenu/PopulerMenu";
import Reviews from "../../Components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <OrderOnline></OrderOnline>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
