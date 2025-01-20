import React from "react";
import "./Items.css";

function items({ items, addToCart }) {
  return (   

    <div className="list">
      <h2>Available Clothes</h2>
     
      <ul>

        {items.map ((item) => (
          <li key={item.id}>
             <span>{item.name}</span>
               <span>${item.price}</span>
             <button onClick={() => addToCart(item)}>addToCart</button>
          </li>

        ))}
      </ul>
    </div>
  );
}

export default items;
