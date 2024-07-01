import React, { useState } from 'react'
import "./Cart.css"
const Cart = ({cart,setCart}) => {
  
  return (
    
    <div className='cart-container container' style={{marginTop:"40px"}}>
      <h3>Cart Products</h3>
      <div className='cart-product'>
      {cart.map(product=>
      (<div className="cartlist" key={product.id}>
        <div className="cartimg">
          <img src={product.imageUrl} alt="img" className='imageofcart' />
        </div>
        <div className="productdetails p-2">
          <h6>{product.name}</h6>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
        </div>)

      )}
        



        
        </div>
       
    </div>
  )
}

export default Cart