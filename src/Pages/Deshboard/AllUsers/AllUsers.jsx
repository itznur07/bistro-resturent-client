import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  });

  const handleMakeAdmin = (id) => {
    Swal.fire({
      position: "top-center",
      icon: "question",
      title: "Are you sure to make admin?",
      showConfirmButton: true,
      showCancelButton: true,
      timer: 2000,
    }).then((result) => {
      if (result.isConfirmed) { 
        fetch(`http://localhost:3000/users/admin/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              alert("Admin role added");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro - Manage Users</title>
      </Helmet>

      {/* For Cart Page Headings here  */}
      <div className='flex items-center justify-between container mx-auto p-4 uppercase'>
        <h1 className="text-md font-medium">Total Users: {users.length}</h1>
      </div>
      {/* For Cart Page Headings ends here */}

      {/* Tableuer Cart Content here */}
      <div className='container mx-auto p-4 text-sm font-medium'>
        {users?.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty.</p>
        ) : (
          <table className='min-w-full bg-white border border-gray-300'>
            <thead className='bg-[#D1A054]'>
              <tr className=''>
                <th className='py-2 px-4 border-b'>No.</th>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Email</th>
                <th className='py-2 px-4 border-b'>Role</th>
                <th className='py-2 px-4 border-b'>Actoin</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index}>
                  <td className='py-2 px-4 border-b'>{index + 1}</td>
                  <td className='py-2 px-4 border-b'>
                    <p>{user.name}</p>
                  </td>
                  <td className='py-2 px-4 border-b'>{user.email}</td>
                  <td className='py-2 px-4 border-b'>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button onClick={() => handleMakeAdmin(user._id)}>
                        <FaUserShield
                          size={24}
                          className='hover:text-slate-500 cursor-pointer'
                        ></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    <button
                      className='text-red-500 hover:text-red-700'
                      onClick={() => removeFromCart(user._id)}
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

export default AllUsers;
