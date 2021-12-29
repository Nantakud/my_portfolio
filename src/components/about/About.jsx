import "./about.scss";

export default function About() {
  return (
    <div className="about-wrapper">
      <header>About me</header>
      <section className="first">
        <div className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          temporibus architecto, labore modi neque aperiam quod sint ipsa. At
          impedit eius modi eligendi accusantium? Possimus nesciunt aspernatur
          cupiditate, suscipit expedita similique dolores cumque nobis
          accusantium fugit quam distinctio ipsam, eveniet perspiciatis hic quae
          nulla illum enim mollitia non est.
        </div>
        <div className="image">
          <img src="assets/computing.svg" alt="computing" />
        </div>
      </section>
      <section className="second">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam
          similique quis alias hic ullam modi quae dignissimos, voluptatibus,
          soluta explicabo at incidunt quasi possimus impedit ratione? Assumenda
          necessitatibus ducimus ipsa officia consequatur, pariatur accusamus
          deserunt! Cumque ullam recusandae quaerat debitis nam aperiam. Aut
          expedita ipsam libero delectus, odit harum dignissimos in nobis magni
          quasi ad inventore voluptatem tempore!
        </div>
        <div className="image">
          <img src="assets/ladder.svg" alt="ladder" />
        </div>
      </section>
      <section className="tird">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo
          veniam iure omnis tempore, delectus illum consequuntur quia libero,
          atque nobis porro! Soluta!
        </div>
        <div className="image">
          <img src="assets/office_cup.svg" alt="office cup" />
        </div>
      </section>
    </div>
  );
}
