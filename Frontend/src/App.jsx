import { useState } from "react";
import "./App.css";
import AdminLogin from "./pages/AdminPages/AdminLogin";
import { Link } from "react-router-dom";
import MyRouter from "./Router/Router";
function App() {
  return (
    <>
      {/* <AdminLogin /> */}
      <MyRouter />
    </>
  );
}

export default App;
