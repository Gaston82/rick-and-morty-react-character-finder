import { useContext } from "react";
import { QueryContext } from "../context/query";
import Character from "./character";
import NotFound from "./not-found";

export default function ListOfCharacters() {
  const { characters, loading, error } = useContext(QueryContext);

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        // <h2>Not found</h2>
        <div className="container">
          <div className="characters-grid">
            {characters.map((character) => (
              <Character key={character.id} {...character} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
