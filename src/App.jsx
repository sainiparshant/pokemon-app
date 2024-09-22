import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const pokemonData = response.data.results;
      setPokemonList(pokemonData);
      setFilteredPokemon(pokemonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredPokemon(pokemonList);
    } else {
      const filtered = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  };

  return (
    <div className="app-container">
      <h1>Pokémon List</h1>
      <Search handleSearch={handleSearch} />
      <div className="pokemon-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredPokemon.map((pokemon, index) => (
            <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
