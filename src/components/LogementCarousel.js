import React, { useState } from 'react';
import chevronRight from '../assets/img/chevron-right.svg';
import chevronLeft from '../assets/img/chevron-left.svg';
import '../assets/css/LogementCarousel.scss';

const LogementCarousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
  };

  const showArrowsAndPagination = pictures.length > 1;

  return (
    <div className="logement-carousel">
      {showArrowsAndPagination && (
        <button
          type="button"
          onClick={handlePrevClick}
          className="arrow arrow-prev"
        >
          <img src={chevronLeft} alt="Précédent" />
        </button>
      )}

      <div className="carousel-slide">
        <img src={pictures[currentSlide]} alt={`Logement ${currentSlide + 1}`} className="carousel-image" />
      </div>

      {showArrowsAndPagination && (
        <button
          type="button"
          onClick={handleNextClick}
          className="arrow arrow-next"
        >
          <img src={chevronRight} alt="Suivant" />
        </button>
      )}

      {showArrowsAndPagination && (
        <div className="pagination">
          {currentSlide + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default LogementCarousel;
