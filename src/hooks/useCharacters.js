import { useState, useEffect } from "react";
import getAllCharacters from "../services/api";

export default function useCharacters(name) {
  const [characters, setCharacters] = useState([]);

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
