import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getProducts } from "./services/productService.js";

import MainLayout from "./layouts/MainLayout.jsx";
import About from "./pages/About.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";
import EditProductForm from "./components/EditProductForm.jsx";

import Login from "./pages/Login.jsx";
import LoginLayout from "./layouts/LoginLayout.jsx";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Gagal mengambil data produk");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    document.title = `Produk (${products.length})`;
  }, [products]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route
              path="/dashboard"
              element={
                <Dashboard products={products} setProducts={setProducts} />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  setProducts={setProducts}
                  loading={loading}
                />
              }
            >
              <Route path=":id" element={<ProductDetail />} />
              <Route
                path=":id/edit"
                element={
                  <EditProductForm
                    products={products}
                    setProducts={setProducts}
                  />
                }
              />
            </Route>
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
