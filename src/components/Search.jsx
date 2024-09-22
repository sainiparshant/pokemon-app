import React from 'react';
import './Search.css';

const Search = ({ handleSearch }) => {
  const handleInputChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
