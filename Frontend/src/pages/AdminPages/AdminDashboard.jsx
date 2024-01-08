import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthData } from "../../auth";
import { mysql } from "mysql";

function AdminDashboard() {
  const putData = () => {
    useEffect(() => {
      const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "nachiket",
        database: "taskapp",
      });
    });
    const query = `INSERT INTO details VALUES (${empID},${firstName},${lastName},${position},${manager},${project})`;
  };

  //const navigate = useNavigate();
  const { user } = AuthData();
  const [tableData, setTableData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/admin/details")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTableData(result);
      })
      .catch((err) => console.log(err));
  }, []);
  //const value = user.isAuthenticated;

  if (user.isAuthenticated && tableData != undefined)
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
              <tr key="two">
                <td key="serial">{i + 1}</td>
                <td key="empID">{row.empID}</td>
                <td key="firstname">{row.firstName}</td>
                <td key="lastname">{row.lastName}</td>
                <td key="position">{row.position}</td>
                <td key="manager">{row.manager}</td>
                <td key="projects">{row.Projects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
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
