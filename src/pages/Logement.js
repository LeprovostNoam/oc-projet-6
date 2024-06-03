import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logements from '../datas/logements.json';
import LogementCarousel from '../components/LogementCarousel';
import star from '../assets/img/star.svg';
import arrow from '../assets/img/chevron-up.svg'; 
import '../assets/css/Logement.scss';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const foundLogement = logements.find(logement => logement.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate('/404', { replace: true });
    }
  }, [id, navigate]);

  if (!logement) {
    return null; 
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

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
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
            <div className="logement-host">
              <p>{firstName}<br />{lastName}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <div className="logement-more">
            <div className="logement-expandable">
              <div className="expandable-header" onClick={() => toggleSection('description')}>
                <h2>Description</h2>
                <img
                  src={arrow}
                  alt="Toggle"
                  className={expandedSection === 'description' ? 'rotate' : ''}
                />
              </div>
              <div className={`expandable-content ${expandedSection === 'description' ? 'expand' : ''}`}>
                <p>{logement.description}</p>
              </div>
            </div>
            <div className="logement-expandable">
              <div className="expandable-header" onClick={() => toggleSection('equipements')}>
                <h2>Équipements</h2>
                <img
                  src={arrow}
                  alt="Toggle"
                  className={expandedSection === 'equipements' ? 'rotate' : ''}
                />
              </div>
              <div className={`expandable-content ${expandedSection === 'equipements' ? 'expand' : ''}`}>
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Logement;
