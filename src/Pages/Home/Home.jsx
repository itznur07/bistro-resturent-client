import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/Featured/Featured";
import OrderOnline from "../../Components/OrderOnline/OderOnline";
import PopulerMenu from "../../Components/PopularMenu/PopulerMenu";
import Reviews from "../../Components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Home</title>
      </Helmet>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
