import { useState } from "react";

function ProductForm({ setProduct }) {
  const [isName, setName] = useState("");
  const [isPrice, setPrice] = useState("");
  const [isStok, setStok] = useState("");

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
        <br />
        <div className="mb-3 ">
          <label className="form-label">Harga : </label>
          <input
            type="number"
            className="form-control"
            value={isPrice}
            onChange={(event) => setPrice(event.target.value)}
          />{" "}
        </div>
        <br />
        <div className="mb-4">
          <label className="form-label">Stok : </label>
          <input
            type="number"
            className="form-control"
            value={isStok}
            onChange={(event) => setStok(event.target.value)}
          />{" "}
        </div>
        <br />
        <button type="submit" className="btn btn-primary mb-3">Tambah</button>
      </form>
    </>
  );
}

export default ProductForm;
