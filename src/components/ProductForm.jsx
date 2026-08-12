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
      <form onSubmit={handleSubmit}>
        <label>Nama : </label>
        <input
          type="text"
          value={isName}
          onChange={(event) => setName(event.target.value)}
        />{" "}
        <br />
        <label>Harga : </label>
        <input
          type="text"
          value={isPrice}
          onChange={(event) => setPrice(event.target.value)}
        />{" "}
        <br />
        <label>Stok : </label>
        <input
          type="text"
          value={isStok}
          onChange={(event) => setStok(event.target.value)}
        /> <br />
        <button type="submit">Tambah</button>
      </form>
    </>
  );
}

export default ProductForm;
