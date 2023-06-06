import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHosingTokenKey = import.meta.env.VITE_img_hosting_api_key;
  const imgHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHosingTokenKey}`;

  const handleAddItems = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imgHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, details } = data;

          const newItem = {
            name,
            price: parseFloat(price),
            category,
            details,
            image: imgUrl,
          };

          fetch("http://localhost:3000/menu", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                alert("item added successfully");
              }
            });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro - Add items</title>
      </Helmet>
      <SectionTitle
        heading='Add Items'
        subheading='Add items in your database'
        color='black'
      ></SectionTitle>

      <div className='flex justify-center mt-16'>
        <div>
          <form
            onSubmit={handleSubmit(handleAddItems)}
            className='bg-white rounded  max-w-5xl '
          >
            <div className='mb-2'>
              <label
                htmlFor='name'
                className='block text-gray-700 font-bold mb-2'
              >
                Recipe Name
              </label>
              <input
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                name='name'
                type='text'
                {...register("name", { required: true })}
                placeholder='Enter name'
                required
              />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='mb-4'>
                <label
                  htmlFor='date'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Category
                </label>
                <select
                  id='category'
                  {...register("category", { required: true })}
                  className='w-full px-4 py-2 text-gray-700 border border-gray-300 rounded'
                  // value={selectedCategory}
                  // onChange={handleCategoryChange}
                >
                  <option value=''>Category</option>
                  <option value='salad'>Salad</option>
                  <option value='pizza'>Pizza</option>
                  <option value='deseart'>Deseart</option>
                  <option value='soup'>Soup</option>
                  <option value='drink'>Drink</option>
                </select>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='price'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Price
                </label>
                <input
                  className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='price'
                  name='price'
                  type='price'
                  {...register("price", { required: true })}
                />
              </div>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='details'
                className='block text-gray-700 font-bold mb-2'
              >
                Recipe Details
              </label>
              <textarea
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='details'
                name='details'
                rows={6}
                {...register("details", { required: true })}
                type='text'
                placeholder='write recipe details...'
              />
            </div>
            {/* file upload */}
            <div className='mt-4 mb-3'>
              <label
                className='block mb-2 font-medium text-gray-700'
                htmlFor='image'
              >
                Choose File
              </label>
              <input
                {...register("image", { required: true })}
                id='image'
                type='file'
                className=''
                // onChange={handleFileChange}
              />
            </div>
            {/* Submit button */}
            <div className='flex items-center justify-between '>
              <button
                className='bg-[#e2cc4a] hover:bg-[#ff3800] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
