import React from "react";
import { useState, useEffect } from "react";

export const fetchData = (userName, password) => {
  fetch("http://localhost:3000/admin/logindetails")
    .then((res) => res.json())
    .then((result) => {
      //console.log(password);
      result.forEach((element) => {
        if (
          element.empID == userName &&
          element.password == password &&
          element.position == "admin"
        ) {
          //console.log("true");
          return true;
        } else return false;
      });
    })
    .catch((err) => console.log(err));
};
