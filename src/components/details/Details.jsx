import "./details.scss";
import { useInView } from "react-intersection-observer";

export default function Details({ text, url, alt }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div className={`detail ${inView ? "zoom" : null}`} ref={ref}>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={url} alt={alt} />
      </div>
    </div>
  );
}
