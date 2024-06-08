import React from 'react';
import PropTypes from 'prop-types';
import chevronUp from '../assets/img/chevron-up.svg';

const Section = ({ index, title, content, openSection, toggleSection }) => {
  return (
    <div className="about-section">
      <div className="section-header" onClick={() => toggleSection(index)}>
        <h2>{title}</h2>
        <img
          src={chevronUp}
          alt="Toggle section"
          className={`chevron-icon ${openSection === index ? 'rotate' : ''}`}
        />
      </div>
      <div className={`section-content ${openSection === index ? 'expand' : ''}`}>
        {content}
      </div>
    </div>
  );
};

Section.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  openSection: PropTypes.number,
  toggleSection: PropTypes.func.isRequired,
};

export default Section;
