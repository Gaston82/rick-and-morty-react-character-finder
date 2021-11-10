import { useContext } from "react";
import { useState, useEffect } from "react";
import { QueryContext } from "../context/query";
import getAllCharacters from "../services/api";

export default function useCharacters(name) {
  const [characters, setCharacters] = useState([]);
  // const name = useContext(QueryContext);
  console.log(name);
  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await getAllCharacters(name);
      setCharacters(result);
    };
    fetchCharacters();
  }, [name]);

  return {
    characters,
  };
}
