import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const { basket, favorite, rates } = useSelector((state) => state);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className="top-0 sticky z-20 bg-white/20 backdrop-filter backdrop-blur-lg  mx-auto w-[98%] rounded-b-[20px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link
          to="/"
          className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://cdn-images.himalayas.app/td2oa0a1takzl2l0lmid2ovf1y2v"
            className=" rounded-[50%] h-16"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            N-Market
          </span>
        </Link>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate("/search");
                  dispatch({ type: "SEARCH_PRODUCT", payload: searchValue });
                }
              }}
              onChange={(e) => setSearchValue(e.target.value)}
              onInput={(e) =>
                dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
              }
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm rounded-[10px]"
              placeholder="Search..21323."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <ul className="flex items-center justify-between w-[500px]  md:p-0 mt-4 font-medium ">
            <li>
              <NavLink
                to="/"
                className="py-2 px-3 text-black hover:text-[tomato]"
                aria-current="page"
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="py-2 px-3 text-black hover:text-[tomato]"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className="py-2 relative px-3 text-black hover:text-[tomato]"
              >
                Favorite
                {favorite.length ? (
                  <p className="top-[-3px] right-[-1px] absolute w-[20px] h-[20px] rounded-[50%] text-white text-center bg-red-700 text-[12px]">
                    {favorite.length}
                  </p>
                ) : null}
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/basket"
                className=" py-2  text-2xl text-black hover:text-[tomato]"
              >
                <FaCartShopping />
              </NavLink>
              {basket.length ? (
                <p className="top-[-13px] right-[-15px] absolute w-[20px] h-[20px] rounded-[50%] text-white text-center bg-red-700 text-[12px]">
                  {basket.length}
                </p>
              ) : null}
            </li>
            <li>
              <select
                onChange={(e) =>
                  dispatch({ type: "CHANGE_RATES", payload: e.target.value })
                }
                className="p-1 rounded-md"
              >
                <option value="usd">USD</option>
                <option value="rub">RUB</option>
                <option value="som">SOM</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
