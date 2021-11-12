import { Link } from "react-router-dom";

export default function Character({ image, name, species, id }) {
  return (
    <article className="card-character">
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <div className="card__footer">
          <h3>{name}</h3>
          <p>{species}</p>
        </div>
      </Link>
    </article>
  );
}
