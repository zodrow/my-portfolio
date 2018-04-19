import * as React from "react"

import { getBkgImgStyles } from "../utils"

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

class Case extends React.Component {
  render() {
    const { title, date, description } = this.props
    return (
      <div className="cases-container">
        <Container>
          <Row>
            <Col xs="6">
              <h2>{title}</h2>
            </Col>
            <Col xs="6">
              <div className="cases-container__date">
                <h4>{date}</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <p>{description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );    
  }
}

export default Case;