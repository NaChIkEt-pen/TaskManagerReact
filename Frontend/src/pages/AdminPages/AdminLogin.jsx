import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
//import AdminDashboard from "./AdminDashboard";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth";

function AdminLogin() {
  const [logindata, setLoginData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { login } = AuthData();

  useEffect(() => {
    fetch("http://localhost:3000/admin/details")
      .then((res) => res.json())
      .then((result) => {
        setLoginData(result);
        //console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs.empID);
    // if (inputs.empID == "nachiket") {
    //   setFormSubmitted(true);
    //   navigate("/admin/dashboard");
    // }
    try {
      await login(inputs.empID, inputs.password);
      navigate("/admin/dashboard");
    } catch (error) {
      setErrorMessage(error);
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
      {errorMessage ? <div className="error">{errorMessage}</div> : null}
    </>
  );
}

export default AdminLogin;
