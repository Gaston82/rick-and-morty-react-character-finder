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
  const {
    detail__container,
    backLink,
    card,
    card__image,
    card__body,
    card__header,
    card__title,
    card__location,
    card__name__location,
  } = styles;

  return (
    <>
      <Header />
      <div className={detail__container}>
        <Link to={"/"}>
          <p className={backLink}>Go Back to the list</p>
        </Link>
        <article className={card}>
          <img className={card__image} src={image} alt={name} />
          <div className={card__body}>
            <h2 className={card__title}>{name}</h2>
            <div className={card__header}>
              <p>{status}-</p>
              <p>{species}</p>
            </div>
            <p className={card__location}>Last known location:</p>
            <p className={card__name__location}>{location.name}</p>
            <p className={card__location}>Total episodes:</p>
            <p>{episode.length}</p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
