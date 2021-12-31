import "./project.scss";
import { FaGlobe, FaGithubSquare } from "react-icons/fa";
import Details from "../details/Details";

export default function Project({ project }) {
  return (
    <div className="project_container">
      <header className="title">{project.title}</header>
      <div className="video-responsive">
        <iframe
          className="video"
          src={project.video}
          frameboard="0"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          title={project.title}
        ></iframe>
      </div>

      <div className="info">
        <div className="stack_container">
          <header className="text">STACK</header>
          <div className="img_container">
            {project.stack.map((tech, index) => {
              return (
                <i className="stack" key={index}>
                  <img src={tech} alt="" />
                </i>
              );
            })}
          </div>
        </div>
        <div className="description">
          <div className="text_container">
            <p className="text">{project.description}</p>
          </div>
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
            {project.visit && (
              <div className="visit link">
                <a
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="details">
        <Details></Details>
      </div>
    </div>
  );
}
