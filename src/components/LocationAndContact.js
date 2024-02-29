import React from 'react';
import './LocationAndContact.css';

const LocationContact = () => {
  return (
    <div className="location-contact">
      <h2>Location & Contact Information</h2>
      <div className="location">
        <h3>Our Location</h3>
        <p>123 Noida sector 15, A-Block, A-21-34</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175244.72717352788!2d77.10249019999999!3d28.7040592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31bf66eb9c1%3A0x52c2e22e00d52d0a!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1646560601251!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <p>Phone: 9528903795</p>
        <p>Email: karanmaulekhi18@gmail.com</p>
      </div>
    </div>
  );
}

export default LocationContact;
