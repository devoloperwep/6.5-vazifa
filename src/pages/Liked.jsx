import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Liked() {
  const { likedProducts, dispatch } = useGlobalContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">
        ❤️ Your Liked Products
      </h1>

      {likedProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t liked any products yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {likedProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover hover:scale-105 transform transition duration-300"
                />
              )}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-500 text-sm mb-3 line-clamp-3">
                    {item.description}
                  </p>
                )}
                {item.price && (
                  <p className="text-lg font-semibold text-green-600 mb-4">
                    ${item.price}
                  </p>
                )}
                <div className="mt-auto flex gap-3">
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_LIKED", payload: item.id })
                    }
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-200"
                  >
                    Remove
                  </button>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Liked;
