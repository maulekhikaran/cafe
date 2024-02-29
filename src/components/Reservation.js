// Reservation.js

import React, { useState } from 'react';
import './Reservation.css'; // Import Reservation.css for styling

const Reservation = () => {
  // State to manage reservation form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    message: '',
  });

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., send reservation request to backend)
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 1,
      message: '',
    });
  };

  return (
    <div className="reservation">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} required />

        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} min="1" required />

        <label htmlFor="message">Special Requests:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reservation;
