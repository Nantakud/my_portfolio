import { useState, useEffect } from "react";

import "./splash.scss";

let sentences = [
  "Ciao I'm Francesco and I like coding",
  "Take a look at my projects",
  "It's a kind of magic",
  "Phenomenal cosmic powers ... Itty bitty living space.",
];

export default function Splash() {
  const [timer, setTimer] = useState(0);
  const [color, setColor] = useState("white");

  useEffect(() => {
    const timeout = setTimeout(() => {
      timer > 2 ? setTimer(0) : setTimer(timer + 1);
      return function cleanup() {
        clearTimeout(timeout);
      };
    }, 2500);
  }, [timer]);

  return (
    <div className="container">
      <div className="left">
        <img src="assets/aladdin-genie.jpeg" alt="ilgienio" />
      </div>

      <div className="right">
        <p>{sentences[timer]}</p>
      </div>
    </div>
  );
}
