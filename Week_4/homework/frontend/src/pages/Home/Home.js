import "./style.css";
import { useEffect, useState, Fragment } from "react";
import ListItem from "././components/ListItem/ListItem.js";
export default function Home() {
  const [tasklist, setTaskList] = useState([])
  const [tasks, setTask] = useState(0);
  const [done, addCompleted] = useState([]);

  function addTask(task) {
    if (!tasklist.includes(task)) {
      setTaskList(tasklist => [tasklist => tasklist.concat(task)])
      setTask(tasks => tasks + 1)
    }
    else {

    }
  }

  return (
    <Fragment>
      <h1>You have {tasks} tasks left to do  </h1>
      <input id="taskname" type="text" placeholder="Type your task here"></input>
      <button id="add" type="button" onClick={() => addTask(taskname.type)}>Add</button>
      <h1>To Do</h1>
      <ul id="todo">
        {
          tasklist.map(task => {
            return <li>{task}</li>
          })
        }
      </ul>
      <br></br>
      <h1>Done</h1>
      <ListItem todo={tasklist}></ListItem>
    </Fragment>
  );
}
