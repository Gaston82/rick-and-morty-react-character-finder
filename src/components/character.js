import { Link } from "react-router-dom";
import styles from "../styles/Character.module.css";
import PropTypes from "prop-types";

export default function Character(character) {
  const { image, name, species, id, gender } = character;
  const { card__footer, card__title, card } = styles;

  return (
    <article className={card}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <div className={card__footer}>
          <h2 className={card__title}>{name}</h2>
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      </Link>
    </article>
  );
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
