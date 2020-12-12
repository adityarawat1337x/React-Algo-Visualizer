import React from "react";
import "./StyleExtras.css";

function Circle(props) {
  const { xy, size } = props;
  return (
    <div
      className="circle"
      style={{
        top: `${xy[0]}%`,
        left: `${xy[1]}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
}

export default Circle;
