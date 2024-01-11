import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/AdminPages/AdminLogin";
import React from "react";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import PageNotFound from "../pages/PageNotFound";
import EmpLogin from "../pages/EmployeePages/EmpLogin";
import EmpDashboard from "../pages/EmployeePages/EmpDashboard";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageNotFound />} />
      <Route path="/admin/" element={<AdminLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/emp/login" element={<EmpLogin />} />
      <Route path="/emp/dashboard" element={<EmpDashboard />} />
    </Routes>
  );
}

export default MyRouter;
