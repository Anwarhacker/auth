import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";

const Login = () => {
  const navigate = useNavigate();

  // State to handle form input and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Default users (Replace this with API or database check in a real app)
  const defaultUsers = {
    admin: { email: "admin@example.com", password: "admin123", role: "admin" },
    user: { email: "user@example.com", password: "user123", role: "user" },
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === defaultUsers.admin.email &&
      password === defaultUsers.admin.password
    ) {
      login("admin");
      navigate("/admin");
    } else if (
      email === defaultUsers.user.email &&
      password === defaultUsers.user.password
    ) {
      login("user");
      navigate("/user");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Page</h1>
      <form
        onSubmit={handleLogin}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
