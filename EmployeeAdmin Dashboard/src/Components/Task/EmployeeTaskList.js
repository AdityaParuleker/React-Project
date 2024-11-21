import React, { useContext } from "react";
import ActiveTask from "../Employee/ActiveTask";
import NewTask from "../Employee/NewTask";
import CompletedTask from "../Employee/CompletedTask";
import FailedTask from "../Employee/FailedTask";
import "./EmployeeTaskList.css";
import { Log } from "../../Context/Logincontext";
const EmployeeTaskList = ({ get, set }) => {
  return (
    <div className="empta">
      {get.tasks.map((item, index) => {
        if (item.active) {
          return (
            <ActiveTask
              key={index}
              data={item}
              set={set}
              get={get}
              index={index}
            />
          );
        }
        if (item.newTask) {
          return (
            <NewTask
              key={index}
              data={item}
              set={set}
              get={get}
              index={index}
            />
          );
        }
        if (item.completed) {
          return (
            <CompletedTask
              key={index}
              data={item}
              set={set}
              get={get}
              index={index}
            />
          );
        }
        if (item.failed) {
          return (
            <FailedTask
              key={index}
              data={item}
              set={set}
              get={get}
              index={index}
            />
          );
        }
      })}
    </div>
  );
};

export default EmployeeTaskList;
