import React, {Component} from "react"
import Head from "react-helmet"
import { Appbar, Button, Panel } from 'muicss/react'

import Layout from './Layout'
import ImgCenterTxt from '../components/ImgCenterTxt'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

class About extends React.Component {
  render() {
    return(
      <Layout>
        <div>
          <Container className="extra-spacing">
            <Row>
              <Col xs="5">
                <img src="../images/about.png" />
              </Col>
              <Col xs="7">
                <h1>About</h1>
                <p>I started a career in design after college, creating promotional graphics for an art gallery, designing the website for a clothing company, and designing and developing the website for multiple art galleries. I later graduated from RefactorU, a 10 week full-stack javascript bootcamp, three years ago and since I've done application development for companies at ReadyTalk and Aetna Insurance Company in Denver, Colorado. </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="extra-spacing">
                <h1>Skills</h1>
              </Col>
              <Col xs="6">
                <img className="icon" src="../images/design.png" />
                <h2 className="icon-title" >UI/UX Designer</h2>
                <p className="icon-description">I've completed courses UX: Interaction Design and UX Research &amp; Strategy at Designlab. During this program I focused on a single project, ChronBond, conducting user research, completing story board exercises, building wireframes and user flows, and ultimately creating an interactive prototype.</p>
              </Col>
              <Col xs="6">
                <img className="icon" src="../images/code.png" />
                <h2 className="icon-title">Developer</h2>
                <p className="icon-description">I attended a 10 week full-stack javascript bootcamp, RefactorU, over three years ago. Since, I've done feature development using technologies Javascript, React.js,  and Webpack at companies in Denver, Colorado. I enjoy working on products that have a positive impact on people's lives. </p>
              </Col>
            </Row>
            <Row className="btn-container">
              <Col xs="12">
                <button><a href="../images/Laura-Zodrow-Resume.pdf" download>Download Resume</a></button>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default About;