import React, { useState } from "react";
import {
  FaEdit,
  FaHome,
  FaShoppingCart,
  FaUserAlt,
  FaUserEdit,
  FaUsers,
  FaUtensilSpoon,
  FaWallet,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import DashboardNav from "../Shared/DashboardNav/DashboardNav";

const Dashboard = () => {
  const [cart] = useCart();
  const [isOpen, setIsOpen] = useState(true);

  const [isAdmin] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 min-h-screen ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar Header */}
        <div className='p-4'>
          <h1 className='text-2xl font-bold'>Bistro Boss</h1>
        </div>

        {isAdmin ? (
          <>
            <nav className='px-4 md:mt-5'>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to='/dashboard/adminhome'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700 '
                  >
                    <span>
                      <FaHome size={24} />
                    </span>{" "}
                    <span>Admin Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/additems'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span className='relative'>
                      <FaUtensilSpoon size={24} />
                      <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full'>
                        {cart.length}
                      </span>
                    </span>{" "}
                    <span>Add Items</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/adminprofile'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span>
                      <FaUserEdit size={24} />
                    </span>{" "}
                    <span>Manage Items</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/allusers'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span>
                      <FaUsers size={24} />
                    </span>{" "}
                    <span>All Users</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span>
                      <FaWallet size={24} />
                    </span>{" "}
                    <span>Payment History</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <hr className='my-5' />
            <DashboardNav></DashboardNav>
          </>
        ) : (
          <>
            <nav className='px-4 md:mt-5'>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to='/dashboard/userhome'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700 '
                  >
                    <span>
                      <FaHome size={24} />
                    </span>{" "}
                    <span>User Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/mycart'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span className='relative'>
                      <FaShoppingCart size={24} />
                      <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full'>
                        {cart.length}
                      </span>
                    </span>{" "}
                    <span>Cart</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/profile'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span>
                      <FaUserAlt size={24} />
                    </span>{" "}
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span>
                      <FaEdit size={24} />
                    </span>{" "}
                    <span>Setting</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span>
                      <FaWallet size={24} />
                    </span>{" "}
                    <span>Payment History</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <hr className='my-5' />
            <DashboardNav></DashboardNav>
          </>
        )}
      </div>
      {/* Main Content */}
      <div className='flex-grow'>
        {/* Toggle Button */}
        <button className='bg-gray-800 text-white p-2' onClick={toggleSidebar}>
          {isOpen ? `X` : "→"}
        </button>

        <Outlet></Outlet>
        {/* Content */}
        <div className='p-4'>
          {/* Your page content goes here */}
          <h2 className='text-2xl font-bold'></h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
