import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function NotFound() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | 404</title>
        </Helmet>
        <h1>404 Not Found</h1>
      </div>
    </HelmetProvider>
  );
}

export default NotFound;