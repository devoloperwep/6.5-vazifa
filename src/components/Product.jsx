import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function Product({ prod }) {
  const { dispatch, products, likedProducts } = useGlobalContext();
  console.log(likedProducts);
  const { title, description, category, price, rating, brand, thumbnail } =
    prod;

  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const addLiked = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_LIKED", payload: prod });
    setAlreadyLiked(true);
  };
  const removeLiked = (e) => {
    e.preventDefault();
    setAlreadyLiked(false);
    dispatch({ type: "REMOVE_LIKED", payload: prod.id });
  };

  useEffect(() => {
    const item = likedProducts.find((p) => p.id == prod.id);
    if (item) setAlreadyLiked(true);
  }, []);

  function hendleSubmit(e) {
    e.preventDefault();

    const item = products.find((product) => product.id == prod.id);
    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  }
  return (
    <Link
      to={`/SingleProduct/${prod.id}`}
      className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-200"
    >
      <img src={thumbnail} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
            {category}
          </span>
          <span className="text-yellow-600 font-medium">⭐ {rating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <span className="text-gray-500">{brand}</span>
        </div>
        <div className="flex ">
          <button className="btn btn-primary" onClick={hendleSubmit}>
            Add to shop
          </button>
          {alreadyLiked && (
            <button onClick={removeLiked} className="cursor-pointer text-xl">
              <FaHeart />
            </button>
          )}
          {!alreadyLiked && (
            <button
              onClickCapture={removeLiked}
              onClick={addLiked}
              className="cursor-pointer text-xl"
            >
              <FaRegHeart />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Product;
