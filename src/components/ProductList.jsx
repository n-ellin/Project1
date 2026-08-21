import { Link } from "react-router-dom";
import { deleteProducts } from "../services/productService";
import { useState } from "react";

function ProductList({ list, setProducts, loading }) {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const role = user?.role;
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [search, setSearch] = useState("");


  async function remove(id) {
    try {
      setDeletingId(id);
      
      await deleteProducts(id);

      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      setError("Produk gagal dihapus");
    } finally {
      setDeletingId(null);
    }
  }

  const filterProducts = list.filter((Product) => Product.name.toLowerCase().include(search.toLowerCase()));

  return (
    <div className="product-table-card">
      <div className="product-list-header border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-1">Daftar Produk</h5>

            <small className="text-secondary">
              Kelola seluruh produk yang tersedia
            </small>
          </div>

          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
            {list.length} Produk
          </span>
        </div>
      </div>

      <div>
        <input type="text" value={search} onChange={(event)} => setSearch (event.target.value)} placeholder = "Cari produk..." />
      </div>

      {error && <p className="text-danger">{error}</p>}
      <div className="table-responsive">
        <table className="table table-hover text-center align-middle">
          <thead>
            <tr>
              <th>No</th>
              <th>Produk</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Status</th>

              {role === "Admin" && <th>Aksi</th>}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  className="py-5 text-secondary"
                  colSpan={role === "Admin" ? 6 : 5}
                >
                  <i className="bi bi-arrow-clockwise"></i>
                  Memuat data...
                </td>
              </tr>
            ) : list.length === 0 ? (
              <tr>
                <td
                  colSpan={role === "Admin" ? 6 : 5}
                  className="py-5 text-secondary"
                >
                  <i className="bi bi-box-seam fs-2 d-block mb-2"></i>
                  Belum ada produk.
                </td>
              </tr>
            ) : (
              list.map((product, index) => (
                <tr key={product.id}>
                  <th>{product.id}</th>

                  <td>
                    <div className="fw-semibold">{product.name}</div>
                  </td>

                  <td className="fw-medium">
                    Rp {Number(product.price).toLocaleString("id-ID")}
                  </td>

                  <td>{product.stock}</td>

                  <td>
                    {product.stock > 0 ? (
                      <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                        Tersedia
                      </span>
                    ) : (
                      <span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-2">
                        Habis
                      </span>
                    )}
                  </td>

                  <td>
                    {role === "Admin" && (
                      <>
                        <Link
                          to={`/products/${product.id}`}
                          className="btn btn-outline-primary btn-sm rounded-pill me-2"
                        >
                          Detail
                        </Link>

                        <Link
                          to={`/products/${product.id}/edit`}
                          className="btn btn-outline-warning btn-sm rounded-pill me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-outline-danger btn-sm rounded-pill"
                          onClick={() => remove(product.id)}
                          disabled={deletingId === product.id}
                        >
                          {deletingId === product.id
                            ? "Menghapus... "
                            : "Hapus"}
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
