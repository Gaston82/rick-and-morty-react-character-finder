import { Link } from "react-router-dom";
import styles from "../styles/Character.module.css";
import PropTypes from "prop-types";

export default function Character({ image, name, species, id }) {
  return (
    <article className={styles.card}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <div className={styles.card__footer}>
          <h3>{name}</h3>
          <p>{species}</p>
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
