import { Link } from "react-router-dom";
import "./sidebar.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <i className="arrow" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
      </i>
      {isOpen && (
        <div className="links">
          <Link to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </Link>
        </div>
      )}
    </div>
  );
}
