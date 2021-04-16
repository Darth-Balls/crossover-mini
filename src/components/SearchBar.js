import React, { useState, useEffect } from 'react'
import "./Searchbar.css"


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = searchResults.filter(searchResults =>
    searchResults.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(message => (
          <li>{message.date}
          {message.author?.name}</li>
          
        ))}
      </ul>
    </div>
  );


  



}

export default SearchBar;

  