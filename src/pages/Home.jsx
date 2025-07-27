import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("https://dummyjson.com/product/")
      .then(({ data }) => setProducts(data.products))
      .catch((error) => console.log(error.message));
  }, []);
  return <section>{products && <ProductList products={products} />}</section>;
}

export default Home;
