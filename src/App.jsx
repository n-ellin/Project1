import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = `Produk (${products.length})`;
  }, [products]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products products={products} setProducts={setProducts} />}
          >
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
