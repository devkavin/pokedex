class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError ";
  }
}

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export const fetchPokemonData = async (pokemonName: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );

    if (response.status === 404) {
      throw new NotFoundError("Pokemon not found");
    }

    if (!response.ok) {
      throw new NetworkError(`Network response was not ok: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof NetworkError) {
      throw error.message; // Re-throw specific errors for higher-level handling
    } else {
      throw new Error(`Unexpected error occurred: ${(error as Error).message}`);
    }
  }
};
