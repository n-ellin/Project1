import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { Outlet } from "react-router-dom";

function Products({products, setProducts}) {
  return (
    <>
      <ProductForm setProduct={setProducts}/>
      <ProductList list = {products}/>
      <Outlet context={{products}}/>
    </>
  );
}

export default Products;
