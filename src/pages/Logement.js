import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logements from '../datas/logements.json';
import LogementCarousel from '../components/LogementCarousel';
import LogementInfos from '../components/LogementInfos';
import LogementExpandableSection from '../components/LogementExpandableSection';
import '../assets/css/Logement.scss';

import star from '../assets/img/star.svg';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const foundLogement = logements.find((logement) => logement.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate('/404', { replace: true });
    }
  }, [id, navigate]);

  if (!logement) {
    return null;
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
  const [firstName, lastName] = logement.host.name.split(' ');

  return (
    <HelmetProvider>
      <div className="logement-container">
        <Helmet>
          <title>Kasa FR | {logement.title}</title>
        </Helmet>
        <LogementCarousel pictures={logement.pictures} />
        <div className="logement-details">
        <LogementInfos logement={logement} />
          <div className="logement-more">
            <LogementExpandableSection
              section="description"
              title="Description"
              content={<p>{logement.description}</p>}
              expandedSection={expandedSection}
              toggleSection={toggleSection}
            />
            <LogementExpandableSection
              section="equipements"
              title="Équipements"
              content={<ul>{logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
              expandedSection={expandedSection}
              toggleSection={toggleSection}
            />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Logement;
