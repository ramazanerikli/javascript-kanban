import React from "react";

const RadioInput = ({
  name,
  value,
  label,
  setTaskPriority,
  taskPriority,
  isChecked,
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        id={value}
        checked={isChecked}
        onChange={(event) => setTaskPriority(event.target.value)}
      />
      <label htmlFor={value} className={value + "-tag"}>
        {label}
      </label>
    </>
  );
};

export default RadioInput;
