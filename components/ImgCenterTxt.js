import * as React from "react"

import { getBkgImgStyles } from "../utils"

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

const ImgCenterTxt = ({ bkgImgUrl, bkgHeight, text }) => (
  <div className="hero-section" style={getBkgImgStyles(bkgImgUrl, bkgHeight, 'top')}>
    <div className="hero-section__center-txt">
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="hero-section__small-heading">{text}</h1>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="arrow-up"></div>
  </div>
);

export default ImgCenterTxt;