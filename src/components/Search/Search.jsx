import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Search = () => {
  const { search } = useSelector((state) => state);
  return (
    <div>
      <div className="flex justify-center flex-wrap items-center gap-[30px]">
        {search?.map((el) => (
          <ProductCard el={el} />
        ))}
      </div>
    </div>
  );
};

export default Search;
