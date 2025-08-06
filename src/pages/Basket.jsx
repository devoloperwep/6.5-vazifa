import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";
import BasketItem from "./BasketItem";

function Basket() {
  const { products, totalPrice } = useGlobalContext();
  if (products.length == 0) {
    return (
      <center className="mt-50">
        <h2 className="text-3xl text-error">You don't have any Products</h2>
      </center>
    );
  }
  return (
    <div className="px-20">
      {products.map((product) => {
        return <BasketItem key={product.id} product={product} />;
      })}
      <h2 className="py-4 px-6 bg-blue-100 text-blue-800 font-semibold text-lg rounded-md shadow-sm border border-blue-200">
        Total Price: {formatPrice(totalPrice)}
      </h2>
    </div>
  );
}

export default Basket;
