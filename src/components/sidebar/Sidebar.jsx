import { Link } from "react-router-dom";
import "./sidebar.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <i className="arrow" onClick={() => setIsOpen(!isOpen)}>
        <FaChevronLeft />
      </i>
      {isOpen && (
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      )}
    </div>
  );
}
