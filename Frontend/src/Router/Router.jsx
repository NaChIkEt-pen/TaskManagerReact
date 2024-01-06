import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/AdminPages/AdminLogin";
import React from "react";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";

function MyRouter() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default MyRouter;
