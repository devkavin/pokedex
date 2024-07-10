import React from "react";
import pokemonColors from "./pokemonColors";

interface PokemonCardProps {
  pokemonData?: any;
  loading: boolean;
  error: string | null;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemonData,
  loading,
  error,
}) => {
  const defaultImage = "/pickachu-placeholder.png";

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-96 mt-5 p-4 bg-white rounded-lg border-4 border-gray-800 shadow-[10px_10px_1px_1px_#00000024]">
      {pokemonData ? (
        <>
          <h2 className="text-center">{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="container p-5"
          />
          <div className="text-center p-5">
            <p>No: {pokemonData.id}</p>
          </div>
          {/* Render each type in a separate ul */}
          {pokemonData.types.map((type: any, index: number) => (
            <div key={index} className="mb-4">
              <ul className="flex justify-center border border-dashed border-gray-800">
                <li
                  key={type.type.name}
                  className="mx-2"
                  style={{
                    color: pokemonColors[type.type.name],
                  }}
                >
                  {type.type.name}
                </li>
              </ul>
            </div>
          ))}
          <div className="flex flex-col">
            {pokemonData.stats.map((stat: any) => (
              <div key={stat.stat.name} className="flex justify-between p-2">
                <p>{stat.stat.name}:</p>
                <p>{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p>Zzz..</p>
          <img src={defaultImage} alt="Placeholder" className="container p-5" />
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
