import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";

function AdminLogin() {
  const [logindata, setLoginData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/details")
      .then((res) => res.json())
      .then((result) => {
        setLoginData(result);
        //console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Employee ID</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter ID"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                autoComplete="on"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
