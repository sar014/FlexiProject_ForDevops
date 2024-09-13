import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <Link to="#" className="logo">Gamer's</Link>
        <p><i className="bx bx-copyright" />2024 All Rights Reserved</p>
        <ul>
          <li><Link to="#"><i className="bx bxl-facebook" /></Link></li>
          <li><Link to="#"><i className="bx bxl-instagram" /></Link></li>
          <li><Link to="#"><i className="bx bxl-twitter" /></Link></li>
          <li><Link to="#"><i className="bx bxl-youtube" /></Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
