import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='bg-white z-50'>
        <nav className='md:flex md:flex-row flex flex-col items-center justify-between flex-wrap py-6 max-w-7xl mx-auto'>
          {/* logo here */}
          <div className='flex items-center text-gray-500'>
            <Link to='/'>
              <div className='flex items-center text-2xl space-x-2'>
                <span className='font-bold'>Bistro Boss Res.</span>
              </div>
            </Link>
          </div>
          {/* navigation link here */}
          <div className='md:flex md:flex-row md:text-md flex flex-col items-center space-x-0 md:space-x-5'>
            <Link
              to='/'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Home
            </Link>
            <Link
              to='/contact'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Contact us
            </Link>
            <Link
              to='/dashboard'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Dashboard
            </Link>
            <Link
              to='/onemenu'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              One Menu
            </Link>
            <Link
              to='/oneshop'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              One Shop
            </Link>
            <Link
              to='/sign in'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
