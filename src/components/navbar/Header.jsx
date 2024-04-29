import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div id="header" className="navbar">
      <Link to = '/' className="nav_logo"> TechShop</Link>
      
      <Link to = "/search" className="search_action">
        <i className="fa-solid fa-magnifying-glass"></i>
        
      </Link>

      <Link to = '/cart' className="cart_action">
        <i className="fa-solid fa-cart-shopping"></i>
        
      </Link>

      <Link to = "/profile" className="user_action">
        <i className="fa-regular fa-user"></i>
        <div className="dropdown_menu">
          <h4><a href="#">Username</a></h4> 
          <p>Some description about the user...</p> 
          <button>Logout</button> 
          <ul>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </Link>
    </div>
  )
}

export default Header;
