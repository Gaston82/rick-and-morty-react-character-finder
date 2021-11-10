const getAllCharacters = async (name) => {
  console.log(name);
  let baseUrl = `https://rickandmortyapi.com/api/character/?`;
  name ? (baseUrl += `name=${name}`) : (baseUrl = baseUrl);
  //let url = `https://rickandmortyapi.com/api/character/?name=${name}&status= `;
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(baseUrl);
  console.log(data.results);

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
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default getAllCharacters;
