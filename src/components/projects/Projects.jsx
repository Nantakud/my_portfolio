import "./projects.scss";
import { projects_data } from "./projects_data.js";
import Project from "../project/Project";
import Slider from "../slider/Slider";
import { useState } from "react";

export default function Projects() {
  const [project, setProject] = useState(1);

  return (
    <div className="projects_wrapper">
      <Project project={projects_data[project]} />
      <Slider setProject={setProject} />
    </div>
  );
}
