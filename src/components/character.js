import { Link } from "react-router-dom";
import styles from "../Character.module.css";
console.log(styles);

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
