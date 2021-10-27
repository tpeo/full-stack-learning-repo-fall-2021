import "./style.css";
import { useEffect, useState, Fragment } from "react";

export default function Home() {
  const tasklist = []
  const [tasks, setTask] = useState(tasklist);
  const [done, addCompleted] = useState([]);
  const []
  function handleChange() {
    addCompleted()
  }
  function addTask() {
    var tempTasks = tasks;
    tempTasks = tasks + 1;
    setTask(tempTasks)
  }

  return (
    <Fragment>
      <h1>You have {tasks} tasks left to do  </h1>
      <input id="taskname" type="text" value="name" placeholder="Type your task here"></input>
      <button id="add" type="button" onClick={() => addTask()}>Add</button>
      <h1>To Do</h1>
      <ul id="todo"></ul>
      <br></br>
      <h1>Done</h1>
      <ul id="done"></ul>
    </Fragment>
  );
}
