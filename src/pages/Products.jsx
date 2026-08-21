import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { Outlet } from "react-router-dom";


function Products({products,setProducts,loading}) {

  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;
  const role = parsedUser.role;
  const [error,setError] = useState();

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {role === "Admin" && <ProductForm setProducts={setProducts} />}

      <ProductList
        list={products}
        setProducts={setProducts}
        loading={loading}
      />
      <Outlet context={{ products }} />
    </>
  );
}

export default Products;
