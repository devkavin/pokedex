"use client";
import React, { FormEvent, useState } from "react";
import { fetchPokemonData } from "./fetchPokemonData";

interface FloatingInputProps {
  onSearch: (pokemonName: string) => void;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue("");
    try {
      const data = await fetchPokemonData(inputValue);
      console.log(data.sprites.other.showdown.front_shiny);
      console.log(data.sprites.front_default);
      console.log(data.name);
      console.log(data);
      for (let i = 0; i < data.stats.length; i++) {
        console.log(data.stats[i].stat.name + ": " + data.stats[i].base_stat);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`w-96 h-20 mt-5 p-4 bg-white rounded-lg border-4 border-gray-800 shadow-[10px_10px_1px_1px_#00000024] hover:shadow-[10px_10px_10px_1px_#00000024] focus:outline-none transition-all ${
            isFocused ? "transform-none" : "animate-float"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search Pokemon..."
        />
      </form>
    </div>
  );
};

export default FloatingInput;
