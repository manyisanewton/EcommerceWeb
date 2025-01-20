import React from "react";
import "./Cart.css"



function   Cart({ cartItems, removeFromCart }) {

  const total = cartItems.reduce((sum, item) =>   sum + item.price, 0);

  return (
    <div  className="cart">
       <h2>Your Cart</h2> 
      <ul>
        {cartItems.map ((item, index) => (  

          <li key={index}>

            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(index)}>Delete</button>
          </li> 

        )
        )}
      </ul>   
      <h3>Total: ${total} </h3>
    </div>
  );
}
 
export default Cart;
