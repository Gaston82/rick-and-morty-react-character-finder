import { useContext } from "react";
import { QueryContext } from "../context/query";
import useCharacters from "../hooks/useCharacters";
import Character from "./character";

export default function ListOfCharacters() {
  const { characters } = useContext(QueryContext);

  // const { characters } = useCharacters();

  if (!characters) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container">
        <div className="characters-grid">
          {characters.map((character) => (
            <Character key={character.id} {...character} />
          ))}
        </div>
      </div>
    </>
  );
}
