import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import useCharacter from "../hooks/useCharacter";
import styles from "../styles/Detail.module.css";

export function Detail() {
  let { id } = useParams();
  const { character } = useCharacter(id);

  if (!character) {
    return <p>Loading...</p>;
  }
  const { name, status, species, image, episode, location } = character;
  return (
    <>
      <Header />
      <div className={styles.detail__container}>
        <Link to={"/"}>
          <p className={styles.backLink}>Go Back to the list</p>
        </Link>
        <article className={styles.card}>
          <img className={styles.card__image} src={image} alt={name} />
          <div className={styles.card__body}>
            <h2 className={styles.card__title}>{name}</h2>
            <div className={styles.card__header}>
              <p>{status}-</p>
              <p>{species}</p>
            </div>
            <p className={styles.card__location}>Last known location:</p>
            <p className={styles.card__name__location}>{location.name}</p>
            <p className={styles.card__location}>Total episodes:</p>
            <p>{episode.length}</p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
