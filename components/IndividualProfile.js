import * as React from "react"

import Col from 'muicss/lib/react/col'
import { getBkgImgStyles } from "../utils"

const IndividualProfile = ({ imageURL, heading, subHeading }) => (
  <Col xs="10" xs-offset="1" sm="6" sm-offset="0" md="3">
    <div className="meet-team">
      <div style={getBkgImgStyles(imageURL, 375)}></div>
      <div className="meet-team__text">
        <h2 className="meet-team__heading">{heading}</h2>
        <h3 className="meet-team__subHeading">{subHeading}</h3>
      </div>
    </div>
  </Col>
);

export default IndividualProfile;