import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';

function About() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | À Propos</title>
        </Helmet>
        <h1>About</h1>
      </div>
    </HelmetProvider>
  );
}

export default About;
