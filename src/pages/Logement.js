import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logements from '../datas/logements.json';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logements.find(logement => logement.id === id);
    setLogement(foundLogement);
  }, [id]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | Logement {logement.title}</title>
        </Helmet>
        <h1>{logement.title}</h1>
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.description}</p>
        {/* Ajoutez d'autres informations du logement ici */}
      </div>
    </HelmetProvider>
  );
};

export default Logement;
