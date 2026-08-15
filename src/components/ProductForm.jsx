import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductForm({ setProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stok, setStok] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setProduct((prev) => {
      const newProduct = {
        id: prev.length + 1,
        name: isName,
        price: isPrice,
        stok: isStok,
      };
      return [...prev, newProduct];
    });
    navigate("/products");
    console.log("Produk berhasil ditambahkan");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-product">
        <div className="mb-3">
          <label className="form-label1">Nama : </label>
          <input
            type="text"
            className="form-control"
            value={isName}
            onChange={(event) => setName(event.target.value)}
          />{" "}
        </div>

        <div className="mb-3 ">
          <label className="form-label">Harga : </label>
          <input
            type="number"
            className="form-control"
            value={isPrice}
            onChange={(event) => setPrice(Number(event.target.value))}
          />{" "}
        </div>

        <div className="mb-4">
          <label className="form-label">Stok : </label>
          <input
            type="number"
            className="form-control"
            value={isStok}
            onChange={(event) => setStok(Number(event.target.value))}
          />{" "}
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Tambah
        </button>
      </form>
    </>
  );
}

export default ProductForm;
