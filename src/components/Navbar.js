import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuDisplay from './MenuDisplay'; // Import MenuDisplay component

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/location-contact">Location & Contact</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/customer-reviews">Customer Reviews</Link></li>
        {/* Add MenuDisplay link */}
        <li><Link to="/menu">Menu</Link></li>
      </ul>
      {/* Dropdown content */}
    </nav>
  );
}

export default Navbar;
