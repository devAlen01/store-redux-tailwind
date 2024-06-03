import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { favorite, sale, priceSale, basket, rates } = useSelector(
    (state) => state
  );

  let someFav = favorite.some((some) => some.id === el.id);
  let someBasket = basket.some((someBas) => someBas.id === el.id);

  return (
    <div className="relative">
      <div className="relative flex w-80 flex-col justify-between h-[500px] rounded-xl bg-white hover:bg-green-400 hover:text-black transition ease-in-out duration-300 bg-clip-border text-gray-700 shadow-md mt-[30px]">
        <div className=" mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 flex justify-center">
          <span
            onClick={() => dispatch({ type: "DELETE", payload: el.id })}
            className="absolute cursor-pointer top-[-3px] right-[-3px] p-2 text-white bg-red-700 rounded-[100%] "
          >
            <IoCloseOutline />
          </span>
          <img
            src={el.imageUrl}
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>
        {el.price > priceSale && priceSale && sale ? (
          <img
            // lenta sale
            className="absolute top-[-12px] right-[40.9px]"
            width={290}
            src="https://png.klev.club/uploads/posts/2024-04/png-klev-club-yz0e-p-lenta-rasprodazha-png-25.png"
            alt="sale"
          />
        ) : null}

        <div className="p-3 cursor-pointer">
          <div className=" mb-2 flex items-center justify-between">
            <p
              onClick={() => {
                dispatch({ type: "DETAILS", payload: el });
                nav("/details");
              }}
              className="block font-sans text-wrap w-[240px] font-medium leading-relaxed text-blue-gray-900 antialiased"
            >
              {el.name.slice(0, 33)}
            </p>

            <div className="">
              {el.price > priceSale && priceSale && sale ? (
                <p className="block font-sans line-through text-center text-[14px] font-bold  leading-relaxed rounded-md  bg-red-600 text-white antialiased px-[10px]">
                  {Math.floor(el.price * rates)}
                </p>
              ) : null}

              <p className="block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased ">
                $
                {el.price > priceSale
                  ? Math.floor(el.price * rates - (el.price / 100) * sale)
                  : Math.floor(el.price * rates)}
              </p>
            </div>
          </div>
          <p className=" flex justify-evenly items-center font-sans text-sm font-normal leading-normal antialiased opacity-75">
            {el.description.slice(0, 97)} ...
          </p>

          <div className="flex justify-between items-center">
            <div className="flex">
              <div
                className="rating"
                style={{ background: el.rating >= 1 ? "gold" : "gray" }}
              ></div>
              <div
                className="rating"
                style={{ background: el.rating >= 2 ? "gold" : "gray" }}
              ></div>
              <div
                className="rating"
                style={{ background: el.rating >= 3 ? "gold" : "gray" }}
              ></div>
              <div
                className="rating"
                style={{ background: el.rating >= 4 ? "gold" : "gray" }}
              ></div>
              <div
                className="rating"
                style={{ background: el.rating >= 5 ? "gold" : "gray" }}
              ></div>
              <span className="bg-slate-300 rounded text-sm mx-1 px-1">
                {el.rating}.0
              </span>
            </div>

            <span
              style={{ color: someFav ? "red" : "gray" }}
              onClick={() => dispatch({ type: "ADD_TO_FAVORITE", payload: el })}
              className="flex justify-end text-[23px] mx-4 cursor-pointer "
            >
              <FaHeart />
            </span>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={() =>
              someBasket
                ? nav("/basket")
                : dispatch({ type: "ADD_TO_CART", payload: el })
            }
            className={`block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase ${
              someBasket ? "text-red-600" : "text-blue-gray-900"
            } transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            type="button"
          >
            {someBasket ? "Go" : "Add"} to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
