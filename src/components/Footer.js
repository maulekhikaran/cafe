import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Import Footer.css for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We are a cozy café passionate about serving high-quality coffee, delicious pastries, and creating a welcoming atmosphere for our customers.</p>
          <div className="contact">
            <span><i className="fas fa-map-marker-alt"></i> Noida Sector 15, A - Block, A-21-34</span>
            <span><i className="fas fa-phone"></i> 9528903795</span>
            <span><i className="fas fa-envelope"></i> karanmaulekhi18@gmail.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/location-contact">Location & Contact</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            {/* Add the following links */}
            <li><Link to="/contact-form">Contact Form</Link></li>
            <li><Link to="/social-media">Social Media</Link></li>
            <li><Link to="/newsletter-signup">Newsletter Signup</Link></li>
            <li><Link to="/online-payment">Online Payment</Link></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Cafe Website | All rights reserved
        <p>This website is made by Karan Maulekhi</p>
      </div>
    </footer>
  );
}

export default Footer;
