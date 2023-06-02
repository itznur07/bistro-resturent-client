import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../Providers/AuthProviders";
import Button from "../../Shared/Button/Button";

const Card = ({ menu }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  /** Handle Add To Cart */
  const handleAddToCart = (menu) => {
    const { _id, name, image, recipe, price } = menu;

    /** Api Systems for Post Data using Fetch */
    if (user && user.email) {
      const cartItem = {
        manuId: _id,
        name,
        price,
        image,
        email: user.email,
        recipe,
      };

      fetch(`http://localhost:3000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Menu added to carts successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "please login to order the menu",
        showConfirmButton: true,
        showCancelButton: true,
        timer: 2000,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-96 mt-5'>
      <img
        src={menu.image}
        alt={menu.name}
        className='w-full h-56 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{menu.name}</h3>
        <p className='text-gray-600 mb-2'>Price: ${menu.price}</p>
        <div className='flex items-center justify-center'>
          <div onClick={() => handleAddToCart(menu)}>
            <Button text='Add to cart'></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
