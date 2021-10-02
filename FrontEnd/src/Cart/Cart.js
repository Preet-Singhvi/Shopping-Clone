import React from "react";
import "./Cart.css"

const Cart = ({ cartItems , handleAddProducts , handleRemove , handleAdd , handleReduce}) => {
    const list=JSON.parse(localStorage.getItem('setCartItems')) ?? [];
    
    const totalPrice = list.reduce((price,object) => price + object.qty * object.price ,0)

    return ( 
      <div className="cart-items">          
        <div className="cart-items-section">
          <div>
            <div className="cart-items-header">
              Cart Items
              <a href="/home">Back</a>
            </div>
          {list.length === 0 && (
            <div className="cart-items-empty">
               No items are added
            </div>
           )}
          </div>
          {list.length >0 && (
            <div className="cart-items-price">
            Total Price: Rs.{totalPrice}
            </div>
          )}
          <div className="cart-items-products">
           {list.map((objects) => {
             const {id, name, image ,price,qty} = objects;
             return(
               <div key={id} className="cart-items-list">
                <img src={image} alt={name} className="photo" />
                <div className="cart-items-list-info">
                  <header>
                    <h4>{name}</h4>
                      <h4>Rs.{qty * price}</h4>
                      <div className="cart-items-button">
                        <button onClick= {() => handleReduce( objects ) }>-</button>
                        <h4>{qty}</h4>
                        <button onClick={() => handleAdd( objects ) }>+</button>
                      </div>
                      <button className="cart-item-remove" onClick={() => handleRemove( objects )}>Remove Item</button>
                  </header>
                </div>
              </div>           
            );
          })}
            {list.length > 0 && (
              <a href="/payment" className="cart-items-pay">Pay Now</a>
            )}
          </div>    
      </div>
      </div>
     );
}
 
export default Cart;
