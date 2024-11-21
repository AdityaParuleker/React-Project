import React from "react";
import { AuthContext } from "./ProductContext";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const LogContext = createContext();
const LoginContext = ({ children }) => {
  const { userData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const handleLogin = (email, password) => {
    if (userData) {
      console.log(userData);
      const customers = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (customers) {
        setUser("logged");

        setLoggedInUserData(customers);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ data: customers })
        );
        setEmail("");
        setPassword("");
      } else {
        toast.error("Invalid Credentials");
      }
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const handleLogOut = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.clear();
  };
  return (
    <LogContext.Provider
      value={{
        handleLogin,
        handleLogOut,
        user,
        loggedInUserData,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </LogContext.Provider>
  );
};

export default LoginContext;
