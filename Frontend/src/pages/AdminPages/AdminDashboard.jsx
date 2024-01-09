import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthData } from "../../auth";
import Axios from "axios";
import axios from "axios";

function AdminDashboard() {
  // const putData = (empID, firstName, lastName, position, manager, project) => {
  //   const connection = mysql.create({
  //     host: "localhost",
  //     user: "root",
  //     password: "nachiket",
  //     database: "taskapp",
  //   });
  //   const query = `INSERT INTO details VALUES (${empID},${firstName},${lastName},${position},${manager},${project})`;
  //   connection.query(query, (err, data) => {
  //     if (err) console.log(err);
  //     else console.log("done");
  //   });
  // };

  //const navigate = useNavigate();
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

  if (user.isAuthenticated && tableData != undefined) {
    //putData(103, "nachiket", "pen", "emp", "na", "taskapp");
    // axios
    // .post("http://localhost:3000/admin/details", {
    //   empID: 105,
    //   firstName: "nach",
    //   lastName: "pen",
    //   position: "emp",
    //   manager: "nachiket",
    //   Projects: "taskmanager",
    // })
    //   .then((response) => {
    //     console.log(response);
    //   });
    // fetch("http://localhost:3000/admin/details", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     empID: 105,
    //     firstName: "nach",
    //     lastName: "pen",
    //     position: "emp",
    //     manager: "nachiket",
    //     Projects: "taskmanager",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
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
          </tbody>
        </table>
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
