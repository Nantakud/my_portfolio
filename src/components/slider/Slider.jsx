import "./slider.scss";
import { projects_data } from "../projects/projects_data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ setProject }) {
  return (
    <div className="slider_container">
      <header>Other Projects</header>
      <section className="images">
        <FaChevronLeft />
        {projects_data.map((project) => {
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
        <FaChevronRight />
      </section>
    </div>
  );
}
