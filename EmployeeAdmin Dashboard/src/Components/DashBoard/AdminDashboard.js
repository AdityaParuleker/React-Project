import React from "react";
import Header from "../Header/Header";
import Task from "../Task/Task";
import "../Task/Task.css";
import { useContext } from "react";
import { Log } from "../../Context/Logincontext";
const AdminDashboard = ({ user, setUser, userData, setUserData }) => {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <div className="ms">
        <h1>Welcome </h1>
      </div>
      <Task userData={userData} setUserData={setUserData} />
    </>
  );
};

export default AdminDashboard;
