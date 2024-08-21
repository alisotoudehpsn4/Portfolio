import React, { useState, useEffect, useCallback } from 'react';
import './Slideshow.css';

function Slideshow({ images, autoPlay = true, autoPlayTime = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('Current Image:', images[currentIndex]); // Debugging line

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [nextSlide, autoPlay, autoPlayTime]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : 'inactive'}`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide-image"
          />
        </div>
      ))}
      <div className="nav-buttons">
        <button onClick={prevSlide}>&larr;</button>
        <button onClick={nextSlide}>&rarr;</button>
      </div>
    </div>
  );
}

export default Slideshow;
