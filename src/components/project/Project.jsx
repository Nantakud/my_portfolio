import "./project.scss";

export default function Project({ project }) {
  return (
    <div className="project_container">
      <div className="video">{project.video}</div>
      <div className="right">
        <div className="stack">{project.stack[0]}</div>
        <div className="description">{project.description}</div>
      </div>
    </div>
  );
}
