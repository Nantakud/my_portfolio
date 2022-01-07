import "./about.scss";
import Adventure from "../adventure/Adventure";
import Learn from "../learn/Learn";
import Team from "../team/Team";

export default function About() {
  return (
    <div className="about-wrapper">
      <div class="curve-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <header>About Me</header>
      <div className="curve-wrapper">
        <div class="curve">
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

      <section className="first">
        <p className="text">
          <h1>My past</h1>
          My innate curiosity and desire for adventures led me to test myself in
          several industries and positions. Baker, teacher, carpenter, social
          worker, shop manager. Name one job, and I likely did it. But with some
          constants: my commitment to achieving company goals, my unstoppable
          strive for delivering customers' satisfaction, my unremitting care for
          my fellow teammates.
        </p>
        <figure className="image">
          <Adventure />
        </figure>
      </section>
      <div className="curve-wrapper">
        <div class="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <section className="second">
        <figure className="image">
          <Learn />
        </figure>
        <p className="text">
          <h1>My Present</h1>
          Lifelong learning is my philosophy, so on top of a Master in Foreign
          Affairs I just added a Bachelor of IT. Still, I have no intention to
          stop studying any soon. At the moment I'm busy exploring .NET
          framework, learning Python and digging into cloud computing.
        </p>
      </section>
      <div className="curve-wrapper">
        <div class="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="third"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <section className="third">
        <p className="text">
          <h1>My Future</h1>
          My goal is to start a rewarding career as a software developer. I
          envision myself as a member of a well-rounded, ground-breaker,
          ruthless team of high-level reachers tech geeks, always ready to
          tackle a problem and transform it into an opportunity.
        </p>
        <figure className="image">
          <Team />
        </figure>
      </section>
    </div>
  );
}
