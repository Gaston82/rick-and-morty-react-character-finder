import React from "react";
import headerLogo from "../assets/images/rickandmorty-logo.png";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img
          className={styles.header__logo}
          src={headerLogo}
          alt="Rick and Morty "
        />
      </div>
    </header>
  );
}
