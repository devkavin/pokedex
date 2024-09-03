"use client";

import React, { useState } from "react";
import FloatingInput from "./search-input";
import PokemonCard from "./pokemonCard";
import { fetchPokemonData } from "./fetchPokemonData";

export default function Home() {
  const [pokemonData, setPokemonData] = useState<any>(null); // State to hold Pokémon data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchPokemon = async (pokemonName: string) => {
    setLoading(true);
    try {
      const data = await fetchPokemonData(pokemonName);
      setPokemonData(data);
      setError(null);
    } catch (error) {
      setError("Error fetching data: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-24 text-black">
      <p className="text-center text-5xl text-yellow-500 animate-float">POKEDEX</p>
      <FloatingInput onSearch={fetchPokemon} />
      <PokemonCard pokemonData={pokemonData} loading={loading} error={error} />
    </main>
  );
}
