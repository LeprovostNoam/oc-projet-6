import React from 'react';

import star from '../assets/img/star.svg';


const LogementHeader = ({ logement }) => {
  // Destructure logement object to get necessary properties
  const { title, location, host, tags, rating } = logement;
  const [firstName, lastName] = host.name.split(' ');

  // Function to render stars (dummy implementation, replace with actual logic)
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <img
        key={i}
        src={star}
        alt={`${i + 1} étoile`}
        className={i < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div>
        <div className="logement-header">
            <div className="logement-title">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
            </div>
            <div className="logement-host">
                <p>{firstName}<br/>{lastName}</p>
                <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
            </div>
        </div>
        <div className="logement-header2">
            <div className="logement-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
        </div>
        <div class="logement-infos2">
            
            <div className="logement-host">
              <p>{firstName}<br/>{lastName}</p>
              <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
            </div>
            <div className="logement-rating">{renderStars(logement.rating)}</div>
        </div>
        <div class="logement-infos">
            <div className="logement-tags">
            {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                {tag}
                </span>
            ))}
            </div>
            <div className="logement-rating">{renderStars(logement.rating)}</div>
        </div>
        
    </div>
    );
};

export default LogementHeader;
