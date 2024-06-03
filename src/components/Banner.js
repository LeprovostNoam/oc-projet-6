import React from 'react';
import '../assets/css/Banner.scss';
import backgroundImage from '../assets/img/source1-min.webp';

const Banner = () => {
    return (
      <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>
          Chez vous,<span className="break-mobile"><br/></span> partout et ailleurs
        </h1>
      </div>
    );
  };

export default Banner;
