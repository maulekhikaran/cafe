// Homepage.js

import React from 'react';
import './Homepage.css';
import SpecialsAndPromotions from './SpecialsAndPromotions'; // Import SpecialsAndPromotions component

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Add your homepage content here */}
      <div className="homepage-content">
        <h1>Welcome to Our Cafe!</h1>
        <p>Experience the finest coffee and pastries in town.</p>
      </div>
      <div className="specials-corner">
        <SpecialsAndPromotions />
      </div>
    </div>
  );
}

export default Homepage;
