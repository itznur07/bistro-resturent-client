import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover/Cover";
import Pagination from "../../Shared/Pagination/Pagination";
import pageCover from "../../assets/shop/banner2.jpg";
import Card from "./Card";

const Shop = () => {
  const [salad, setSalad] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [soup, setSoup] = useState([]);
  const [drink, setDrink] = useState([]);
  const [limitStart, setLimitStart] = useState(0);
  const [limitEnd, setLimitEnd] = useState(6);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        // Data Filtering
        const salad = data.filter((menu) => menu.category === "salad");
        const dessert = data.filter((menu) => menu.category === "dessert");
        const pizza = data.filter((menu) => menu.category === "pizza");
        const soup = data.filter((menu) => menu.category === "soup");
        const drink = data.filter((menu) => menu.category === "drinks");

        // Set Data
        setSalad(salad);
        setDessert(dessert);
        setPizza(pizza);
        setSoup(soup);
        setDrink(drink);
      });
  }, []);

  const handleNext = (len) => {
    if (len >= limitEnd) {
      setLimitStart(limitEnd);
      setLimitEnd(len - limitEnd + len);
    }
  };

  const handlePrev = (len) => {
    setLimitStart(0);
    setLimitEnd(6);
  };

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <Helmet>
        <title>Bistro Boss - Shop</title>
      </Helmet>
      <Cover
        img={pageCover}
        heading='Our Shop'
        subheading='This is our Shop'
        size='5xl'
      ></Cover>

      <Tabs>
        <TabList className='flex flex-col justify-center md:flex-row'>
          <Tab className='mr-4 mb-4 md:mb-0 bg-[#f3f2f2] p-2 border rounded-sm cursor-pointer'>
            Salads
          </Tab>
          <Tab className='mr-4 mb-4 md:mb-0 bg-[#f3f2f2] p-2 border rounded-sm cursor-pointer'>
            Desserts
          </Tab>
          <Tab className='mr-4 mb-4 md:mb-0 bg-[#f3f2f2] p-2 border  rounded-sm cursor-pointer'>
            Pizzas
          </Tab>
          <Tab className='mr-4 mb-4 md:mb-0 bg-[#f3f2f2] p-2 border  rounded-sm cursor-pointer'>
            Soups
          </Tab>
          <Tab className='mr-4 mb-4 md:mb-0 bg-[#f3f2f2] p-2 border  rounded-sm cursor-pointer'>
            Drinks
          </Tab>
        </TabList>

        <TabPanel>
          {/* Render toys for salad category */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {salad?.slice(limitStart, limitEnd).map((menu) => (
              <Card className='toy' key={menu._id} menu={menu} />
            ))}
          </div>
          <Pagination
            handleNext={() => handleNext(salad.length)}
            handlePrev={() => handlePrev(salad.length)}
          >
            {" "}
          </Pagination>
        </TabPanel>

        <TabPanel>
          {/* Render toys for dessert category */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {dessert?.slice(limitStart, limitEnd).map((menu) => (
              <Card className='toy' key={menu._id} menu={menu} />
            ))}
          </div>
          <Pagination
            handleNext={() => handleNext(dessert.length)}
            handlePrev={() => handlePrev(dessert.length)}
          >
            {" "}
          </Pagination>
        </TabPanel>

        <TabPanel>
          {/* Render toys for pizza category */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {pizza?.slice(limitStart, limitEnd).map((menu) => (
              <Card className='toy' key={menu._id} menu={menu} />
            ))}
          </div>
          <Pagination
            handleNext={() => handleNext(pizza.length)}
            handlePrev={() => handlePrev(pizza.length)}
          >
            {" "}
          </Pagination>
        </TabPanel>

        <TabPanel>
          {/* Render toys for soup category */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {soup?.slice(limitStart, limitEnd).map((menu) => (
              <Card className='toy' key={menu._id} menu={menu} />
            ))}
          </div>
          <Pagination
            handleNext={() => handleNext(soup.length)}
            handlePrev={() => handlePrev(soup.length)}
          >
            {" "}
          </Pagination>
        </TabPanel>

        <TabPanel>
          {/* Render toys for drinks category */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {drink?.slice(limitStart, limitEnd).map((menu) => (
              <Card className='toy' key={menu._id} menu={menu} />
            ))}
          </div>
          <Pagination
            handleNext={() => handleNext(drink.length)}
            handlePrev={() => handlePrev(drink.length)}
          >
            {" "}
          </Pagination>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
