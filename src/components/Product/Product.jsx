import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [productSale, setProductSale] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const changePrice = () => {
    dispatch({ type: "CHANGE_PRICE", payload: productPrice });
    dispatch({ type: "CHANGE_SALE", payload: productSale });
    setModal(false);
    setProductPrice("");
    setProductSale("");
  };

  return (
    <div className="container">
      <div className="text-end  mt-4">
        <button
          onClick={() => setModal(true)}
          className="p-3 bg-white rounded-lg hover:bg-red-600"
        >
          Change sale
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-[27px]">
        {product.map((el, index) => (
          <ProductCard el={el} key={index} />
        ))}
      </div>

      {modal ? (
        <div className="w-[650px] h-[460px] bg-slate-600/90 backdrop-blur-md rounded-xl fixed top-[30%] right-[30%]">
          <div className="text-end">
            <button
              onClick={() => setModal(false)}
              className="bg-red-600 text-center m-2 p-1 text-white rounded"
            >
              Close
            </button>
          </div>
          <div className="w-[400px] flex flex-col justify-center items-center mx-auto my-[15vh] gap-7 ">
            <div className="relative z-0 w-full mb-5 group ">
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
                type="text"
                name="image"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-[tomato] focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-[tomato] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Product price
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setProductSale(e.target.value)}
                value={productSale}
                type="text"
                name="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-[tomato] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[tomato] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sale
              </label>
            </div>
            <button
              onClick={changePrice}
              className="px-[20px] py-3 bg-slate-500 rounded-lg"
            >
              Change
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
