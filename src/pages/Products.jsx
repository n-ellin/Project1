import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { Outlet } from "react-router-dom";

function Products({ products, setProducts }) {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  const role = parsedUser.role;

  return (
    <>
      {role === "Admin" && <ProductForm setProducts={setProducts} />}

      <ProductList list={products} setProducts={setProducts} />
      <Outlet context={{ products }} />
    </>
  );
} 

export default Products;
