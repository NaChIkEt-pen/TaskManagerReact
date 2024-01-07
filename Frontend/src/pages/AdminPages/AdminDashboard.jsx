import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthData } from "../../auth";
function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = AuthData();
  const value = user.isAuthenticated;
  if (user.isAuthenticated) return <>In dashboard</>;
  else {
    return (
      <>
        <h1>Please Login</h1>
        <Link to={"/admin/login"}>Login</Link>
      </>
    );
  }
}

export default AdminDashboard;
