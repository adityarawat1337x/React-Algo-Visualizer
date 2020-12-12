import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import { useSpring, animated } from "react-spring";
import { Transition } from "react-spring/renderprops";

function Bars3(props) {
  let { array } = props;
  let style = {
    gridTemplateColumns: `repeat(${props.val},1fr)`,
  };
  const boxRef = useRef(null);

  const duhh = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      <div ref={boxRef} className="box" style={style}>
        {array.map((val, index) => (
          <animated.li
            style={{
              config: { duration: 1000 },
              ...duhh,
              height: `${25 + val * 5}px`,
            }}
            key={index}
            className="bar"
          ></animated.li>
        ))}
      </div>
    </>
  );
}

export default Bars3;
