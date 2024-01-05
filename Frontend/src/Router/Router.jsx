import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/AdminPages/AdminLogin";
import React from "react";

function MyRouter() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default MyRouter;
