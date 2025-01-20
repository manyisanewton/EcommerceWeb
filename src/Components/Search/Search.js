
import React, { useState } from "react";
import "./Search.css";

const items = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 },
  { id: 6, name: "Jacket", price: 100 },
  { id: 7, name: "Belt", price: 25 },
  { id: 8, name: "Scarf", price: 20 },
  { id: 9, name: "Gloves", price: 30 },
  { id: 10, name: "Backpack", price: 80 },
];

function Search({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the last 5 items and search by name
  const filteredItems = items
    .slice(-5)
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="search-container">
      <h2>Search for more clothes here</h2>
      <input
        type="text"
        placeholder="search more clothes from store..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
