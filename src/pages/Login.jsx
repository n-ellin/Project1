import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const token = "dummy-token-12345";

  const navigate = useNavigate();

  const users = [
    {
      email: "admin123@gmail.com",
      password: "admin123",
      role: "Admin",
    },
    {
      email: "user123@gmail.com",
      password: "user1234",
      role: "user",
    },
  ];

  function SubmitHandle(event) {
    event.preventDefault();

    setError("");

    if (email === "") {
      setError("Email wajib diisi");
      return;
    }

    if (!email.includes("@")) {
      setError("Email tidak valid");
      return;
    }

    if (password === "") {
      setError("Password wajib diisi");
      return;
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    setLoading(true);

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      setError("Email atau password tidak terdaftar");
      setLoading(false);
      return;
    }

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    console.log("Login berhasil:", user);
    console.log ("Token : ", token)

    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="text-center mb-4">
          <div className="login-logo">
            <i className="bi bi-box-seam fs-2"></i>
          </div>

          <h2 className="fw-bold text-primary mb-1">Manajemen Produk</h2>

          <p className="text-secondary mb-0">Silakan login untuk melanjutkan</p>
        </div>

        {/* Error */}
        {error && (
          <div className="alert alert-danger rounded-3 small">
            <i className="bi bi-exclamation-circle me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={SubmitHandle}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>

            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Masukkan email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>

            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Masukkan password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary btn-login w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Memproses...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="login-footer">&copy; 2026 Manajemen Produk</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
