import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import AdminDashboard from "./AdminDashboard";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [logindata, setLoginData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/admin/details")
      .then((res) => res.json())
      .then((result) => {
        setLoginData(result);
        //console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.empID);
    if (inputs.empID == "nachiket") {
      setFormSubmitted(true);
      navigate("/admin/dashboard");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your ID:
          <input
            type="text"
            name="empID"
            value={inputs.empID || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your password:
          <input
            type="password"
            name="password"
            autoComplete="true"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>

      {/* {formSubmitted && <AdminDashboard />} */}
    </>
  );
}

export default AdminLogin;
