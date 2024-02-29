// NewsletterSignup.js

import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  // State to manage form input
  const [email, setEmail] = useState('');

  // Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform action with the submitted email (e.g., subscribe user to newsletter)
    console.log('Subscribed with email:', email);
    // Clear the form after submission
    setEmail('');
  };

  return (
    <div className="newsletter-signup">
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
