import React from "react";
import "./TaskList.css";
const TaskList = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <table id="emp">
        <tr>
          <th>Employee</th>
          <th className="heading">New Task</th>
          <th className="heading">Active Task</th>
          <th className="heading">Completed</th>
          <th className="heading">Failed</th>
        </tr>

        {userData.map(function (elem, idx) {
          return (
            <tr>
              <td>{elem.firstName}</td>
              <td>{elem.taskCounts.newTask}</td>
              <td>{elem.taskCounts.active}</td>
              <td>{elem.taskCounts.completed}</td>
              <td>{elem.taskCounts.failed}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default TaskList;
