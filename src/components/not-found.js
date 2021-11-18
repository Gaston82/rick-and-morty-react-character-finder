import notFoundImage from "../assets/images/not-found-rick-and-morty.jpg";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.notFoundImage}
          src={notFoundImage}
          alt="Rick and Morty angry"
        />
        <h2 className={styles.notFoundMessage}>Character Not Found</h2>
        <h2 className={styles.notFoundMessage}>Try again!!!</h2>
      </div>
    </>
  );
}
