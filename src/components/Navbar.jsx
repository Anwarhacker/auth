// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../auth";

const Navbar = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        gap: "15px",
        padding: "10px",
        background: "#333",
        color: "#fff",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      {user ? (
        <>
          {user.role === "admin" && (
            <div>
              <Link to="/admin" style={{ color: "white" }}>
                Admin Dashboard
              </Link>
              <Link to="/about" style={{ color: "white" }}>
                about
              </Link>
            </div>
          )}

          {user.role === "user" && (
            <Link to="/user" style={{ color: "white" }}>
              User Dashboard
            </Link>
          )}
          <button
            onClick={handleLogout}
            style={{ marginLeft: "auto", background: "red", color: "white" }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
