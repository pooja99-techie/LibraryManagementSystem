import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user) {
    return <div>Please login to view the dashboard</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard</h1>
        {user.role === "admin" ? (
          <div>
            <h2>Admin Dashboard</h2>
            <p>You have access to manage books, users, and reports.</p>
          </div>
        ) : (
          <div>
            <h2>User Dashboard</h2>
            <p>You can view reports and manage your transactions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
