import { useState } from "react";
import "./App.css";
import AdminLogin from "./pages/AdminPages/AdminLogin";
import { Link } from "react-router-dom";
import MyRouter from "./Router/Router";
import { AuthWrapper } from "./auth";
function App() {
  return (
    <>
      {/* <AdminLogin /> */}
      <AuthWrapper />
    </>
  );
}

export default App;
