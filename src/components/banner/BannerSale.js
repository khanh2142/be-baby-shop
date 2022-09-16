import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../../styles/banner/bannerSale.css";

const BannerSale = () => {
  return (
    <Container className="bannerSale">
      <Row>
        <Col lg={6} style={{ padding: 0 }}>
          <div
            className="bannerSale__holiday"
            style={{
              backgroundImage: `url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-home-pic1.webp)`,
            }}
          ></div>
        </Col>
        <Col lg={6} style={{ padding: 0 }}>
          <div className="bannerSale__special"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerSale;
