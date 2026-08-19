import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <nav className="navbar bg-white shadow-sm sticky-top py-3 rounded-3 mx-3 mt-3">
      <div className="container">
        <div >
          <h2 className="fw-bold text-primary fs-5 mb-0">Manajemen Produk</h2>
        </div>
        <div className="d-flex align-items-center gap-1">
          <Link to="/dashboard" className="nav-link-custom">Dashboard</Link>
          <Link to="/products" className="nav-link-custom">Products</Link>
          <Link to="/about" className="nav-link-custom">About</Link>
        </div>
        <div>
          <button onClick={handleLogout} className="btn btn-primary btn-sm rounded-pill px-3">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
