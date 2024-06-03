import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../components/Banner';
import bannerImage from '../assets/img/banner2-min.webp';
import chevronUp from '../assets/img/chevron-up.svg';

import '../assets/css/About.scss';

const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ];
  

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | À Propos</title>
        </Helmet>
        <Banner image={bannerImage} />
        <div className="about-sections">
          {sections.map((section, index) => (
            <div key={index} className="about-section">
              <div className="section-header" onClick={() => toggleSection(index)}>
                <h2>{section.title}</h2>
                <img
                  src={chevronUp}
                  alt="Toggle section"
                  className={`chevron-icon ${openSection === index ? 'rotate' : ''}`}
                />
              </div>
              <div className={`section-content ${openSection === index ? 'expand' : ''}`}>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default About;
