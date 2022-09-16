import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

import "../../styles/header/header.css";
import HeaderNavLink from "../reuse/header/HeaderNavLink";
import HeaderSubLink from "../reuse/header/HeaderSubLink";
const Header = () => {
  return (
    <Container>
      <div className="header__logo">
        <Link to="" className="header__logo-image">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__container">
        <Row>
          <Col lg={9} className="header__list">
            <HeaderNavLink content="home" isActive />
            <HeaderNavLink content="our products" />
            <HeaderNavLink content="about us" />
            <HeaderNavLink content="blog" />
            <HeaderNavLink content="client center" />
            <HeaderNavLink content="faq" />
          </Col>
          <Col lg={3} className="header__submenu">
            <HeaderSubLink icon="fa-regular fa-user" />
            <HeaderSubLink icon="fa-regular fa-heart" isCount count={0} />
            <HeaderSubLink icon="fa-solid fa-bag-shopping" isCount count={0} />
            <HeaderSubLink icon="fa-solid fa-magnifying-glass" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Header;
