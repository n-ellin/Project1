import { Link } from "react-router-dom";

function ProductList({ list, setProducts }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  function remove(id) {
    setProducts((prev) => {
      return prev.filter((product) => product.id !== id);
    });
  }

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
            {list.length === 0 ? (
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
                  <th>{index + 1}</th>

                  <td>
                    <div className="fw-semibold">
                      {product.name}
                    </div>
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
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-primary btn-sm rounded-pill me-2"
                    >
                      Detail
                    </Link>

                    {role === "Admin" && (
                      <>
                        <button className="btn btn-outline-primary btn-sm rounded-pill me-2">
                          Edit
                        </button>

                        <button
                          className="btn btn-outline-danger btn-sm rounded-pill"
                          onClick={() => remove(product.id)}
                        >
                          Hapus
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