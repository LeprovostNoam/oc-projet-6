import React from 'react';

const LogementHeader = ({ title, location }) => (
  <div className="logement-header">
    <div className="logement-title">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  </div>
);

export default LogementHeader;