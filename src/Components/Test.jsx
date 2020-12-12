import React, { useState, useEffect, useRef } from "react";

function Test() {
  const userref = useRef(null);

  return (
    <>
      <button onClick={() => (userref.current.style.backgroundColor = "red")}>
        yeah
      </button>
      <div ref={userref}>Bitchess</div>
    </>
  );
}

export default Test;
