import { Link } from "react-router-dom";
import styles from "../styles/Character.module.css";

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
