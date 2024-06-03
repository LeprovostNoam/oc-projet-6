import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="card-title">
        {title}
      </div>
    </Link>
  );
};

export default Card;