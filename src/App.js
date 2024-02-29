import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import MenuDisplay from './components/MenuDisplay';
import OnlineOrdering from './components/OnlineOrdering';
import Reservation from './components/Reservation';
import LocationAndContact from './components/LocationAndContact';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import SpecialsAndPromotions from './components/SpecialsAndPromotions';
import CustomerReviews from './components/CustomerReviews';
import EventsCalendar from './components/EventsCalendar';
import ContactForm from './components/ContactForm';
import SocialMediaIntegration from './components/SocialMediaIntegration';
import NewsletterSignup from './components/NewsletterSignup';
import OnlinePaymentIntegration from './components/OnlinePaymentIntegration';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuDisplay />} />
          <Route path="/online-ordering" element={<OnlineOrdering />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/location-contact" element={<LocationAndContact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/specials" element={<SpecialsAndPromotions />} />
          <Route path="/customer-reviews" element={<CustomerReviews />} />
          <Route path="/events-calendar" element={<EventsCalendar />} />
          {/* Add routes for the following components */}
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/social-media" element={<SocialMediaIntegration />} />
          <Route path="/newsletter-signup" element={<NewsletterSignup />} />
          <Route path="/online-payment" element={<OnlinePaymentIntegration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
