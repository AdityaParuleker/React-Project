import React, { useEffect } from "react";
import "./Task.css";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext, useState } from "react";
import TaskList from "./TaskList";
import toast from "react-hot-toast";
const Task = ({ userData, setUserData }) => {
  console.log(userData);
  const [newTask, setNewTask] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    category: "",
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  });

  const [asignTo, setAsignTo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const update = [];
    const data = userData;
    data.forEach(function (elem) {
      if (asignTo.toLowerCase() == elem.firstName.toLowerCase()) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
        update.push("Success");
        toast.success("Submitted");
      }
    });
    if (update[0] !== "Success") {
      toast.error("Employee name is wrong.");
    }
    update.pop();
    setUserData(data);
  };
  function handletaskTitle(e) {
    setNewTask({ ...newTask, taskTitle: e.target.value });
  }
  function handletaskDate(e) {
    setNewTask({ ...newTask, taskDate: e.target.value });
  }

  function handlecategory(e) {
    setNewTask({ ...newTask, category: e.target.value });
  }
  function handledescription(e) {
    setNewTask({ ...newTask, taskDescription: e.target.value });
  }
  return (
    <>
      <form
        id="admin"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div>
          <div>
            <h3 className="admintext">Task Title</h3>
            <input
              value={newTask.taskTitle}
              onChange={handletaskTitle}
              className="task-input"
            ></input>
          </div>
          <div>
            <h3 className="admintext">Date</h3>
            <input
              value={newTask.taskDate}
              type="date"
              onChange={handletaskDate}
              className="task-input"
            ></input>
          </div>
          <div>
            <h3 className="admintext">Assign To</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="task-input"
            ></input>
          </div>
          <div>
            <h3 className="admintext">Category</h3>
            <input
              value={newTask.category}
              onChange={handlecategory}
              className="task-input"
            ></input>
          </div>
          <div>
            <h3 className="admintext">Description</h3>
            <input
              value={newTask.taskDescription}
              onChange={handledescription}
              id="desc"
            ></input>
          </div>
          <button className="task-submit">Create Task</button>
        </div>
      </form>
      <TaskList userData={userData} />
    </>
  );
};

export default Task;
