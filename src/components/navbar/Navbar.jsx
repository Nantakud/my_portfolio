import { Link } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="links">
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
          About
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(!isOpen)}>
          Projects
        </Link>
      </div>
    </div>
  );
}
