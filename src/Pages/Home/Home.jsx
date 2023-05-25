import React from "react";
import Featured from "../../Components/Featured/Featured";
import OrderOnline from "../../Components/OrderOnline/OderOnline";
import PopulerMenu from "../../Components/PopularMenu/PopulerMenu";

const Home = () => {
  return (
    <div>
      <OrderOnline></OrderOnline>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
