import React, { useState } from "react";
import Header from "../Header/Header";
import { useContext } from "react";
import { Log } from "../../Context/Logincontext";
import EmployeeTask from "../Task/EmployeeTask";
import EmployeeTaskList from "../Task/EmployeeTaskList";
const EmployeeDashboard = ({
  user,
  setUser,
  loggedInUserData,
  setLoggedInUserData,
}) => {
  const id = localStorage.getItem(`loggedInUser`);
  const get = JSON.parse(id);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <div className="ms">
        <h1 style={{ color: "white" }}>Welcome: {get.data.firstName}</h1>
      </div>

      <EmployeeTask get={loggedInUserData} />
      <EmployeeTaskList get={loggedInUserData} set={setLoggedInUserData} />
    </>
  );
};

export default EmployeeDashboard;
