import React from "react";

const Card = (props) => {
  return (
    <div className="card rounded me-3 shadow border-0">
      <img src={props.img} alt="innovative" className="rounded" />
      <div className="text-div">{props.text}</div>
    </div>
  );
};

export default Card;
