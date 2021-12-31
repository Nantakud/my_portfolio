import "./details.scss";
import { useInView } from "react-intersection-observer";

export default function Details() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div className={`detail ${inView && "zoom"}`} ref={ref}>
      <div className="text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          neque impedit incidunt repellendus qui suscipit? Architecto excepturi
          minima et magni rerum dicta nesciunt temporibus, officiis, facere
          consequuntur omnis. Amet corporis mollitia, cumque animi perferendis
          officiis voluptates esse numquam expedita hic totam quam ipsam libero
          odio quod! Mollitia unde ut nostrum ratione perspiciatis suscipit
          vitae tempora deserunt explicabo dolorem eius laborum facere voluptas
          velit tenetur, non, iusto doloremque quis iure reprehenderit cum
          necessitatibus eligendi! Repudiandae ex incidunt illo rerum recusandae
          eaque quisquam sapiente sit, tenetur maiores ut eos inventore culpa
          non, illum architecto libero nisi soluta numquam corporis, magnam nam.
          Repellat.
        </p>
      </div>
      <div className="image">
        <img src="assets/movie_zone_thumbnail.png" alt="just a test" />
      </div>
    </div>
  );
}
