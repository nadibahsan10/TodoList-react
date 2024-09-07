import React, { useState, useRef } from "react";
import "./wall.css";
import List from "./List";

function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour clock to 12-hour clock
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set it to 12 (for midnight and noon)

  // Add leading zero to minutes if needed
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;

  // Format the time string
  const currentTime = `${hours}:${minutesFormatted} ${ampm}`;
  return currentTime;
}

const Wall = () => {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef([]);
  const handleAdd = () => {
    const task = taskRef.current.value;
    const time = getCurrentTime();
    setTasks((prev) => {
      return [...prev, { task, time }];
    });
  };
  return (
    <div className="parent">
      <div className="child">
        <h1 style={{ textAlign: "center" }}>Todo List</h1>
        <div className="addition">
          <input ref={taskRef} type="text" name="" id="" />
          <button type="button" onClick={handleAdd}>
            Add Task
          </button>
        </div>
        <div className="taskList">
          {tasks.map((item, index) => {
            return <List id={index + 1} task={item.task} time={item.time} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Wall;
