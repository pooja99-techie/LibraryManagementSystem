import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  // If there's no user or the user object is invalid, return nothing
  if (!user) return null;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {user.role === "admin" ? (
          <>
            <li>
              <Link to="/maintenance">Maintenance</Link>
            </li>
            <li>
              <Link to="/user-management">User Management</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
