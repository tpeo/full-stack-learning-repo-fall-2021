import "./style.css";
import ListItem from "../../components/ListItem/ListItem.js";
import { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function Home() {
  const history = useHistory();

  // Require Authentication
  useEffect(() => {
    async function loadCredentials() {
      // If the token doesn't exist, do not log in
      if (!localStorage.getItem("@token")) {
        history.push("/login");
      } else {
        const request = await fetch("http://localhost:4000/auth", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("@token"),
          },
        });

        // Get Status
        const status = await request.status;

        // If token is invalid, push to login
        if (status != 200) {
          history.push("/login");
        }

        // Get Name from JWT Token
        const decode = jwtDecode(localStorage.getItem("@token"));
        setName(decode.name);
      }
    }
    async function loadTodos() {
      const request = await fetch("http://localhost:4000/todos", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      });
      const resp = await request.json();
      const status = await request.status;

      // Success, load all the todos
      if (status == 200) {
        const data = resp.data;
        const todos = [];
        const completed = [];

        data.map((item) => {
          if (!item.status) {
            todos.push(item);
          } else {
            completed.push(item);
          }
        });
        setDone(completed);
        setToDo(todos);
      }
    }
    loadCredentials().then(() => {
      loadTodos();
    });
  }, []);

  // name: username/name associated with the google account
  const [name, setName] = useState("");

  // toDo: an array of tasks that need to be done; setToDo: a function that allows you to modify the task variable.
  const [toDo, setToDo] = useState([]);

  // done: an array of tasks that are done; setToDo: a function that allows you to modify the task variable
  const [done, setDone] = useState([]);

  // taskName: a string of the name of task that you want to add; setToDo: a function that allows you to edit the taskName
  const [taskName, setTaskName] = useState();

  // addTask: adds a task to toDo by adding the taskName
  async function addTask() {
    // makes sure that taskName is not blank
    if (taskName) {
      // makes sure that taskName is a new task
      toDo.includes(taskName)
        ? alert("Task already exists")
        : setToDo(toDo.concat(taskName));
      setTaskName("");

      // Call Backend Function
      const request = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
        body: JSON.stringify({ description: taskName }),
      });
      // Get Status and Response
      const resp = await request.json();
      const status = await request.status;

      // Update the List
      if (status == 200) {
        setToDo(toDo.concat(resp.data));
      }
    }
  }

  // finishTask: finishes a task by removing it from the toDo and adding it to the done
  async function finishTask(index) {
    const finishedTask = toDo[index];

    // Call Backend Function
    const request = await fetch("http://localhost:4000/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
      body: JSON.stringify({ id: finishedTask.id }),
    });

    // Get Status and Response
    const resp = await request.json();
    const status = await request.status;

    // to change state with an array you can use filter, which returns in a new array
    setToDo(toDo.filter((task) => task !== finishedTask));
    // to add an item to an state that is an array you can use concat, which returns a new array
    setDone(done.concat(finishedTask));
  }

  async function undoTask(index) {
    const unDoneTask = done[index];

    // Call Backend Function
    const request = await fetch("http://localhost:4000/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
      body: JSON.stringify({ id: unDoneTask.id }),
    });

    // Get Status and Response
    const resp = await request.json();
    const status = await request.status;

    if (status == 200) {
      // to remove an item from an state that is an array you must first make a copy and then splice the copy and then set the copy as the new state
      setDone(done.filter((task) => task !== unDoneTask));
      // to add an item to an state that is an array you can use concat, which returns a new array
      setToDo(toDo.concat(unDoneTask));
    }
  }

  return (
    <Fragment>
      {!!toDo.length ? (
        <h2 class="summary">
          {name}, you have
          {toDo.length > 1
            ? " " + toDo.length + " tasks "
            : " " + toDo.length + " task "}
          left to do
        </h2>
      ) : (
        <h2 class="summary">Congrats {name}! </h2>
      )}
      <div className="input-container">
        <input
          className="input-task"
          value={taskName}
          placeholder="Type your task here"
          onChange={(event) => setTaskName(event.target.value)}
        ></input>
        <button class="add-button" onClick={() => addTask()}>
          Add
        </button>
      </div>
      <div className="to-do-container">
        <h2>To Do</h2>
        <ul>
          {toDo.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              task={task.description}
              type="todo"
              finishHandler={finishTask}
              undoHandler={undoTask}
            ></ListItem>
          ))}
        </ul>
      </div>
      <div className="done-container">
        <h2>Done</h2>
        <ul>
          {done.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              task={task.description}
              type="done"
              finishHandler={finishTask}
              undoHandler={undoTask}
            ></ListItem>
          ))}
        </ul>
      </div>
      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem("@token");
          history.push("/login");
        }}
      >
        Logout
      </button>
    </Fragment>
  );
}
