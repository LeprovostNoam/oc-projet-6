import React from 'react';
import star from '../assets/img/star.svg';

const LogementRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={star}
          alt={`${i} étoile`}
          className={i <= rating ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  return <div className="logement-rating">{renderStars()}</div>;
};

export default LogementRating;
