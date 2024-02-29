// OnlineOrdering.js
import React, { useState } from 'react';
import './OnlineOrdering.css';

const OnlineOrdering = () => {
  // Sample menu items
  const [menuItems] = useState([
    { id: 1, name: 'Coffee', price: 3.50 },
    { id: 2, name: 'Tea', price: 2.50 },
    { id: 3, name: 'Croissant', price: 4.00 },
  ]);

  // State to manage the cart
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission (checkout)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle order submission logic here
    console.log('Order submitted:', formData, cartItems);
    // Reset form data and cart after submission
    setFormData({
      name: '',
      address: '',
      paymentMethod: '',
    });
    setCartItems([]);
  };

  return (
    <div className="online-ordering">
      <h2>Online Ordering</h2>
      <div className="menu">
        <h3>Menu</h3>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h3>Cart</h3>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} required>
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </div>
  );
}

export default OnlineOrdering;
