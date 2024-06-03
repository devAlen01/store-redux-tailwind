import React, { useState } from "react";
import { useSelector } from "react-redux";

const Details = () => {
  const { details } = useSelector((state) => state);
  const [showMore, setShowMore] = useState(100);
  return (
    <div className="">
      <div className="container">
        <div className="bg-slate-300 p-4 w-auto rounded-2xl flex justify-center items-center my-5 ">
          <div className="h-full w-full">
            <img
              className="rounded-2xl"
              src={details.imageUrl}
              alt="imgProduct"
            />
          </div>
          <div className="h-full flex flex-col justify-between w-full pl-3">
            <h2 className="text-2xl font-bold">{details.name}</h2>
            <p className="py-[33px] w-full">
              {details.description.slice(0, showMore)}
              {showMore < details.description.length ? (
                <span
                  className="cursor-pointer"
                  onClick={() => setShowMore(showMore + 200)}
                >
                  ... еще
                </span>
              ) : null}
            </p>

            <h3 className="text-xl font-bold">${details.price}</h3>
            <div className="pt-14 flex justify-center">
              <button
                className="block w-[200px] border-2 border-solid border-gray-600  select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
