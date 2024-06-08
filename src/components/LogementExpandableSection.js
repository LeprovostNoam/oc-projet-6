import React from 'react';
import arrow from '../assets/img/chevron-up.svg';

const LogementExpandableSection = ({ section, title, content, expandedSection, toggleSection }) => (
  <div className="logement-expandable">
    <div className="expandable-header" onClick={() => toggleSection(section)}>
      <h2>{title}</h2>
      <img
        src={arrow}
        alt="Toggle"
        className={expandedSection === section ? 'rotate' : ''}
      />
    </div>
    <div className={`expandable-content ${expandedSection === section ? 'expand' : ''}`}>
      {content}
    </div>
  </div>
);

export default LogementExpandableSection;
