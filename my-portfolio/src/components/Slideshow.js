import React, { useState, useEffect, useCallback } from 'react';
import './Slideshow.css';

function Slideshow({ images, autoPlay = true, autoPlayTime = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openImageInNewTab = () => {
    const currentImage = images[currentIndex];
    window.open(currentImage, '_blank'); // Opens the image in a new tab
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [nextSlide, autoPlay, autoPlayTime]);

  return (
    <div className="slideshow-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index} onClick={openImageInNewTab}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="nav-buttons">
        <button onClick={prevSlide}>&larr;</button>
        <button onClick={nextSlide}>&rarr;</button>
      </div>
    </div>
  );
}

export default Slideshow;
