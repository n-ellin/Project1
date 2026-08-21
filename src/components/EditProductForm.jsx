import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateProducts } from "../services/productService";

function EditProductForm({ products, setProducts }) {
  const { id } = useParams();

  const [error, setError] = useState();

  const navigate = useNavigate();

  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");

  const product = products.find((product) => product.id === id);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setStock(product.stock);
    }
  }, [product]);

  async function submitHandle(event) {
    event.preventDefault();
    const data = {
      name,
      price: Number(price),
      stock: Number(stock),
    };

    try {
      const updateProduct = await updateProducts(id, data);
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? updateProduct : product)),
      );
      navigate("/products");
    } catch {
      setError("Produk gagal diperbarui");
    }
  }

  return (
    <form onSubmit={submitHandle} className="form-product">
      <div className="d-flex align-items-center gap-2 mb-4">
        <div>
          <h5 className="fw-bold mb-0">Edit Produk</h5>
          <small className="text-secondary">
            Masukkan informasi produk yang baru
          </small>
          {error && <p className="text-danger">{error}</p> }
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
        <i className="bi bi-pencil me-2"></i>
        Edit
      </button>
    </form>
  );
}

export default EditProductForm;
