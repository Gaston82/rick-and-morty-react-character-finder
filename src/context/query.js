import { createContext, useState, useEffect } from "react";
import getAllCharacters from "../services/api";

export const QueryContext = createContext();

const QueryProvider = (props) => {
  const [query, setQuery] = useState({ name: "", status: "" });
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const result = await getAllCharacters({
          name: query.name,
          status: query.status,
        });
        setCharacters(result);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchCharacters();
  }, [query]);

  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
        characters,
        loading,
        error,
        setError,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
