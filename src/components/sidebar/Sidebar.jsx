import { Link } from "react-router-dom";
import "./sidebar.css";

export default function sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}
