import React from 'react';
import '../assets/css/Banner.scss';

const Banner = ({ text, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <h1 dangerouslySetInnerHTML={{ __html: text }} />}
    </div>
  );
};

export default Banner;
