// Gallery.js

import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        {/* Insert your gallery images here */}
        <img src="../assets/image1.jpg" alt="Gallery Image 1" />
        <img src="../assets/image2.webp" alt="Gallery Image 2" />
        <img src="../assets/image3.jpeg" alt="Gallery Image 3" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Gallery;
