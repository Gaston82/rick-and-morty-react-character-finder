import logo from "../assets/images/logo192.png";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <p>Made in </p>
          <img className={styles.logo} src={logo} alt=" React logo" />
          <p>By Gastón</p>
        </div>
      </div>
    </footer>
  );
}
