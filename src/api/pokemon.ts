const pokemonAPIURL = "https://pokeapi.co/api/v2/";

// Function to collect data
const getAllPokemon = () => {
  return fetch(`${pokemonAPIURL}pokemon?limit=150&offset=0`).then((response) =>
    response.json()
  );
};

export { getAllPokemon };
