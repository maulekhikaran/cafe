import React from 'react';
import './MenuDisplay.css';

const MenuDisplay = () => {
  return (
    <div className="menu-display">
      {/* Add your menu display content here */}
      <h2>Our Menu</h2>
      <ul>
       <b> <li>Coffee Drinks</li>
        <li>Teas</li>
        <li>Pastries</li>
        <li>Pasta</li>
        <li>Drink</li>
        </b>

        {/* Add more menu categories */}
      </ul>
    </div>
  );
}

export default MenuDisplay;
