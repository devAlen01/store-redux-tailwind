import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Favorite = () => {
  const { favorite } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {favorite.length ? (
        <div className="my-8 ">
          <div className="flex flex-wrap justify-center gap-[20px]">
            {favorite.map((el, index) => (
              <div key={index} className=" ">
                <div className=" rounded-2xl bg-white/40  shadow-xl h-[400px] w-[300px] p-3 ">
                  <div className="w-full">
                    <img src={el.imageUrl} alt="imgProduct" />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{el.name}</div>
                    <p className="text-gray-700 text-xl">${el.price}</p>
                    <div className="text-end">
                      <button
                        onClick={() =>
                          dispatch({ type: "ADD_TO_FAVORITE", payload: el })
                        }
                        className=" text-white bg-red-500 w-[30px] h-[30px] rounded-lg"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center py-12">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/no-products-and-no-favorite-in-folder-4006348-3309934.png?f=webp"
            alt="emptyFav"
          />
        </div>
      )}
    </div>
  );
};

export default Favorite;
