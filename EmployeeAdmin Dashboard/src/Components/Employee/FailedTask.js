import React from "react";
import "./ActiveTask.css";
const FailedTask = ({ data, get, set, index }) => {
  const re = (data, get, set, index) => {
    data.failed = false;
    data.active = true;
    get.taskCounts.failed -= 1;
    get.taskCounts.active += 1;

    set({
      ...get,
      taskCounts: get.taskCounts,
      tasks: [...get.tasks],
    });
  };
  return (
    <div className="fai">
      <div className="top">
        <div className="cat"> {data.category}</div>

        <div>{data.taskDate}</div>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="buttons ">
        <div className="buttons ">Failed</div>
        <button onClick={() => re(data, get, set, index)} className="undo">
          Retry
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
