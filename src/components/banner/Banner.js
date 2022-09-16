import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../../styles/banner/banner.css";

const Banner = () => {
  return (
    <Container className="banner">
      <Row>
        <Col lg={8}>1</Col>
        <Col lg={4}>2</Col>
      </Row>
    </Container>
  );
};

export default Banner;
