import "./project.scss";
import { FaGlobe, FaGithubSquare } from "react-icons/fa";
import Details from "../details/Details";

export default function Project({ project }) {
  const { title, video, stack, description, source, visit, details } = project;
  return (
    <div className="project_container">
      <header className="title">{title}</header>
      <div className="video-responsive">
        <iframe
          className="video"
          src={video}
          frameboard="0"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          title={title}
        ></iframe>
      </div>

      <div className="info">
        <div className="stack_container">
          <header className="text">STACK</header>
          <div className="img_container">
            {stack.map((tech, index) => {
              return (
                <i className="stack" key={index}>
                  <img src={tech} alt="technology" />
                </i>
              );
            })}
          </div>
        </div>
        <div className="description">
          <div className="text_container">
            <p className="text">{description}</p>
          </div>
          <div className="links_container">
            <div className="source link">
              <a href={source} target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
            </div>
            {visit && (
              <div className="visit link">
                <a href={visit} target="_blank" rel="noopener noreferrer">
                  <FaGlobe />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="details">
        {Object.keys(details).map((detail, index) => {
          const { text, url, alt } = details[detail];
          return <Details key={index} text={text} url={url} alt={alt} />;
        })}
      </div>
    </div>
  );
}
