import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="position-relative d-flex align-items-center">
      <span className="position-absolute ">{props.label}</span>
      <p
        className={`m-0 ${
          props.index > 0 && props.index < 5
            ? "inprogress"
            : props.index === 5
            ? "completed"
            : ""
        }`}
        style={{ width: `${props.index * 20}%` }}
      ></p>
    </div>
  );
};

export default ProgressBar;
