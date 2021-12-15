import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Task from "./Task";
import RadioInput from "./RadioInput";

const Column = ({
  column,
  index,
  tasks,
  showHide,
  open,
  addTask,
  userInput,
  setUserInput,
  setTaskPriority,
  isChecked,
  taskPriority,
  hoveredColumnName,
  handleDragStart,
  handleOver,
  handleDrop,
  deleteTask,
}) => {
  return (
    <div
      key={column.name}
      className={"column " + column.name}
      style={{
        minHeight:
          hoveredColumnName === column.name
            ? (tasks.filter((task) => task.status === column.name).length + 1) *
              150
            : 75,
        borderColor: column.color,
      }}
      onDragOver={(e) => handleOver(e, column.name)}
      onDrop={(e) => handleDrop(e, column.name)}
    >
      <h3 className="column-title">
        {column.title}
        {index === 0 && " 🚀"}
      </h3>

      <div className="tasks-list">
        {tasks
          .filter((task) => task.status === column.name)
          .map((task, index) => (
            <Task
              index={index}
              key={index}
              task={task}
              deleteTask={deleteTask}
              handleDragStart={handleDragStart}
            />
          ))}
      </div>

      {index === 0 && (
        <>
          <button className="button button-link add-toggle" onClick={showHide}>
            Add task
            {!open ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
          </button>
          {open && (
            <>
              <div className="priority-options">
                <RadioInput
                  setTaskPriority={setTaskPriority}
                  taskPriority={taskPriority}
                  name="priority"
                  value="low"
                  label="low"
                  isChecked={taskPriority === "low"}
                  onChange={() => setTaskPriority("low")}
                />
                <RadioInput
                  setTaskPriority={setTaskPriority}
                  taskPriority={taskPriority}
                  name="priority"
                  value="med"
                  label="medium"
                  isChecked={taskPriority === "med"}
                  onChange={() => setTaskPriority("med")}
                />
                <RadioInput
                  setTaskPriority={setTaskPriority}
                  taskPriority={taskPriority}
                  name="priority"
                  value="high"
                  label="high"
                  isChecked={taskPriority === "high"}
                  onChange={() => setTaskPriority("high")}
                />
              </div>

              <form className="add-form">
                <textarea
                  type="text"
                  placeholder="Write your task"
                  onChange={(event) => {
                    setUserInput(event.target.value);
                  }}
                  value={userInput}
                ></textarea>

                <button
                  type="button"
                  className="button button-add"
                  onClick={addTask}
                >
                  Add
                </button>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Column;
