import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Items from "../Items/Items";
import Cart from "../Cart/cart";
//import Footer from "../Footer/Footer";
import "./Home.css";

import Scrollingtext from "../Scrollingtext/Scrollingtext";
import Search from "../Search/Search";

const data = [
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
  

function Home() {
  const [items, setItems] = useState(data.sort((a, b) => a.name.localeCompare(b.name)));
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Add an item to the cart
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="home">
    
      <Navbar />

      <div className="content">
        <Items items={items} addToCart={addToCart} />
        <Search addToCart={addToCart} />
        <Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
        />
      </div>
   <Contact/>
      <Scrollingtext />


    </div>
  );
}

export default Home;
