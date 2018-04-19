import React, {Component} from "react"
import Head from "react-helmet"
import { Appbar, Button, Panel } from 'muicss/react'

import Layout from './Layout'
import ImgCenterTxt from '../components/ImgCenterTxt'


import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

// const bkgImgUrl = "../images/intro-images.png"

class Home extends React.Component {
  render() {
    return(
      <Layout>
        <div>
          <Container>
            <Row>
              <Col xs="12" md="10" md-offset="1">
                <h1>Hi, my name is Laura Zodrow and I am a designer and front-end developer. I am passonate about creating products with beautiful UI and intuative UX. And developing products that make a positive impact on people's lives.</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs="12">
                <h2>The Problem</h2>
              </Col>
              <Col xs="12">
                <p>According to the Center of Disease Control and Prevention, as of 2012, about half of all adults—117 million people—had one or more chronic health conditions. This includes myself, my mother, and my best friend. I’m learning, through their and my own experience, having an invisible chronic condition can feel isolating and dispiriting. You usually need to change your lifestyle and habits to accommodate your condition. This can be difficult without a support system, encouragement, and understanding.</p>
                <p>Another problem is the amount of questions you have that doctors can’t always answer. For instance, how do you stay positive when dealing with this condition everyday? The internet also becomes a source of dread, giving you abundant and usually conflicting information. It can be overwhelming and difficult to navigate.</p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs="12" sm="8">
                <img src="../images/intro-images.png" />
              </Col>
              <Col xs="12" sm="4">
                <h3>ChronBond</h3>
                <p>This is an app about blah bblah</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default Home;