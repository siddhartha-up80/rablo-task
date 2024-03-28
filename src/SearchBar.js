
import React, { useEffect, useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);

  return (
    <form onSubmit={handleSubmit} className="SearchBar">
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
