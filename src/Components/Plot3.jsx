import React from "react";
import { useState, useEffect } from "react";
import Bars3 from "./Bars3";
import Graph from "./graph";

function Plot3(props) {
  let { val } = props;
  const [Data, setData] = useState([]);
  const [SwapData, setSwapData] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
    setData([...numToObjectData(val)]);
  }, [val]);

  const numToObjectData = () => {
    let data = [];
    for (let i = 0; i < val; i++) data[i] = Math.floor(Math.random() * 101);
    return data;
  };

  const clickHandler = () => {
    let array = [];
    var n = Data.length;
    var arr = [...Data];
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n - i - 1; j++)
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          array.push([j, j + 1]);
        }
    setSwapData([...array]);
  };

  return (
    <>
      <Bars3 array={Data} val={val} />
      <button id="button" onClick={clickHandler}>
        Sort
      </button>
    </>
  );
}

export default Plot3;
