import React from "react";
import { useState, useEffect } from "react";
import Graph from "./graph";

function Plot(props) {
  let { val } = props;
  const [Data, setData] = useState([]);
  const [SwapData, setSwapData] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
    setData([...numToObjectData(val)]);
  }, [val]);

  useEffect(() => {
    window.onload = function () {
      var button = document.getElementById("button");
      setInterval(function () {
        button.click();
      }, 1);
    };
  }, []);

  const numToObjectData = () => {
    var barsData = [];
    let data = [];
    for (let i = 0; i < val; i++) data[i] = Math.floor(Math.random() * 101);
    data.forEach((element, index) => {
      barsData.push({ x: index + 1, y: element });
    });
    return [barsData, data];
  };

  const arrayToObjectData = (data) => {
    var barsData = [];
    data.forEach((element, index) => {
      barsData.push({ x: index + 1, y: element });
    });
    return [barsData, data];
  };

  const clickHandler = () => {
    console.log(Data[0], Data[1]);
    let array = [];
    let n = Data[1].length;
    let arr = Data[1];
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n - i - 1; j++)
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          array.push(arrayToObjectData(arr)[0]);
        }
    setSwapData([...array]);
  };

  const clickHandler2 = () => {
    setcount(count + 1);
  };

  if (SwapData.length === 0)
    return (
      <>
        <Graph Data={Data[0]} />
        <button id="button" onClick={clickHandler}>
          Sort
        </button>
      </>
    );
  else {
    return (
      <>
        <Graph Data={[...SwapData[count]]} />
        <button id="button" onClick={clickHandler2}>
          Sort
        </button>
      </>
    );
  }
}

export default Plot;
