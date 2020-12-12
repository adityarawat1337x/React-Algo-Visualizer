import React, { useState, useEffect } from "react";
import Bars2 from "./Bars2";
import Bars from "./Bars";
import Plot3 from "./Plot3";
import Sort from "./Sort";
import history from "./history";
import "./Style.css";

function Slider(props) {
  const [val, setVal] = useState(100);
  const [array, setArray] = useState([]);
  const [Delay, setDelay] = useState(50);

  const valChangeHandler = (e) => {
    var bars = [];
    for (let i = 0; i < e.target.value; i++)
      bars[i] = Math.floor(Math.random() * 101);
    setVal(e.target.value);
    setArray([...bars]);
  };

  useEffect(() => {
    valChangeHandler({ target: { value: 50 } });
  }, []);

  const speedChangeHandler = (e) => {
    setDelay(500 - e.target.value);
    // valChangeHandler({ target: { value: val } });
    setVal(val);
  };

  return (
    <div className="container">
      <button className="backbtn" onClick={() => history.push("/")}>
        Back
      </button>
      <span className="datatext">
        <span className="text1">Data Set{"  "}</span>
        <input
          type="range"
          step="1"
          min="50"
          max="150"
          className="slider"
          defaultValue="100"
          onChange={valChangeHandler}
        />
      </span>
      {/* <Plot3 val={val} /> */}
      <span className="datatext">
        <span className="text1 text2">Speed{"  "}</span>
        <input
          type="range"
          step="5"
          min="1"
          max="500"
          className="slider2"
          defaultValue="20"
          onChange={speedChangeHandler}
        ></input>
      </span>
      <Bars array={array} Delay={Delay} val={val} algo={props.algo} />
    </div>
  );
}

export default Slider;
