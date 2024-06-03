import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logements from '../datas/logements.json';
import LogementCarousel from '../components/LogementCarousel';
import star from '../assets/img/star.svg';
import '../assets/css/Logement.scss';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logements.find(logement => logement.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    }
  }, [id]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const [firstName, lastName] = logement.host.name.split(' ');

  const renderStars = (rating) => {
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

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | Logement {logement.title}</title>
        </Helmet>
        <LogementCarousel pictures={logement.pictures} />
        <div className="logement-details">
          <div className="logement-header">
            <div className="logement-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="logement-host">
              <p>{firstName}<br />{lastName}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <div className="logement-extra">
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="logement-rating">
              {renderStars(logement.rating)}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Logement;
