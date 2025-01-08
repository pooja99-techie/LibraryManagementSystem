import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("user", JSON.stringify({ username, role: "admin" }));
      navigate("/dashboard");
    } else if (username === "user" && password === "user123") {
      localStorage.setItem("token", "user-token");
      localStorage.setItem("user", JSON.stringify({ username, role: "user" }));
      navigate("/dashboard");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
