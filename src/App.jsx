import React, { useState } from 'react';
import Heaader from './Components/Heaader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home'; 
import Cart from './Components/Cart';
import Titledescription from './Components/Titledescription'; // Import Titledescription component
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  
  return (
    <>
      <BrowserRouter>
        <Heaader cart={cart} />
        
        <div className='container-fluid m-0 p-0'>
         
          <Routes>
     
            <Route path="/" element={
              <>
                <Titledescription />
                <Home cart={cart} setCart={setCart} />
              </>
            } />
           
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
