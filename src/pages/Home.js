import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';

function Home() {
  return (
    <div>
      <Helmet>
      <title>Kasa FR | Chez vous, partout et ailleurs</title>
      </Helmet>
      <Banner />
    </div>
  );
}

export default Home;
