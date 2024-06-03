import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Helmet>
      <title>Kasa FR | Chez vous, partout et ailleurs</title>
      </Helmet>
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
