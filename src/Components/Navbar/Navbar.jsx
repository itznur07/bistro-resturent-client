import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [cart] = useCart();

  console.log(cart.length);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className='bg-white w-full z-50'>
        <nav className='md:flex md:flex-row flex flex-col items-center justify-between flex-wrap py-6 max-w-7xl mx-auto'>
          {/* logo here */}
          <div className='flex items-center text-gray-500'>
            <Link to='/'>
              <div className='flex items-center text-2xl space-x-2'>
                <span className='font-bold uppercase'>Bistro Boss Res.</span>
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
              to='/menu'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Menu
            </Link>
            <Link
              to='/shop'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Shop
            </Link>
            <Link
              to='/dashboard'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Dashboard
            </Link>
            <Link
              to='/secret'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Secret
            </Link>
            <Link
              to='/contact'
              className='block md:inline-block text-md px-4 py-2 leading-none text-gray-800 hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 md:mt-0'
            >
              Contact us
            </Link>
            <Link to='/mycart' className='relative'>
              <FiShoppingBag className='text-gray-500' size={24} />
              <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full'>
                {cart.length}
              </span>
            </Link>
            {user?.email ? (
              <button
                onClick={handleLogout}
                className='block md:inline-block text-md px-4 py-2.5 font-medium  leading-none text-white bg-[#ffb152] rounded mt-4 md:mt-0'
              >
                Logout
              </button>
            ) : (
              <Link
                to='/login'
                className='block md:inline-block text-md px-4 py-2.5 font-medium  leading-none text-white bg-[#ffb152] rounded mt-4 md:mt-0'
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
