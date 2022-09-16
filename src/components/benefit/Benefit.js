import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/benefit/benefit.css";

import decor from "../../image/decor.png";
import BenefitItem from "./BenefitItem";

const Benefit = () => {
  return (
    <Container className="benefit">
      <h3 className="benefit__title">
        What are benefits of <br />
        choosing us?
      </h3>
      <p className="benefit__desc">
        Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
        <br /> rhoncus eu, luctus et interdum.
      </p>
      <Row>
        <Col lg={3} className="benefit__list">
          <BenefitItem
            image="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
            title="100% bio"
            content="Lorem ipsum dolor sit amet enim etiam lorem lectus"
          />
          <div>
            <img src={decor} alt=""></img>
          </div>
          <BenefitItem
            image="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
            title="100% bio"
            content="Lorem ipsum dolor sit amet enim etiam lorem lectus"
          />
        </Col>
        <Col lg={6} className="benefit__image"></Col>
        <Col lg={3} className="benefit__list">
          <BenefitItem
            image="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
            title="100% bio"
            content="Lorem ipsum dolor sit amet enim etiam lorem lectus"
          />
          <div>
            <img src={decor} alt=""></img>
          </div>
          <BenefitItem
            image="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
            title="100% bio"
            content="Lorem ipsum dolor sit amet enim etiam lorem lectus"
          />
        </Col>
      </Row>
      <div className="benefit__button">
        <div className="button btn-black">see all features</div>
      </div>
    </Container>
  );
};

export default Benefit;
