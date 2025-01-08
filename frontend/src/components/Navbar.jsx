import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1>Library Management</h1>
      <div className="links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/maintenance">Maintenance</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/transactions">Transactions</Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
