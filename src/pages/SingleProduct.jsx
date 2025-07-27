import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios("https://dummyjson.com/product/" + id)
      .then(({ data }) => setProduct(data))
      .catch((error) => console.log(error.message));
  }, [id]);
  const { title, description, category, price, rating, brand, thumbnail } = p;
  return (
    <>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt="" />
        </div>
      )}
    </>
  );
}

export default SingleProduct;
