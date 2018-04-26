import * as React from "react"
import { Link } from "react-router"

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

const Header = () => (
  <header>
    <nav>
      <div className="nav-container">
        <Container>
          <Row>
            <Col xs="4">
              <div className="nav-container__logo"><img src="../images/logo.png" /></div>
            </Col>
            <Col xs="8">
              <div className="nav-container__list">
                <ul>
                  <li className={(typeof window !== 'undefined' && window.location.pathname === '/') && 'active'}><Link to='/'>Work</Link></li>
                  <li className={(typeof window !== 'undefined' && window.location.pathname === '/about') && 'active'}><Link to='/about'>About</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </nav>
  </header>
);

export default Header;