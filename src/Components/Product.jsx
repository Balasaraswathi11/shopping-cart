import React from 'react';
import "./Product.css";

const Product = ({ product, cart, setCart }) => {
  const addcart = () => {
    setCart([...cart, product]);
  };

  const removecart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <>
      
       
          <div className="card">
            <img src={product.imageUrl} className="card-img-top img" alt="product" />
            <div className="card-body text-center">
              <h5 className="card-title fs-5">{product.name}</h5>
              <p className="card-text ">{product.description}</p>
              <p className="card-text"><b>Rating:</b> {product.starRating} <i className="fa fa-star text-warning"></i></p>
              <p className="card-text"><b>{product.price}</b></p>
              {cart.includes(product) ? (
                <button className='btnremove' onClick={removecart}>Remove from cart</button>
              ) : (
                <button className='btnadd' onClick={addcart}>Add to cart</button>
              )}
            </div>
          </div>
      
     
    </>
  );
};

export default Product;
