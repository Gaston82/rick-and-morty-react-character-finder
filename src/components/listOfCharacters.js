import { useContext } from "react";
import { QueryContext } from "../context/query";
import Character from "./character";
import NotFound from "./not-found";
import styles from "../styles/ListOfCharacters.module.css";

export default function ListOfCharacters() {
  const { characters, error } = useContext(QueryContext);
  const { container, characters__grid } = styles;

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <div className={container}>
          <div className={characters__grid}>
            {characters.map((character) => (
              <Character key={character.id} {...character} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
