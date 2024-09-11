import React, { useState } from "react";

const DraggableComp = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    // document.getElementById(e.target.id).classList.add("Active");

    const { offsetLeft, offsetTop } = e.target;
    setOffset({
      x: e.clientX - offsetLeft,
      y: e.clientY - offsetTop,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="draggable-con bg-secondary p-3 position-relative"
      style={{ height: "250px" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="draggable-cardd bg-info w-25 position-absolute "
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
        id="d1"
      >
        Drag me!
      </div>
    </div>
  );
};

export default DraggableComp;
