import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
