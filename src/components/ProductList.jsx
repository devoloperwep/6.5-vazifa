import Product from "./Product";
function ProductList({ products }) {
  return (
    <div className="grid grid-cols-4 gap-10 bg-base-300 p-5">
      {products.map((prod) => {
        return <Product key={prod.id} prod={prod} />;
      })}
    </div>
  );
}

export default ProductList;
