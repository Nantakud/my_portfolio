import "./projects.scss";
import { projects_data } from "./projects_data.js";
import Project from "../project/Project";
import Slider from "../slider/Slider";

export default function Projects() {
  return (
    <div className="projects_wrapper">
      <Project />
      <Slider />
    </div>
  );
}
