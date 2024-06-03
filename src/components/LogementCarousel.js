import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import chevronRight from '../assets/img/chevron-right.svg';
import chevronLeft from '../assets/img/chevron-left.svg';
import '../assets/css/LogementCarousel.scss';

const LogementCarousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    if (currentSlide === 0) {
      setCurrentSlide(pictures.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = () => {
    if (currentSlide === pictures.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const showArrowsAndPagination = pictures.length > 1;

  return (
    <div className="logement-carousel">
      <Carousel
        showThumbs={false}
        dynamicHeight={true}
        showStatus={false}
        renderIndicator={() => null}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          showArrowsAndPagination && (
            <button type="button" onClick={handlePrevClick} title={label} className="arrow arrow-prev">
              <img src={chevronLeft} alt="Précédent" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          showArrowsAndPagination && (
            <button type="button" onClick={handleNextClick} title={label} className="arrow arrow-next">
              <img src={chevronRight} alt="Suivant" />
            </button>
          )
        }
      >
        {pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt={`Logement ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      {showArrowsAndPagination && (
        <div className="pagination">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default LogementCarousel;
