import React from "react";
import { useSelector } from "react-redux";
import BasketKard from "../BasketKard/BasketKard";

const Basket = () => {
  const { basket } = useSelector((state) => state);

  let totalPrice = basket.reduce((acc, el) => acc + el.price * el.quantity, 0);
  return (
    <div className="my-8 ">
      <div className="container">
        {basket.length ? (
          <div className="flex flex-col bg-[#ffffff41] backdrop-blur-lg px-4 rounded-xl r">
            <div className="sm:-mx-6 lg:-mx-8 h-[500px] overflow-x-auto">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="">
                  <table className=" w-full text-sm font-light text-surface dark:text-white text-center">
                    <thead className="border-b border-neutral-200 text-xl ">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Name
                        </th>

                        <th scope="col" className="px-6 py-4">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {basket.map((el, index) => (
                      <tbody key={index} className="font-bold">
                        <BasketKard el={el} />
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-slate-600/10 rounded-lg  p-3 m-2">
              <h1 className="text-end text-slate-700 font-bold">
                Total price: ${totalPrice}
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex justify-center py-16">
            <img
              src="https://www.artofheritage.com.sa/images/empty-cart.png"
              alt="emptycart"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
