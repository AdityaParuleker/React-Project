import React from "react";
import "./ActiveTask.css";
const New = ({ data, get, set, index }) => {
  const accepttask = (data, get, set, index) => {
    data.newTask = false;
    data.active = true;
    get.taskCounts.newTask -= 1;
    get.taskCounts.active += 1;

    set({
      ...get,
      taskCounts: get.taskCounts,
      tasks: [...get.tasks],
    });
  };
  return (
    <div className="newt">
      <div className="top">
        <div className="cat"> {data.category}</div>

        <div>{data.taskDate}</div>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="button-accept ">
        <button
          onClick={() => accepttask(data, get, set, index)}
          className="acce"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default New;
