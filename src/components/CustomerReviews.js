// CustomerReviews.js

import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="review">
        <p>"Amazing coffee and atmosphere! Will definitely be coming back."</p>
       <b><p>-Karan Maulekhi</p></b>
      </div>
      <div className="review">
        <p>"The pastries here are to die for! Highly recommend!"</p>
       <b> <p>- Harshit shukla</p></b>
      </div>
      {/* Add more reviews */}
    </div>
  );
}

export default CustomerReviews;
