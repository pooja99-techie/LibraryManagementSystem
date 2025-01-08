import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/maintenance">Maintenance</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
