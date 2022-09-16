import React from "react";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/header/headerAd.css";

const HeaderAd = () => {
  return (
    <Container fluid className="headerAd__container">
      <Container className="headerAd__main">
        <div>
          Autumn Sales starts on November:{" "}
          <Link to="" className="headerAd__main-link">
            Sneak a peek now
          </Link>
        </div>
        <div className="headerAd__main-list">
          <div className="headerAd__main-item">
            <Link to="">Our stores</Link>
          </div>
          <div className="headerAd__main-item">
            <Link to="">Useful info</Link>
          </div>
          <div className="headerAd__main-item">
            <Link to="">Help</Link>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default HeaderAd;
