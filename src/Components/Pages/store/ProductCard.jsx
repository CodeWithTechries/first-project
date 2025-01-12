import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Common Components/Button";

function ProductCard({ product }) {
  return (
    <div className="w-96 md:w-80 mt-2 group bg-inherit">
      <NavLink
        to="" >
        <div
          className="relative flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-xl shadow-gray-200 dark:shadow-gray-950"
        >
          <span className="absolute right-0 z-10 rounded-bl-2xl bg-rose-500 px-4 py-2 font-medium uppercase text-white">
            Save {Math.ceil(Math.random(6) * 100)}%
          </span>
          <div className="overflow-hidden h-64 w-full grid place-content-center group-hover:rounded-b-2xl transition-all duration-500">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full flex-1 rounded-tr-3xl object-cover origin-center scale-125 group-hover:scale-150 transition-all duration-700"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300?text=Image+Not+Available";
              }}
            />
          </div>
          <div className="p-4 text-center">
            <h1 title={product.name} className="text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis ">
              {product.name}
            </h1>

            <p className="my-4 text-sm text-gray-700 dark:text-gray-400">
              {product.description}
            </p>

            <NavLink to="">
              <Button variant='primary' className="w-full">
                <p>Buy Now</p>
              </Button>
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductCard;
