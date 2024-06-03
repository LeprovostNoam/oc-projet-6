import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import '../assets/css/NotFound.scss';

function NotFound() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kasa FR | 404</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <section className="not-found">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">Retourner sur la page d'accueil</a>
        </section>
      </div>
    </HelmetProvider>
  );
}

export default NotFound;