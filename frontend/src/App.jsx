import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";
import Transactions from "./pages/Transactions";
import UserManagement from "./pages/UserManagement";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/maintenance"
          element={<ProtectedRoute role="admin"><Maintenance /></ProtectedRoute>}
        />
        <Route
          path="/reports"
          element={<ProtectedRoute><Reports /></ProtectedRoute>}
        />
        <Route
          path="/transactions"
          element={<ProtectedRoute><Transactions /></ProtectedRoute>}
        />
        <Route
          path="/user-management"
          element={<ProtectedRoute role="admin"><UserManagement /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
