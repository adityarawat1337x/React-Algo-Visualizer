import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import { useSpring, animated } from "react-spring";
import { Transition } from "react-spring/renderprops";

function Bars(props) {
  const boxRef = useRef(null);
  const { Delay, array, val, algo } = props;
  var timeouts = [];

  let style = {
    gridTemplateColumns: `repeat(${val},2fr)`,
  };

  useEffect(() => {
    reset(val, "#fff");
    timeouts.forEach((e) => clearTimeout(e));
    return () => {
      timeouts.forEach((e) => clearTimeout(e));
    };
    // crazysam92
    // 5Jan1992
  }, [array, Delay]);

  const duhh = useSpring({
    config: { duration: 1000 },
    to: {
      opacity: 1,
    },
    animationDelay: 300,
    from: {
      opacity: 0,
    },
  });

  const reset = (n, defColor) => {
    const bars = boxRef.current.children;
    const style = [];
    for (let x = 0; x < bars.length; x++) {
      style.push(bars[x].style);
    }
    if (style.length)
      for (let f = 0; f < n; f++) {
        setTimeout(() => {
          style[f].backgroundColor = defColor;
        }, 2 * f);
      }
  };

  const animater = (
    swapArray,
    swapColor1,
    swapColor2,
    lastColor,
    defColor,
    n
  ) => {
    const bars = boxRef.current.children;
    let ctr = 0;
    let last = n - 1;
    const style = [];
    for (let x = 0; x < bars.length; x++) {
      style.push(bars[x].style);
    }

    //reset
    reset(n, "#fff");

    for (let i = 0; i < swapArray.length; i++, ctr++) {
      timeouts.push(
        //blue and white appear
        setTimeout(() => {
          style[swapArray[i][0]].backgroundColor = swapColor1;
          style[swapArray[i][1]].backgroundColor = swapColor2;
        }, Delay * ctr)
      );
      timeouts.push(
        //both swaps height
        setTimeout(() => {
          let tmp = style[swapArray[i][0]].height;
          style[swapArray[i][0]].height = style[swapArray[i][1]].height;
          style[swapArray[i][1]].height = tmp;
        }, Delay * ctr)
      );
      timeouts.push(
        //both turns white
        setTimeout(() => {
          style[swapArray[i][0]].backgroundColor = defColor;
          style[swapArray[i][1]].backgroundColor = defColor;
          if (i === swapArray.length - 1) {
            for (let f = 0; f < n; f++) {
              setTimeout(() => {
                style[n - f - 1].backgroundColor = lastColor;
                console.log("ni chala", last);
                // style[n - f - 1].boxShadow =
                //   "1px 1px 10px #ec4e76, -1px -1px 10px #ec4e76";
              }, 10 * f);
            }
          }
        }, Delay * ctr + Delay / 2)
      );
    }
  };

  const clickHandler = (e) => {
    let n = array.length;
    let arr = [...array];
    let swapArray = [];

    switch (algo) {
      case "ins":
        for (let i = 1; i < n; i++) {
          let key = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            swapArray.push([j + 1, j]);
            j = j - 1;
          }
          arr[j + 1] = key;
        }
        break;
      case "bub":
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
              let tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
              swapArray.push([j, j + 1]);
            }
        }
        break;
      case "sel":
        for (let i = 0, min_idx; i < n - 1; i++) {
          min_idx = i;
          for (let j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx]) {
              swapArray.push([min_idx, j]);
              min_idx = j;
            }
          swapArray.push([min_idx, i]);
          let tmp = arr[i];
          arr[i] = arr[min_idx];
          arr[min_idx] = tmp;
        }
        break;
      default:
        break;
    }
    animater(swapArray, "#4cc9f0", "#4cc9f0", "#6be4d8", "#fff", n);
  };

  return (
    <>
      <button className="sortbtn backbtn" onClick={clickHandler}>
        Sort
      </button>
      <div className="box" ref={boxRef} style={style}>
        {array.map((val, index) => (
          <animated.li
            style={{
              ...duhh,
              backgroundColor: "#fff",
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
