import React from "react";

const Pagination = ({ handleNext, handlePrev }) => {
  return (
    <div>
      <nav className='flex items-center justify-center mt-4'>
        <ul className='flex space-x-2'>
          {/* Previous Page */}
          <li>
            <button onClick={handlePrev} className='py-2 px-3 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200'>
              Previous
            </button>
          </li>

          {/* Next Page */}
          <li>
            <button
              onClick={handleNext}
              className='py-2 px-3 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200'
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
