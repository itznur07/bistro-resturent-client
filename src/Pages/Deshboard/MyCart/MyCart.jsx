import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  // Remove from cart action
  const removeFromCart = (_id) => {
    fetch(`http://localhost:3000/carts/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("item deleted from cart ");
        console.log(data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro - My Cart</title>
      </Helmet>

      {/* For Cart Page Headings here  */}
      <div className='flex items-center justify-between container mx-auto p-4 uppercase'>
        <h1>Total Order: {cart.length}</h1>
        <h1>Total Price: ${total}</h1>
        <button className='px-4 py-2 bg-[#D1A054] rounded text-white'>
          Pay
        </button>
      </div>
      {/* For Cart Page Headings ends here */}

      {/* Tableuer Cart Content here */}
      <div className='container mx-auto p-4 text-sm font-medium'>
        {cart.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty.</p>
        ) : (
          <table className='min-w-full bg-white border border-gray-300'>
            <thead className='bg-[#D1A054]'>
              <tr className=''>
                <th className='py-2 px-4 border-b'>No.</th>
                <th className='py-2 px-4 border-b'>Image</th>
                <th className='py-2 px-4 border-b'>Item</th>
                <th className='py-2 px-4 border-b'>Price</th>
                <th className='py-2 px-4 border-b'></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className='py-2 px-4 border-b'>{index + 1}</td>
                  <td className='py-2 px-4 border-b'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-16 h-16 object-cover'
                    />
                  </td>
                  <td className='py-2 px-4 border-b'>{item.name}</td>
                  <td className='py-2 px-4 border-b'>${item.price}</td>
                  <td className='py-2 px-4 border-b'>
                    <button
                      className='text-red-500 hover:text-red-700'
                      onClick={() => removeFromCart(item._id)}
                    >
                      <FaTrash size={16}></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Tableuer Cart Content ends here */}
    </div>
  );
};

export default MyCart;
