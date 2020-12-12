import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import history from "./history";
import Circle from "./Circle";

function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const homeChild = homeRef.current.children;
    const style = [];
    for (let x = 0; x < homeChild.length; x++) {
      style.push(homeChild[x].style);
    }

    let pos = [];
    for (let x = 0; x < homeChild.length; x++) {
      pos.push(homeChild[x].getBoundingClientRect());
    }
    console.log(pos);

    console.log(style);
    document.addEventListener("mousemove", (e) => {
      for (let i = 0; i < style.length; i++) {
        style[i].top = `${pos[i].top - (i * e.clientY) / 200}px`;
        style[i].left = `${pos[i].left - (i * e.clientX) / 200}px`;
      }
      // if (homeRef.current.style) {
      //   homeRef.current.style.top = `${XY[0] - e.clientY / 100}px`;
      //   homeRef.current.style.left = `${XY[1] - e.clientX / 100}px`;
      // }
    });
  }, []);

  return (
    <div className="home" ref={homeRef}>
      <h1 className="heading">Sort-Visualizer</h1>
      <div className="btndiv">
        <button className="btn" onClick={() => history.push("/ins")}>
          Insertion Sort
        </button>
        <button className="btn" onClick={() => history.push("/bub")}>
          Bubble Sort
        </button>
        <button className="btn" onClick={() => history.push("/sel")}>
          Selection Sort
        </button>
      </div>
      <Circle xy={[60, 15]} size={100} />
      <Circle xy={[20, 70]} size={50} />
      <Circle xy={[70, 75]} size={80} />
    </div>
  );
}

export default Home;
