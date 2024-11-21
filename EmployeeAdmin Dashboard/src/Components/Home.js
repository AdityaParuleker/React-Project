import "./Login.css";

import toast from "react-hot-toast";
import Login from "./Login";
import { useState, useEffect } from "react";
import { Log } from "../Context/Logincontext";
import { useContext } from "react";
import AdminDashboard from "./DashBoard/AdminDashboard";
import EmployeeDashboard from "./DashBoard/EmployeeDashboard";
import { AuthContext } from "../Context/AuthProvider";
const Home = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      toast.success("Log in Successful");
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );

      if (employee) {
        toast.success("Log in Successful");
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        toast.error("Invalid Credentials");
      }
    } else {
      toast.error("Invalid Credentials");
    }
  };
  console.log(user);
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard
          user={user}
          setUser={setUser}
          userData={userData}
          setUserData={setUserData}
        />
      ) : user == "employee" ? (
        <EmployeeDashboard
          user={user}
          setUser={setUser}
          loggedInUserData={loggedInUserData}
          setLoggedInUserData={setLoggedInUserData}
        />
      ) : null}
    </>
  );
};

export default Home;
