import "./App.css";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductForm from "./components/ProductForm.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Produk (${products.length})";
  }, [products]);
  return (
    <>
      <Header />
      <main className="container">
        <ProductForm setProduct={setProducts} />
        <ProductList list={products} />
      </main>
      <Footer />
    </>
  );
}

export default App;
