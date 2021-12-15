import React from "react";
import { VscClose } from "react-icons/vsc";

const Task = ({
  task,
  index,
  handleDragStart,
  deleteTask,
  showIcon,
  setShowIcon,
}) => {
  const loweredString = task.priority.toLowerCase();
  const compressedString = loweredString.replace(" ", "-");

  return (
    <div
      key={index}
      className="task"
      draggable="true"
      onDragStart={() => handleDragStart(task.id, task.status)}
    >
      <div className="task-header">
        <div className={"task-priority " + compressedString}>
          {task.priority}
        </div>
        <div className="delete-icon">
          <VscClose
              onClick={() => deleteTask(task.id)}
              style={{ color: "#b7bec7", fontSize: 20 }}
            ></VscClose>
        </div>
      </div>
      <div className="task-content">{task.text}</div>
    </div>
  );
};

export default Task;
