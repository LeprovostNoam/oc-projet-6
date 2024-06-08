import React from 'react';

const LogementHost = ({ name, picture }) => {
  const [firstName, lastName] = name.split(' ');

  return (
    <div className="logement-host">
      <p>{firstName}<br />{lastName}</p>
      <img src={picture} alt={name} />
    </div>
  );
};

export default LogementHost;
