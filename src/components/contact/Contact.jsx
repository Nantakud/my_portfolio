import "./contact.scss";
import { FaLinkedinIn, FaGithub, FaCodepen, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact_wrapper">
      <div className="left">
        <img
          src="assets/handshake.svg"
          alt="two people shaking thier hands"
        ></img>
      </div>
      <div className="right">
        <span className="title">Get in touch</span>
        <ul className="social">
          <li>
            <a href="mailto:francesco.vacca.au@gmail.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/francesco-vacca-it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nantakud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/Francesco-Vacca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCodepen />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
