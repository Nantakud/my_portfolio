import "./slider.scss";
import { projects_data } from "../projects/projects_data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ setProject }) {
  const [shownProjects, setShownProjects] = useState([
    projects_data[0],
    projects_data[1],
    projects_data[2],
  ]);

  function handleLeftClick() {
    let index;
    let newProjects = [];
    for (let i = 0; i < 3; i++) {
      index = shownProjects[i].id;
      index += 3;
      if (index > projects_data.length - 1) {
        let offset = index - projects_data.length;
        index = 0 + offset;
      }
      newProjects.push(projects_data[index]);
    }
    return newProjects;
  }

  function handleRightClick() {
    let index;
    let newProjects = [];
    for (let i = 0; i < 3; i++) {
      index = shownProjects[i].id;
      index -= 3;
      if (index < 0) {
        index = projects_data.length + index;
      }
      newProjects.push(projects_data[index]);
    }
    return newProjects;
  }

  return (
    <div className="slider_container">
      <header>Other Projects</header>
      <section className="images">
        <div className="left">
          <FaChevronLeft
            className="chevron"
            onClick={() => {
              let newProjects = handleLeftClick();
              setShownProjects(newProjects);
            }}
          />
        </div>
        <div className="center">
          {shownProjects.map(({ id, thumb, title }) => {
            return (
              <div
                key={id}
                className="slide"
                onClick={() => {
                  setProject(id);
                }}
              >
                <img src={thumb} alt={title} />
              </div>
            );
          })}
        </div>
        <div className="right">
          <FaChevronRight
            className="chevron"
            onClick={() => {
              let newProjects = handleRightClick();
              setShownProjects(newProjects);
            }}
          />
        </div>
      </section>
    </div>
  );
}
