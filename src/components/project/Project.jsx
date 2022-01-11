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

      <div className="curve-wrapper">
        <div className="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
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
