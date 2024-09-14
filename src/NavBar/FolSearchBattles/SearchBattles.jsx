import React, { useState } from 'react';
import data from './BattlesData.js';
import './SearchBattles.css'; // Import the CSS file for styling

const getFilteredItems = (query, items) => {
  if (!query) {
    return [];
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

function SearchBattles() {
  const [query, setQuery] = useState("");

  const { items } = data; // Assuming data has an 'items' array

  const filteredItems = getFilteredItems(query, items);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Cauta o batalie"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    
      <ul className="results-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="result-item">
            <h3>{item.name}</h3>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
            <p><strong>Winner:</strong> {item.winner}</p>
            <p><strong>Casualties:</strong> {item.casualties}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default SearchBattles;