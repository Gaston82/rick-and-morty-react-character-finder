import { Link } from "react-router-dom";

export default function Character({ image, name, species, id }) {
  return (
    <Link to={`/detail/${id}`}>
      <article>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{species}</p>
      </article>
    </Link>
  );
}
