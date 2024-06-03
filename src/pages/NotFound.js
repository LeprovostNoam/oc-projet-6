import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';

function NotFound() {
  return (
    <div>
      <Helmet>
      <title>Kasa FR | 404</title>
      </Helmet>
      <h1>404 Nout Found</h1>
    </div>
  );
}

export default NotFound;
