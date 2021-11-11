import { createContext, useState, useEffect } from "react";
import getAllCharacters from "../services/api";

export const QueryContext = createContext();

const QueryProvider = (props) => {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await getAllCharacters(query);
      setCharacters(result);
    };
    fetchCharacters();
  }, [query]);

  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
        characters,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
