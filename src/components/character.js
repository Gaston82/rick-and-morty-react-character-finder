import { Link } from "react-router-dom";
import styles from "../styles/Character.module.css";
import PropTypes from "prop-types";

export default function Character({ image, name, species, id, gender }) {
  return (
    <article className={styles.card}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <div className={styles.card__footer}>
          <h2 className={styles.card__title}>{name}</h2>
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
