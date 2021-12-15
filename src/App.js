import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";
import User from "./components/User";
import Columns from "./components/Columns";

function App() {
  const [open, setOpen] = useState(false);

  const [showIcon, setShowIcon] = useState(false);

  let localTasks;
  if (localStorage.getItem('tasks')) {
    localTasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localTasks = [
      {
        id: 1,
        text: "Project structure",
        priority: "High Priority",
        status: "backlog",
      },
      {
        id: 2,
        text: "Visual implementation",
        priority: "Med Priority",
        status: "backlog",
      },
      {
        id: 3,
        text: "Blog Component",
        priority: "Low Priority",
        status: "backlog",
      },
    ];
  }

  const saveToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const [tasks, setTasks] = useState(localTasks);

  const [columns, setColumns] = useState([
    { id: 1, name: "backlog", title: "Backlog", color: "#c781ff" },
    { id: 2, name: "in-progress", title: "In Progress", color: "#ff9985" },
    { id: 3, name: "done", title: "Done", color: "#7ed492" },
  ]);

  const [draggingItemId, setDraggingItemId] = useState(-1);
  const [hoveredColumnName, setHoveredColumnName] = useState("");
  const [draggingStartedColumnName, setDraggingStartedColumnName] =
    useState("");

  const handleDragStart = (id, columnName) => {
    setDraggingItemId(id);
    setDraggingStartedColumnName(columnName);
  };

  const handleOver = (e, name) => {
    e.stopPropagation();
    e.preventDefault();

    if (name !== draggingStartedColumnName) {
      setHoveredColumnName(name);
    }
  };

  const handleDrop = (e, name) => {
    const newArray = [];
    for (const task of tasks) {
      if (task.id === draggingItemId) {
        console.log(name);
        newArray.push({ ...task, status: name });
      } else {
        newArray.push(task);
      }
    }

    setTasks(newArray);
    setHoveredColumnName("");
    saveToLocalStorage(newArray);
  };

  const [userInput, setUserInput] = useState();

  const [taskPriority, setTaskPriority] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const addTask = (event) => {
    event.preventDefault();
    if (!userInput) return;
    if (!taskPriority) return;
    const newTask = {
      id: uuidv4(),
      text: userInput,
      priority: taskPriority + " priority",
      status: "backlog",
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setUserInput("");
    setTaskPriority("");
    saveToLocalStorage(newTasks);
  };

  const deleteTask = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
    saveToLocalStorage(newList);
  }

  return (
    <div className="app">
      <div className="app-header">
        <Search />
        <User />
      </div>
      <div className="app-content">
        <div className="board">
          <Columns
            columns={columns}
            tasks={tasks}
            showHide={() => setOpen(!open)}
            open={open}
            userInput={userInput}
            setUserInput={setUserInput}
            addTask={addTask}
            setTaskPriority={setTaskPriority}
            isChecked={isChecked}
            taskPriority={taskPriority}
            deleteTask={deleteTask}
            showIcon={showIcon}
            setShowIcon={setShowIcon}

            draggingItemId={draggingItemId}
            hoveredColumnName={hoveredColumnName}
            draggingStartedColumnName={draggingStartedColumnName}

            setDraggingItemId={setDraggingItemId}
            setHoveredColumnName={setHoveredColumnName}
            setDraggingStartedColumnName={setDraggingStartedColumnName}

            handleDragStart={handleDragStart}
            handleOver={handleOver}
            handleDrop={handleDrop}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
