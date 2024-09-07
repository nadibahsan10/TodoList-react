import React from "react";
import "./List.css";

const List = ({ id, task, time }) => {
  return (
    <div className="card">
      <h1 style={{ margin: "0 20px" }}>{id}</h1>
      <p>{task}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default List;
