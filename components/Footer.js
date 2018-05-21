import * as React from "react"
import { Link } from "react-router"

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col xs="6">
          <p>Laura Zodrow</p>
        </Col>
        <Col xs="6" className="contact-right">
          <a>laura.zodrow@gmail.com</a>
          <div><a>832.922.2053</a></div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;