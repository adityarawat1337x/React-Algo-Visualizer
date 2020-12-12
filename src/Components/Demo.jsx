// import React from "react";
// import { useSpring, animated, useTransition } from "react-spring";
// import { Transition } from "react-spring/renderprops";
// import { useState } from "react";

// function Demo() {
//   const [items, set] = useState([
//     { text: 1, key: 1 },
//     { text: 2, key: 2 },
//     { text: 3, key: 3 },
//     { text: 4, key: 4 },
//     { text: 5, key: 5 },
//   ]);

//   const transitions = useTransition(items, (item) => item.key, {
//     from: { transform: "translate3d(0,-40px,0)" },
//     enter: { transform: "translate3d(0,0px,0)" },
//     leave: { transform: "translate3d(0,-40px,0)" },
//   });
//   return transitions.map(({ item, props, key }) => (
//     <animated.div key={key} style={props}>
//       {item.text}
//     </animated.div>
//   ));
// }

// export default Demo;

import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import shuffle from "lodash/shuffle";
import data from "./data";
import "./Style.css";

function Demo() {
  const [rows, set] = useState(data);
  useEffect(() => void setInterval(() => set(shuffle), 2000), []);

  let height = 0;
  const transitions = useTransition(
    rows.map((data) => ({ ...data, y: (height += data.height) - data.height })),
    (d) => d.name,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  );

  return (
    <div class="list" style={{ height }}>
      {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
        <animated.div
          key={key}
          class="card"
          style={{
            zIndex: data.length - index,
            transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
            ...rest,
          }}
        >
          <div class="cell">
            <div class="details" style={{ backgroundImage: item.css }} />
          </div>
        </animated.div>
      ))}
    </div>
  );
}

export default Demo;
