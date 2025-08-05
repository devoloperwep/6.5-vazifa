import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function BasketItem({ product }) {
  const { dispatch, totalPrice } = useGlobalContext();
  const increment = (e) => {
    e.preventDefault();
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: product.id,
    });
  };
  const decrement = (e) => {
    e.preventDefault();
    if (product.amount == 1) {
      dispatch({
        type: "DELETE_ITEM",
        payload: product.id,
      });
    } else {
      dispatch({ type: "DECREASE_AMOUNT", payload: product.id });
    }
  };
  return (
    <Link
      to={`/singleProduct/${product.id}`}
      className="block p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 px-20"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.title}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 font-medium ">
          TotalPrice: {formatPrice(product.amount * product.price)}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={increment}
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            +
          </button>
          <span className="text-gray-800 font-semibold">{product.amount}</span>
          <button
            onClick={decrement}
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            -
          </button>
        </div>
      </div>
    </Link>
  );
}

export default BasketItem;
