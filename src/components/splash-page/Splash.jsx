import { useState, useEffect } from "react";

import "./splash.scss";

let sentences = [
  "Ciao I'm Francesco and I like coding",
  "Take a look at my projects",
  "It's a kind of magic",
  "Phenomenal cosmic powers ... Itty bitty living space.",
];

let technologies = [
  "assets/angular.svg",
  "assets/ionic.svg",
  "assets/javascript.svg",
  "assets/nodejs.svg",
  "assets/php.svg",
  "assets/react.svg",
  "assets/typescript.svg",
];

export default function Splash() {
  const [timer, setTimer] = useState(0);
  const [tech, setTech] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      timer > 2 ? setTimer(0) : setTimer(timer + 1);
      return function cleanup() {
        clearTimeout(timeout);
      };
    }, 2500);
  }, [timer]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      tech > technologies.length - 2 ? setTech(0) : setTech(tech + 1);
      return function cleanup() {
        clearTimeout(timeout);
      };
    }, 2500);
  }, [tech]);

  return (
    <div className="container">
      <div className="left">
        <img src="assets/genie.png" alt="ilgienio" />
        <div className="magic">
          <img src={technologies[tech]} alt="non funzina" />
        </div>
      </div>

      <div className="right">
        <p>{sentences[timer]}</p>
      </div>
    </div>
  );
}
