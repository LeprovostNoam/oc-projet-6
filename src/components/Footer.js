import React from 'react';
import logoDark from '../assets/img/logo-dark.svg';
import '../assets/css/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoDark} alt="Kasa Logo" className="footer-logo" />
      <p>© 2020 Kasa. All<span className="break-mobile"><br/></span> rights reserved</p>
    </footer>
  );
};

export default Footer;
