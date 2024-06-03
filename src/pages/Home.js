import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../datas/logements.json';
import '../assets/css/Home.scss';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(logements);
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | Chez vous, partout et ailleurs</title>
        </Helmet>
        <Banner />
        <div className="cards-container">
          {data.map((logement) => (
            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;
