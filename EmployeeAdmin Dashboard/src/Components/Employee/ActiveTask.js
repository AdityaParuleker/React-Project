import React, { useContext } from "react";
import "./ActiveTask.css";

const ActiveTask = ({ data, get, set, index }) => {
  const markdone = (data, get, set, index) => {
    data.active = false;
    data.completed = true;
    get.taskCounts.active -= 1;
    get.taskCounts.completed += 1;

    set({
      ...get,
      taskCounts: get.taskCounts,
      tasks: [...get.tasks],
    });
  };
  const markfail = (data, get, set, index) => {
    data.failed = true;
    data.active = false;
    get.taskCounts.failed += 1;
    get.taskCounts.active -= 1;

    set({
      ...get,
      taskCounts: get.taskCounts,
      tasks: [...get.tasks],
    });
  };
  return (
    <div className="active">
      <div className="top">
        <div className="cat"> {data.category}</div>

        <div>{data.taskDate}</div>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="buttons ">
        <button
          onClick={() => markdone(data, get, set, index)}
          className="passed"
        >
          ✔️
        </button>
        <button
          onClick={() => markfail(data, get, set, index)}
          className="fail"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;
