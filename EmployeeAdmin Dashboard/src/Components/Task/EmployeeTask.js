import React, { useContext } from "react";
import "./EmployeeTask.css";
const EmployeeTask = ({ get }) => {
  return (
    <>
      <div className="employee">
        <div className="new">
          {get.taskCounts.newTask}
          <div className="tasks">New Task</div>
        </div>
        <div className="new2">
          {get.taskCounts.completed}
          <div className="tasks">Completed</div>
        </div>
        <div className="new3">
          {get.taskCounts.active}
          <div className="tasks">Ongoing</div>
        </div>
        <div className="new4">
          {get.taskCounts.failed}
          <div className="tasks">Failed</div>
        </div>
      </div>{" "}
    </>
  );
};

export default EmployeeTask;
