import React from "react";
import { FaHamburger, FaHome, FaMailBulk, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <nav className='px-4 md:mt-5'>
        <ul className='space-y-2'>
          <li>
            <Link
              to='/'
              className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700 '
            >
              <span>
                <FaHome size={24} />
              </span>{" "}
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to='/menu'
              className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700 '
            >
              <span>
                <FaHamburger size={24} />
              </span>{" "}
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link
              to='/shop'
              className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
            >
              <span>
                <FaShoppingBag size={24} />
              </span>{" "}
              <span>Shop</span>
            </Link>
          </li>
          <li>
            <Link
              to=''
              className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
            >
              <span>
                <FaMailBulk size={24} />
              </span>{" "}
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
