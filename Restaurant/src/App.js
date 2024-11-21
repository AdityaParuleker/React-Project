import Headers from "./components/Headers";
import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const context = useContext(AuthContext);
  const [userData] = context["state1"];
  const [email, setEmail] = context["emailState"];
  const [password, setPassword] = context["passwordState"];

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (userData) {
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
        toast.success("User Logged In");
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
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/cart" && location.pathname !== "/login" ? (
        <Headers
          loggedInUserData={loggedInUserData}
          user={user}
          handleLogOut={handleLogOut}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} user={user} />}
        />
      </Routes>
      <Toaster />
      {location.pathname !== "/cart" ? <Footer /> : null}
    </>
  );
}

export default App;
