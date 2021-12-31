import "./project.scss";
import { FaGlobe, FaGithubSquare } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Project({ project }) {
  const [offesetY, setOffesetY] = useState(0);
  const [active, setActive] = useState(false);
  const detailRef = useRef();
  const handleScroll = () => {
    let distance =
      detailRef.current.getBoundingClientRect().top - window.scrollY;
    if (distance < 100 || distance < 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="project_container">
      <header className="title">{project.title}</header>
      <div className="video-responsive">
        <iframe
          className="video"
          src={project.video}
          frameboard="0"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          title={project.title}
        ></iframe>
      </div>

      <div className="info">
        <div className="stack_container">
          <header className="text">STACK</header>
          <div className="img_container">
            {project.stack.map((tech, index) => {
              return (
                <i className="stack" key={index}>
                  <img src={tech} alt="" />
                </i>
              );
            })}
          </div>
        </div>
        <div className="description">
          <div className="text_container">
            <p className="text">{project.description}</p>
          </div>
          <div className="links_container">
            <div className="source link">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </div>
            {project.visit && (
              <div className="visit link">
                <a
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="details">
        <div className={`detail ${active && "active"}`} ref={detailRef}>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            neque impedit incidunt repellendus qui suscipit? Architecto
            excepturi minima et magni rerum dicta nesciunt temporibus, officiis,
            facere consequuntur omnis. Amet corporis mollitia, cumque animi
            perferendis officiis voluptates esse numquam expedita hic totam quam
            ipsam libero odio quod! Mollitia unde ut nostrum ratione
            perspiciatis suscipit vitae tempora deserunt explicabo dolorem eius
            laborum facere voluptas velit tenetur, non, iusto doloremque quis
            iure reprehenderit cum necessitatibus eligendi! Repudiandae ex
            incidunt illo rerum recusandae eaque quisquam sapiente sit, tenetur
            maiores ut eos inventore culpa non, illum architecto libero nisi
            soluta numquam corporis, magnam nam. Repellat.
          </p>
          <div className="image">
            <img src="assets/movie_zone_thumbnail.png" alt="just a test" />
          </div>
        </div>
        <div className="detail">
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            ipsum earum totam voluptates omnis atque perspiciatis excepturi
            debitis at facere est fugit cum voluptate id dolor adipisci mollitia
            rerum ducimus. Beatae, voluptatum! Accusantium, fuga magni.
          </p>
          <div className="image">
            <img src="assets/movie_zone_thumbnail.png" alt="just a test" />
          </div>
        </div>
        <div className="detail">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            sint veritatis odio nulla sapiente, itaque et eum vero placeat
            corrupti repellendus aliquam sequi, quisquam nisi excepturi
            expedita, aperiam quam repellat. Tempore saepe laudantium deleniti
            perspiciatis dolor nulla adipisci vitae laboriosam, rerum inventore
            molestias, maiores beatae aliquam, officia voluptatem excepturi quia
            nisi necessitatibus enim dolorem iusto.
          </p>
          <div className="image">
            <img src="assets/movie_zone_thumbnail.png" alt="just a test" />
          </div>
        </div>
      </div>
    </div>
  );
}
