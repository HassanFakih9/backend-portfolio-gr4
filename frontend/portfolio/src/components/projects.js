import React from "react";
const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>
                Portfolio for Stone Age Group || WordPress ||
                https://stoneage.group/
              </p>
            </div>
            <div className="flip-card-back">
              <p>
                A portfolio is being created using WordPress. The portfolio
                comprises various sections about the work of Stone Age group and
                provides viewers with the ability to contact them via email.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>
                E-commerce website for “Mini-Garden” || MERN Stack ||
                https://minigarden22a.netlify.app
              </p>
            </div>
            <div className="flip-card-back">
              <p>
                This project was implemented using the MERN stack, which
                includes MongoDB, Express, and NodeJs for the back-end and
                ReactJS for the front-end. The website aims to enable users to
                contact the admin and place orders for the products they like.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>
                E-commerce website for “Vressocasa”|| LAMP Stack ||
                https://www.vressocasa.com
              </p>
            </div>
            <div className="flip-card-back">
              <p>
                The project was implemented in a dynamic team where we used php
                and Laravel for the back-end, and ReactJS for the front-end. The
                website consists of different sections that allow users to order
                products, observe blogs, and decide the type of payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
