import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submitHandle(event) {
    event.preventDefaault();

    setError("");

    if (email === "") {
      console.log("Email wajib diisi");
      return;
    }

    if (!email.includes("@")) {
      console.log("Email tidak valid");
      return;
    }

    if (password === "") {
      console.log("Password wajib diisi");
      return;
    }

    if (password.length < 8) {
      console.log("Password minimal 8 karakter");
      return;
    }

    console.log("Login berhasil");
  }

  return (
    <form onSubmit={SubmitHandle}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <p>{error}</p>
      <button type="submit">Kirim</button>
    </form>
  );
}

export default Login
