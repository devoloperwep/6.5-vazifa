import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPanding,
    error,
  } = useFetch("https://dummyjson.com/product/");

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

  return (
    <section>
      {products && <ProductList products={products.products} />}
    </section>
  );
}

export default Home;
