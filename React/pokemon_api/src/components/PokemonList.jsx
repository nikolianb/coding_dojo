import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPokemon(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Emrat e pokemonve</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
