import React from "react";
import "./ActiveTask.css";
const CompletedTask = ({ data, get, set, index }) => {
  const reactiv = (data, get, set, index) => {
    data.completed = false;
    data.active = true;
    get.taskCounts.completed -= 1;
    get.taskCounts.active += 1;

    set({
      ...get,
      taskCounts: get.taskCounts,
      tasks: [...get.tasks],
    });
  };
  return (
    <div className="comp">
      <div className="top">
        <div className="cat"> {data.category}</div>

        <div>{data.taskDate}</div>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="buttons ">
        <div className="buttons ">Completed</div>
        <button onClick={() => reactiv(data, get, set, index)} className="undo">
          Undo
        </button>
      </div>
    </div>
  );
};

export default CompletedTask;
