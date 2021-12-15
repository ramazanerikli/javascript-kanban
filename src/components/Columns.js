import React from "react";
import Column from "./Column";

const Columns = ({
  columns,
  tasks,
  showHide,
  open,
  addTask,
  userInput,
  setUserInput,
  setTaskPriority,
  isChecked,
  taskPriority,
  draggingItemId,
  hoveredColumnName,
  setDraggingItemId,
  setHoveredColumnName,
  setDraggingStartedColumnName,
  draggingStartedColumnName,
  handleDragStart,
  handleOver,
  handleDrop,
  deleteTask,
}) => {
  return (
    <>
      {columns.map((column, index) => {
        return (
          <Column
            column={column}
            index={index}
            tasks={tasks}
            showHide={showHide}
            open={open}
            addTask={addTask}
            userInput={userInput}
            setUserInput={setUserInput}
            setTaskPriority={setTaskPriority}
            isChecked={isChecked}
            taskPriority={taskPriority}
            deleteTask={deleteTask}

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
        );
      })}
    </>
  );
};

export default Columns;
