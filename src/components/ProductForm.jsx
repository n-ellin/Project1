import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductForm({ setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setProducts((prev) => {
      const newProduct = {
        id: prev.length + 1,
        name,
        price: Number(price),
        stock: Number(stock),
      };

      return [...prev, newProduct];
    });

    setName("");
    setPrice("");
    setStock("");

    navigate("/products");
  }

  return (
    <form onSubmit={handleSubmit} className="form-product">
      <div className="d-flex align-items-center gap-2 mb-4">
        <div className="bg-primary-subtle text-primary rounded-3 p-2">
          <i className="bi bi-plus-lg"></i>
        </div>

        <div>
          <h5 className="fw-bold mb-0">Tambah Produk</h5>
          <small className="text-secondary">
            Masukkan informasi produk baru
          </small>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-medium">Nama Produk</label>

          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Contoh: Laptop ASUS"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label fw-medium">Harga</label>

          <input
            type="number"
            className="form-control rounded-3"
            placeholder="0"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label fw-medium">Stok</label>

          <input
            type="number"
            className="form-control rounded-3"
            placeholder="0"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary rounded-3 px-4 mt-4">
        <i className="bi bi-plus-lg me-2"></i>
        Tambah Produk
      </button>
    </form>
  );
}

export default ProductForm;
