import { useState } from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useOutletContext();


  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="page-container">
        <div className="alert alert-danger">Produk tidak ditemukan</div>
      </div>
    );
  }

  return (
    <>
      <div className="page-conatiner">
        <div className="detail-card">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-primary-subtle text-primary rounded-3 p-3">
              <i className="bi bi-box-seam fs-3"></i>
            </div>

            <div>
              <h2 className="fw-bold mb-1">{product.name}</h2>
              <small className="text-secondary">
                Detail produk dari #{product.id}
              </small>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="detail-label">Harga</div>{" "}
            </div>

            <div className="detail-value fs-5">
              Rp {Number(product.price).toLocaleString("id-ID")}
            </div>
          </div>

          <div className="col-md-6">
            <div className="detail-label">Stok</div>

            <div className="detail-value fs-5">{product.stock}</div>
          </div>

          <div className="col-md-6">
            <div className="detail-label">Status</div>

            <div className="mt-1">
              {product.stock > 0 ? (
                <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                  Tersedia
                </span>
              ) : (
                <span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-2">
                  Habis
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-top">
          <Link
            to="/products"
            className="btn btn-outline-primary rounded-pill px-4"
          >
            <i className="bi bi-arrow-left me-2">Kembali</i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
