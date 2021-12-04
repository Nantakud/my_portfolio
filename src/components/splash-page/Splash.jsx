import { useState } from "react";
import "./splash.css";

let sentences = [
  "Ciao I'm Francesco and I like coding",
  "Take a look at my projects",
  "It's a kind of magic",
  "Phenomenal cosmic powers ... Itty bitty living space.",
];

export default function Splash() {
  const [timer, setTimer] = useState(0);
  console.log(timer);
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
