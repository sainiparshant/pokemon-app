import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(url);
      setPokemonData(response.data);
    };

    fetchPokemonData();
  }, [url]);

  return (
    <div className="pokemon-card">
      {pokemonData ? (
        <>
          <img
            src={pokemonData.sprites.front_default}
            alt={name}
            className="pokemon-image"
          />
          <h3>{name}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonCard;
