import "./contact.scss";
import { FaLinkedinIn, FaGithub, FaCodepen, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact_wrapper">
      <div className="wave_container">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container">
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
    </div>
  );
}
