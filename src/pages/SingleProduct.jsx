import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const {
    data: product,
    error,
    isPanding,
  } = useFetch("https://dummyjson.com/product/" + id);
  if (isPanding) {
    return (
      <div className="grid place-items-center mt-50">
        <span className="loading loading-spinner text-accent text-lg"></span>
        <h3 className="text-accent mt-3">Loading...</h3>
      </div>
    );
  }

  if (error) {
    return <h2 className="text-error text-center mt-10 text-lg">{error}</h2>;
  }
  console.log(product);
  return (
    <>
      {product && (
        <div className="grid place-items-center mt-25">
          <div className="w-ful max-w-[800px] cursor-pointer group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200 hover:-translate-y-1 transform">
            <div className="relative">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-52 h-52 object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
              />
              <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                ${product.price}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {product.description}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </span>
                <span className="text-yellow-500 font-semibold">
                  ⭐ {product.rating}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Brand:</span>
                <span className="text-gray-800 font-semibold">
                  {product.brand}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
