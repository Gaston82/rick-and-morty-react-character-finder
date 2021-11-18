const getAllCharacters = async ({ name = "", status = "" }) => {
  let url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  if (data.error) {
    throw new Error(data.error);
  }

  const characters = data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
      status: character.status,
      origin: character.origin.name,
      episode: character.episode.length,
    };
  });

  return characters;
};

export async function getCharacterById(id) {
  let url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default getAllCharacters;
