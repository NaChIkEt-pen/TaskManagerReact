import { createContext, useContext, useState, useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";
import MyRouter from "./Router/Router";
import { fetchData } from "./fetchData";
const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  var isAdmin = false;
  const navigate = useNavigate();
  const [logindata, setLoginData] = useState([]);
  const [user, setUser] = useState({ name: "", isAuthenticated: false });
  const [userEmp, setUserEmp] = useState({ name: "", isAuthenticated: false });
  const login = (userName, password, loginData) => {
    var isAdmin = false;
    var isEmp = false;
    //console.log(loginData);
    loginData.forEach((element) => {
      //console.log(element);
      if (
        element.empID == userName &&
        element.password == password &&
        element.position == "admin"
      ) {
        isAdmin = true;
        isEmp = true;
      } else if (
        element.empID == userName &&
        element.password == password &&
        element.position == "emp"
      ) {
        isEmp = true;
      }
    });
    //console.log(isAdmin);
    //userName == 101 && password == "nachiket"
    return new Promise(async (resolve, reject) => {
      if (isAdmin) {
        console.log("isadmin");
        //&& positon === "admin"
        setUser({ name: userName, isAuthenticated: true });

        setUserEmp({ name: userName, isAuthenticated: true });
        //localStorage.setItem("isAuth", user.isAuthenticated);
        resolve("success");
      } else if (isEmp) {
        console.log("isemp");
        setUserEmp({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Incorrect password or Incorrect Username");
      }
    });
  };
  const logout = () => {
    console.log("in lout1");
    setUser({ ...user, isAuthenticated: false });
    setUserEmp({ ...userEmp, isAuthenticated: false });
    //console.log(user.isAuthenticated);
    window.sessionStorage.setItem("isAdmin", false);
    window.sessionStorage.setItem("isEmp", false);
    console.log(user.isAuthenticated);
    console.log(userEmp.isAuthenticated);
    console.log(window.sessionStorage.getItem("isAdmin"));
    console.log(window.sessionStorage.getItem("isEmp"));
    {
      navigate("/");
    }
    //localStorage.setItem("isAuth", false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, userEmp }}>
      <>
        <MyRouter />
      </>
    </AuthContext.Provider>
  );
};
