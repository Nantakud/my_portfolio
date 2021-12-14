import "./project.scss";

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
          {project.stack.map((stack) => {
            return <div className="stack">{stack}</div>;
          })}
        </div>
        <div className="description">
          <div className="text">{project.description}</div>
        </div>
      </div>
    </div>
  );
}
