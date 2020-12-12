import React, { useState, useEffect } from "react";
import Slider from "./Slider";

function Container() {
  const [val, setVal] = useState(100);
  const [array, setArray] = useState([]);
    const [Delay, setDelay] = useState();
    
  const valChangeHandler = (e) => {
    var bars = [];
    for (let i = 0; i < e.target.value; i++)
      bars[i] = Math.floor(Math.random() * 101);
    setVal(e.target.value);
    setArray([...bars]);
  };
    
  const speedChangeHandler = (e) => {
    setDelay(e.target.value);
  };
    
  return (
    <div>
      <span>Data Set </span>
      <input
        type="range"
        step="1"
        min="50"
        max="150"
        className="slider"
        defaultValue="100"
        onChange={valChangeHandler}
      />
          <Slider array={array} val={val} Delay={Delay}/>
      <span>Speed </span>
      <input
        type="range"
        step="5"
        min="0"
        max="500"
        className="slider2"
        defaultValue="20"
        onChange={speedChangeHandler}
      ></input>
    </div>
  );
}

export default Container;
