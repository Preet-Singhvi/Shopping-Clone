import Register from "./Register/Navbar";
import { Route, Switch } from "react-router";
import Sign_In from "./Login/sign-in";
import Home from "./Home/home-page";
import Cart from "./Cart/Cart";
import { useState} from "react";
import React from 'react';
import Payment from "./Payment/payment";
import Error from "./Error";


function App(){
    const [ user, setLoginUser] = useState({})
  const [cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem("setCartItems")) ?? []);
  
  const handleUpdate = ((updatesCartItems)=>{
    localStorage.setItem('setCartItems',JSON.stringify(updatesCartItems))
    setCartItems(JSON.parse(localStorage.getItem('setCartItems')));
  })

  const handleAddProduct = ( listItem ) => {
      const ProductExist = cartItems.find((product) => product.id === listItem.id)
      if(ProductExist){
        cartItems.map((product) => 
        product.id === listItem.id ?(product.qty += 1): product
        );
        localStorage.setItem('setCartItems',JSON.stringify(cartItems))
      }  else{
         listItem["qty"] = 1;
         cartItems.push(listItem);
         localStorage.setItem('setCartItems',JSON.stringify(cartItems)) 
        }
  };

  const handleRemove = (objects) => {
    var result = cartItems.filter((object) => object.id !== objects.id)
    handleUpdate(result);
    }

  const handleAdd = (objects) => {
     cartItems.map((product) => 
        product.id === objects.id ?(product.qty += 1): product
        );
      handleUpdate(cartItems);
  
  }

  const handleReduce = (objects) => {
      if(objects.qty === 1){
        var result = cartItems.filter((object) => object.id !== objects.id)
        handleUpdate(result);
       } 
      else{
        cartItems.map((product) => 
        product.id === objects.id ?(product.qty -= 1): product
        );
        handleUpdate(cartItems);
      }  
  }

  return ( 
    <Switch>
        <Route exact path="/">
          <Sign_In setLoginUser={ setLoginUser }/>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/home">
          {
           user && user._id ? <Home setLoginUser={ setLoginUser } handleAddProduct={ handleAddProduct } /> : <Sign_In setLoginUser={ setLoginUser }/>
          }
        </Route>
        <Route path="/cart">
          <Cart 
          cartItems={ cartItems } 
          handleAddProducts= { handleAddProduct } 
          handleRemove = { handleRemove }
          handleAdd = { handleAdd } 
          handleReduce = { handleReduce }/>
        </Route>
        <Route path="/payment">
           <Payment />
        </Route>
        <Route path="*"> 
           <Error />
        </Route>
       </Switch>
    
    );
}

export default App;