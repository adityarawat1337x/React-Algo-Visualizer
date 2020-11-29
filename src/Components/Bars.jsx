import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import { useSpring, animated } from "react-spring";
import { Transition } from "react-spring/renderprops";

function Bars(props) {
  const boxRef = useRef(null);
  const { Delay, array, val } = props;
  var timeouts = [];

  let style = {
    gridTemplateColumns: `repeat(${val},1fr)`,
  };

  useEffect(() => {
    timeouts.forEach((e) => clearTimeout(e));
    return () => {
      timeouts.forEach((e) => clearTimeout(e));
    };
  }, [array, Delay]);

  const duhh = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    animationDelay: 300,
    from: { opacity: 0 },
  });

  const clickHandler = (e) => {
    let n = array.length;
    let arr = [...array];
    let ctr = 0;
    let sortedArray = [];
    for (let i = 0; i < n; i++) sortedArray.push(false);
    const bars = boxRef.current.children;
    const style = [];
    for (let x = 0; x < bars.length; x++) {
      style.push(bars[x].style);
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++)
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          timeouts.push(
            setTimeout(() => {
              style[j].backgroundColor = "#4cc9f0";
              style[j + 1].backgroundColor = "#fff";
            }, Delay * ctr)
          );
          timeouts.push(
            setTimeout(() => {
              let tmp = style[j].height;
              style[j].height = style[j + 1].height;
              style[j + 1].height = tmp;
            }, Delay * ctr)
          );
          timeouts.push(
            setTimeout(() => {
              style[j].backgroundColor = "#f87092";
              style[j + 1].backgroundColor = "#f87092";
            }, Delay * ctr + Delay / 2)
          );
          ctr++;
        }
      sortedArray[n - 1 - i] = true;
      timeouts.push(
        setTimeout(() => {
          if (sortedArray[n - i - 1])
            style[n - i - 1].backgroundColor = "#6be4d8d7";
          style[n - i - 1].boxShadow =
            "1px 1px 20px #ec4e76, -1px -1px 20px #ec4e76";
        }, Delay * ctr)
      );
    }
  };

  return (
    <>
      <button className="sortbtn" onClick={clickHandler}>
        Sort
      </button>
      <div className="box" ref={boxRef} style={style}>
        {array.map((val, index) => (
          <animated.li
            style={{
              ...duhh,
              backgroundColor: "",
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

export default Bars;
