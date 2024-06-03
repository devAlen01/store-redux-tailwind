import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  const addProduct = () => {
    let newProduct = {
      id: product.length ? product[product.length - 1].id + 1 : 1,
      name,
      imageUrl,
      price,
      description,
      rating: Math.floor(Math.random() * 5),
    };
    dispatch({ type: "CREATE_PRODUCT", payload: newProduct });
  };

  return (
    <div className=" flex justify-center items-center w-[600px] mx-auto mt-[100px] py-[40px] bg-[#f6f1f184] backdrop-filter: blur(4px) ">
      <div className="container">
        <h1 className="text-center text-xl text-gray-800 pb-6">Add Product</h1>
        <div className="relative z-0 w-full mb-5 group ">
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            type="text"
            name="image"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[tomato] focus:outline-none focus:ring-0 focus:border-blue-600  peer"
            placeholder=" "
          />
          <label
            htmlFor="image"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[tomato] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product image ...
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[tomato] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[tomato] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product name ...
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            name="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[tomato] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[tomato] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product description ...
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            name="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[tomato] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[tomato] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product price ...
          </label>
        </div>
        <div className="flex items-center justify-center pt-5">
          <button
            onClick={() => addProduct()}
            className="w-full border-spacing-2 bg-white py-[10px] px-[20px] text-xl text-gray-800 rounded-[10px] hover:bg-[tomato]"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
