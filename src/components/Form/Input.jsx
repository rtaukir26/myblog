import React from "react";

export const Input = (props) => {
  return (
    <div className="form-grp">
      {props.isIcon && <img src={props.icon} alt={props.name} />}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export const InputRadio = (props) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
