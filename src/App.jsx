import "./App.css";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductForm from "./components/ProductForm.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([])
  return (
    <>
      <Header />
      <ProductForm setProduct = {setProducts}/>
      <ProductList list = {products}/>
      <Footer />
    </>
  );
}

export default App;
