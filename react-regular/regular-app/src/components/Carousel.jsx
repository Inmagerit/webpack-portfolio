import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={prevImage}>Previous</button>
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '300px' }}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ width: '100%' }} />
      </div>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
