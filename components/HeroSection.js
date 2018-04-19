import * as React from "react"

import { getBkgImgStyles } from "../utils"

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

const bkgImgUrl = "../images/hero-img-city.png"

const HeroSection = () => (
  <div className="hero-section" style={getBkgImgStyles(bkgImgUrl, 700, 'top')}>
    <div className="hero-section__center-txt">
      <Container>
        <Row>
          <Col xs="12">
            <h3 className="hero-section__sub-heading">Kansas City Labor Lawyers</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h1 className="hero-section__main-heading">Bukaty, Aubry</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h1 className="hero-section__main-heading align-right">&amp; Huntsman</h1>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="arrow-up"></div>
  </div>
);

export default HeroSection;