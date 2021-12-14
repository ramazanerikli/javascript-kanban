import React from "react";

const Task = ({
  task,
  index,
  handleDragStart,
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
      </div>
      <div className="task-content">{task.text}</div>
    </div>
  );
};

export default Task;
