function About() {
  return (
    <div className="container py-4">
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4 p-md-5">
          <h3 className="fw-bold mb-2">Tentang Aplikasi</h3>

          <p className="text-secondary mb-4">
            Aplikasi ini merupakan sistem pengelolaan produk sederhana yang
            digunakan untuk menampilkan dan mengelola data produk.
          </p>

          <h5 className="fw-bold">Fitur</h5>

          <ul className="text-secondary">
            <li>Menampilkan daftar produk</li>
            <li>Menambahkan produk</li>
            <li>Mengedit produk</li>
            <li>Menghapus produk</li>
            <li>Melihat detail produk</li>
            <li>Validasi form</li>
            <li>Handling loading dan error</li>
          </ul>

          <h5 className="fw-bold mt-4">Teknologi</h5>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <span className="badge bg-primary-subtle text-primary px-3 py-2">
              React
            </span>

            <span className="badge bg-primary-subtle text-primary px-3 py-2">
              React Router
            </span>

            <span className="badge bg-primary-subtle text-primary px-3 py-2">
              Axios
            </span>

            <span className="badge bg-primary-subtle text-primary px-3 py-2">
              REST API
            </span>

            <span className="badge bg-primary-subtle text-primary px-3 py-2">
              MockAPI
            </span>
          </div>

          <hr className="my-4" />

          <small className="text-secondary">
            Dibuat sebagai project pembelajaran React dan REST API.
          </small>
        </div>
      </div>
    </div>
  );
}

export default About;
