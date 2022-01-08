import { useState, useEffect } from "react";

import "./splash.scss";

let technologies = [
  "assets/stack/angular.svg",
  "assets/stack/javascript.svg",
  "assets/stack/php.svg",
  "assets/stack/react.svg",
  "assets/stack/typescript.svg",
];

export default function Splash() {
  const [tech, setTech] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      tech > technologies.length - 2 ? setTech(0) : setTech(tech + 1);
      return function cleanup() {
        clearTimeout(timeout);
      };
    }, 2500);
  }, [tech]);

  return (
    <div className="splash_wrapper">
      <section className="top">
        <div className="left">
          <div className="image">
            <img src="assets/genie.png" alt="dev" />
            <div className="magic">
              <img src={technologies[tech]} alt="tech" />
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Francesco Vacca</h1>
          <p>Web Dev and Software Engineer</p>
        </div>
      </section>
      <section className="bottom">
        <p>It's a kind of magic</p>
      </section>
    </div>
  );
}
