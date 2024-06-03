import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";

const BasketKard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <tr className="border-b">
      <td className="whitespace-nowrap py-4">
        <img className="pl-14 w-[150px]" src={el.imageUrl} alt="image" />
      </td>
      <td className="whitespace-nowrap py-4">{el.name}</td>
      <td className="whitespace-nowrap py-4 text-xl">
        <button onClick={() => dispatch({ type: "DECREMENT", payload: el })}>
          -
        </button>
        <span className="px-2 ">{el.quantity}</span>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: el })}>
          +
        </button>
      </td>

      <td className="whitespace-nowrap  py-4">{el.price * el.quantity}</td>
      <td className="whitespace-nowrap  py-4 ">
        <button className="px-4 py-2 bg-purple-700 hover:bg-purple-500 transition ease-in-out duration-200 focus:bg-slate-800 rounded">
          Buy
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: el.id })}
          className="px-3 py-2 text-red-700"
        >
          <GrClose />
        </button>
      </td>
    </tr>
  );
};

export default BasketKard;
