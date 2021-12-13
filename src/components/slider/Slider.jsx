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
        <FaChevronLeft
          onClick={() => {
            let newProjects = handleLeftClick();
            setShownProjects(newProjects);
          }}
        />
        {shownProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="slide"
              onClick={() => {
                setProject(project.id);
              }}
            >
              {project.title}
            </div>
          );
        })}
        <FaChevronRight
          onClick={() => {
            let newProjects = handleRightClick();
            setShownProjects(newProjects);
          }}
        />
      </section>
    </div>
  );
}
