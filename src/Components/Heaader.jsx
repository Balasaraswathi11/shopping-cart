import React from 'react'
import {Link} from "react-router-dom";
import"./Header.css"
const Heaader = ({cart}) => {
  return (
<>

<nav className="navbar navbar-expand-lg   navbar ">
  <div className="container">
    <a className="navbar-brand " href="#">Electronics</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu pm-5" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All Products</a></li>
            <li><a className="dropdown-item" href="#">Popular items</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">New arrivals</a></li>
          </ul>
        </li>
      </ul>
      <button type="button" className="btn btn-outline-dark ">
        <Link to="/Cart" className='nav-link cart'><i className="fa fa-shopping-cart"></i> Cart <span className="spancount">{cart.length}</span> </Link> 
      </button>
    </div>
  </div>
</nav>

</>
  )
}

export default Heaader