import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="skills">
        <div className="cont-img">
          <img src="public/lamp.svg" alt="Lamp" />
        </div>

        <div className="cont-img">
          <img src="public/mern.svg" alt="MERN Stack" />
        </div>

        <div className="cont-img">
          <img src="public/wordpress.svg" alt="WordPress" />
        </div>

        <div className="cont-img">
          <img src="public/office.svg" alt="Microsoft Office" />
        </div>
      </div>

      <div className="copy">
        <p className="p1">Get in touch</p>
        <div className="media">
          <i className="fa fa-github socialicon"></i>
          <i className="fa fa-linkedin socialicon"></i>
          <i className="fa fa-instagram socialicon"></i>
        </div>
        <p className="p2">Copyright &copy; 2023 All rights reserved Developed by Karim</p>
      </div>
    </footer>
  );
};

export default Footer;
