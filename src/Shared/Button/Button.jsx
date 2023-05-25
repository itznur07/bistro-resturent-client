import React from "react";

const Button = ({ text }) => {
  return (
    <button className='inline-block px-6 py-3 m-4 text-white bg-yellow-500 rounded hover:bg-yellow-600 font-menium uppercase focus:outline-none'>
      {text}
    </button>
  );
};

export default Button;
