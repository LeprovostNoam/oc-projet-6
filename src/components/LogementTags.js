import React from 'react';

const LogementTags = ({ tags }) => (
  <div className="logement-tags">
    {tags.map((tag, index) => (
      <span key={index} className="tag">{tag}</span>
    ))}
  </div>
);

export default LogementTags;
