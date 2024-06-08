import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logements from '../datas/logements.json';
import LogementCarousel from '../components/LogementCarousel';
import LogementHeader from '../components/LogementHeader';
import LogementTags from '../components/LogementTags';
import LogementRating from '../components/LogementRating';
import LogementHost from '../components/LogementHost';
import LogementExpandableSection from '../components/LogementExpandableSection';
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

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | {logement.title}</title>
        </Helmet>
        <LogementCarousel pictures={logement.pictures} />
        <div className="logement-details">
          <LogementHeader title={logement.title} location={logement.location} />
          <LogementTags tags={logement.tags} />
          <LogementRating rating={logement.rating} />
          <LogementHost name={logement.host.name} picture={logement.host.picture} />
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
