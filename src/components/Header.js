import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <header>
      <h2>Find recipes you want...</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
