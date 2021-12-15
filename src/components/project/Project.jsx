import "./project.scss";
import { FaGlobe, FaGithubSquare } from "react-icons/fa";

export default function Project({ project }) {
  return (
    <div className="project_container">
      <iframe
        className="video"
        src={project.video}
        frameboard="0"
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
      ></iframe>
      <div className="right">
        <div className="stack_container">
          <div className="text">STACK</div>
          <div className="img_container">
            {project.stack.map((stack) => {
              return (
                <div className="stack">
                  <img src={stack} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="description">
          <div className="links_container">
            <div className="source link">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </div>
            <div className="visit link">
              <a href={project.visit} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <div className="text_container">
            <div className="text">{project.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
