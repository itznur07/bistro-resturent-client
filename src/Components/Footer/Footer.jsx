import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-900 py-10'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='flex flex-wrap items-center justify-between'>
            {/* Left Section */}
            <div className='text-white'>
              <h4 className='text-lg font-semibold mb-2'>Contact</h4>
              <p className='text-sm'>
                Email:bostroboss@resturent.com
                <br />
                Phone: +123-456-7890
              </p>
            </div>

            {/* Right Section */}
            <div className='text-white'>
              <h4 className='text-lg font-semibold mb-2'>Follow us</h4>
              <p className='text-sm'> Join on social media</p>
              <div className='flex items-center space-x-2 mt-3'>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='text-white text-center py-3 bg-[#151515]'>
        @copyright- all right reserved by bristo boss resturent{" "}
      </div>
    </>
  );
};

export default Footer;
