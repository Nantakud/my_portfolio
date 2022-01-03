import "./about.scss";

export default function About() {
  return (
    <div className="about-wrapper">
      <header>About me</header>
      <section className="first">
        <p className="text">
          <header>My past</header>
          My innate curiosity and desire for adventures led me to test myself in
          several industries and positions. Baker, teacher, carpenter, social
          worker, shop manager. Name one job, and I likely did it. But with some
          constants: my commitment to achieving company goals, my unstoppable
          strive for delivering customers' satisfaction, my unremitting care for
          my fellow teammates.
        </p>
        <figure className="image"></figure>
      </section>
      <section className="second">
        <figure className="image"></figure>
        <p className="text">
          <header>My Present</header>
          Lifelong learning is my philosophy, so on top of a Master in Foreign
          Affairs I just added a Bachelor of IT. Still, I have no intention to
          stop studying any soon. At the moment I'm busy exploring .NET
          framework, learning Python and digging into cloud computing.
        </p>
      </section>
      <section className="third">
        <p className="text">
          <header>My Future</header>
          My goal is to start a rewarding career as a software developer. I
          envision myself as a member of a well-rounded, ground-breaker,
          ruthless team of high-level reachers tech geeks, always ready to
          tackle a problem and transform it into an opportunity.
        </p>
        <figure className="image"></figure>
      </section>
    </div>
  );
}
