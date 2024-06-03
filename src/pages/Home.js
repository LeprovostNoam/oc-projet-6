import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../datas/logements.json';
import backgroundImage from '../assets/img/source1-min.webp';
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
        <Banner text='Chez vous,<span className="break-mobile"><br/></span> partout et ailleurs' image={backgroundImage} />
        <section className="cards-container">
          {data.map((logement) => (
            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
          ))}
        </section>
      </div>
    </HelmetProvider>
  );
}

export default Home;
