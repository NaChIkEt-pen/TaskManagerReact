import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthData } from "../../auth";

//import { AuthData } from "../../auth";
function AdminDashboard() {
  const [inputs, setInputs] = useState({});
  const { user } = AuthData();
  const [tableData, setTableData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/admin/details")
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setTableData(result);
      })
      .catch((err) => console.log(err));
  }, []);
  //const value = user.isAuthenticated;
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(event.target.name);
    // console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log("in handle");
    fetch("http://localhost:3000/admin/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        empID: inputs.empID,
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        position: inputs.position,
        manager: inputs.manager,
        Projects: inputs.projects,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // if (user.isAuthenticated && tableData != undefined) {    //changed here

  if (user.isAuthenticated && tableData != undefined) {
    return (
      <div style={{ textAlign: "-webkit-center" }}>
        <table
          className="table table table-striped"
          style={{ width: "60%", marginTop: "10%" }}
        >
          <thead className="thead-dark">
            <tr key="one">
              <th scope="col" key="serial">
                Serial No.
              </th>
              <th scope="col" key="empID">
                empID
              </th>
              <th scope="col" key="firstname">
                FirstName
              </th>
              <th scope="col" key="lastname">
                LastName
              </th>
              <th scope="col" key="position">
                Position
              </th>
              <th scope="col" key="manager">
                Manager
              </th>
              <th scope="col" key="project">
                Projects
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i + 1}>
                <td key="serial">{i + 1}</td>
                <td key="empID">{row.empID}</td>
                <td key="firstname">{row.firstName}</td>
                <td key="lastname">{row.lastName}</td>
                <td key="position">{row.position}</td>
                <td key="manager">{row.manager}</td>
                <td key="projects">{row.Projects}</td>
              </tr>
            ))}
            <tr key="input">
              <td key="inpurt NA">N/A</td>
              <td key="inputfirst">
                <input
                  type="text"
                  name="empID"
                  id="empID"
                  placeholder="EMP ID"
                  value={inputs.empID || ""}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={inputs.firstName || ""}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={inputs.lastName || ""}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Position"
                  value={inputs.position || ""}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="manager"
                  id="manager"
                  placeholder="Manager"
                  value={inputs.manager || ""}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="projects"
                  id="projects"
                  placeholder="Projects"
                  value={inputs.projects || ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Employee
        </button>
        <br />
        <br />
        <br />
        <button type="button" className="btn btn-danger">
          LOGOUT
        </button>
      </div>
    );
  } else {
    return (
      <>
        <h1>Please Login</h1>
        <Link to={"/admin/login"}>Login</Link>
      </>
    );
  }
}

export default AdminDashboard;
