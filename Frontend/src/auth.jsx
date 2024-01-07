import { createContext, useContext, useState } from "react";
import { Routes } from "react-router-dom";
import MyRouter from "./Router/Router";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userName, password) => {
    // Make a call to the authentication API to check the username

    return new Promise((resolve, reject) => {
      if (userName === "root" && password === "nachiket") {
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
