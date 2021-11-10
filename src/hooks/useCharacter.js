import { useEffect, useState } from "react";
import { getCharacterById } from "../services/api";

export default function useCharacter(id) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterById = async () => {
      const result = await getCharacterById(id);
      setCharacter(result);
    };
    fetchCharacterById(id);
  }, [id]);

  return {
    character,
  };
}
