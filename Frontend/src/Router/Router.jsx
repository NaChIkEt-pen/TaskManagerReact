import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/AdminPages/AdminLogin";
import React from "react";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import PageNotFound from "../pages/PageNotFound";
function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageNotFound />} />
      <Route path="/admin/" element={<AdminLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default MyRouter;
