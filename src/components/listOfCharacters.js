import { useContext } from "react";
import { QueryContext } from "../context/query";
import Character from "./character";
import NotFound from "./not-found";
import styles from "../styles/ListOfCharacters.module.css";

export default function ListOfCharacters() {
  const { characters, error } = useContext(QueryContext);

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <div className={styles.container}>
          <div className={styles.characters__grid}>
            {characters.map((character) => (
              <Character key={character.id} {...character} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
