import Products from "./Products";

function Dashboard({ products, setProducts }) {
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  const productTersedia = products.filter(
    (product) => product.stock > 0
  );

  const productHabis = products.filter(
    (product) => product.stock <= 0
  );

  return (
    <main className="page-container">
      <div className="mb-4">
        <h1 className="page-title mb-1">Dashboard</h1>

        <p className="page-subtitle mb-0">
          Selamat datang kembali,{" "}
          <span className="fw-semibold text-primary">
            {user.role}
          </span>
        </p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="stat-card p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="stat-label mb-2">Total Produk</p>
                <div className="stat-number">
                  {products.length}
                </div>
              </div>

              <div className="bg-primary-subtle text-primary rounded-3 p-3">
                <i className="bi bi-box-seam fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="stat-label mb-2">Produk Tersedia</p>
                <div className="stat-number">
                  {productTersedia.length}
                </div>
              </div>

              <div className="bg-success-subtle text-success rounded-3 p-3">
                <i className="bi bi-check-circle fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="stat-label mb-2">Produk Habis</p>
                <div className="stat-number">
                  {productHabis.length}
                </div>
              </div>

              <div className="bg-danger-subtle text-danger rounded-3 p-3">
                <i className="bi bi-x-circle fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products
        products={products}
        setProducts={setProducts}
      />
    </main>
  );
}

export default Dashboard;