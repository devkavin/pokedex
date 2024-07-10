// fetchPokemonData.ts
export const fetchPokemonData = async (pokemonName: string) => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonName.toLowerCase()
  );
  if (!response.ok) {
    throw new Error("Network response was not ok" + response.statusText);
  }
  const data = await response.json();
  return data;
};
