import { createContext, useContext, useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import MyRouter from "./Router/Router";
import { fetchData } from "./fetchData";
const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  var isAdmin = false;
  const [logindata, setLoginData] = useState([]);
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userName, password, loginData) => {
    var isAdmin = false;
    //console.log(loginData);
    loginData.forEach((element) => {
      //console.log(element);
      if (
        element.empID == userName &&
        element.password == password &&
        element.position == "admin"
      ) {
        isAdmin = true;
      }
    });
    //console.log(isAdmin);
    //userName == 101 && password == "nachiket"
    return new Promise((resolve, reject) => {
      if (isAdmin) {
        //&& positon === "admin"
        setUser({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Incorrect password or Incorrect Username");
      }
    });
  };
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <MyRouter />
      </>
    </AuthContext.Provider>
  );
};
