import React, {Component} from "react"
import Head from "react-helmet"
import { Appbar, Button, Panel } from 'muicss/react'

import Layout from './Layout'
import ImgCenterTxt from '../components/ImgCenterTxt'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

const Home = () => (
  <Layout>
    <div>
      <Container>
        <Row>
          <Col xs="12" md="10" md-offset="1">
            <h1 className="main-heading">Hi, my name is Laura Zodrow and I am a designer and front-end developer. I am passionate about creating products with beautiful UI and intuitive UX. I enjoy developing products that make a positive impact on people’s lives.</h1>
          </Col>
        </Row>
      </Container>
      <div className="gray-bkg no-padding">
        <Container>
          <Row className="align-center">
            <Col xs="12" sm="6">
              <img src="../images/chronbond-image.png" />
            </Col>
            <Col xs="12" sm="6">
              <h1>ChronBond</h1>
              <p>ChronBond is a community for people with chronic health conditions. Connect through messages, events, and gain insight into your condition through trustworthy message boards. Publicly and privately exchange stories with others who share your condition.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="column">
        <Row>
          <Col xs="12">
            <h2 className="column__heading">The Problem</h2>
          </Col>
          <Col xs="12">
            <p><a className="link-reference" target="_blank" href="https://www.cdc.gov/chronicdisease/overview/index.htm">Half of adults—117 million people—in the U.S. have one or more chronic health conditions.</a> This includes myself, my mother, and my best friend. I'm learning through their and my own experience, having an invisible chronic condition can feel isolating and dispiriting. You usually need to change your lifestyle and habits to accommodate your condition. This can be difficult without a support system, encouragement, and understanding.</p>
            <p>Another problem is the amount of questions you have that doctors can't always answer. For instance, how do you stay positive when dealing with this condition everyday? The internet also becomes a source of dread, giving you abundant and usually conflicting information. It can be overwhelming and difficult to navigate.</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h2 className="column__heading">Target Users</h2>
          </Col>
          <Col xs="12">
            <p>The target users of ChronBond are primarily people who suffer from a chronic condition, but also practitioners, care givers, friends, and family of people with chronic conditions.</p>
            <p>My target users use message boards and other social media platforms, so are looking for a similar experience, but with more focus and clarity around a medical condition.</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h2 className="column__heading">Design Process</h2>
          </Col>
          <Col xs="12">
            <p>To identify that this product was worth building, I reach out out to my target users conducting surveys and interviews asking about their experience. I asked, if they had ever tried to find someone with the same condition and why? I asked what their day to day lives were like. I also asked if they have used products in the past to ask questions and help them navigate their symptoms and was this product helpful?</p>
            <p>I identified their key pain points: they wanted a discussion board that was easy to navigate with information they could trust, they wanted to be able to find people going through a similar experience, they also wanted more privacy when posting questions and when participating in discussions.</p>
            <p>I created wireframes and mapped out user flows focusing on the target users core needs.</p>
          </Col>
        </Row>
      </Container>
      <div style={{backgroundImage: "url(../images/wireframes.png)"}} className="wireframes"></div>
      <Container className="image-caption">
        <Row>
          <Col xs="6">
            <p>WIREFRAMES</p>
          </Col>
          <Col xs="6">
            <p>USER FLOW</p>
          </Col>
        </Row>
      </Container>
      <Container className="column extra-spacing">
        <Row>
          <Col xs="12">
            <p>This process was very enlightening for me. Being someone with a chronic condition, I had an idea of what I wanted for this application and had to step back sometimes and consider my cognitive bias. Reminding myself that what the majority of users want and what I want aren't always the same thing. It's important to get as many perspectives as possible so I can deliver a product that addresses everyones needs and that users will love to use.</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h2 className="column__heading">UI/UX Design</h2>
          </Col>
          <Col xs="12">
            <p>The object of the interface is to create a bright and uncluttered design. I decided to use a vivid and cheerful color palette because people reported feeling depressed often when reading message boards. This can be due to what people write, understanding I cannot control what people say, I can impact peoples emotional response by adding bright uplifting colors.</p>
            <p>In my design I first focused on three key features…</p>
          </Col>
        </Row>
      </Container>
      <div className="gray-bkg">
        <Container className="examples">
          <Row>
            <Col xs="12">
              <h2 className="examples__heading">Easily navigate a trustworthy board</h2>
              <div className="examples__heading-border"></div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-board.png" />
              <p>My primary goal for this message board was to create an uncluttered user interface. I didn't want it to be just a long list of unorganized text. I focused on grouping main categories.</p>
            </Col>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-symptoms-main.png" />
              <p>Then the individual category page is broken up into cards to create space between questions, so it's not visually overwhelming for the user. Also, practitioners can post discussions or answer discussions, so the user knows answers are trustworthy. Practitioners are incentivised to post because they will be in the "Find a Doctor" section.</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-filter.png" />
              <p>Filtering was key to making this board easy to navigate. Each category has subcategories a user can select so they can quickly find the topic they are interested in. Also, they can organize their category page by most responses and claps. This way the most popular and helpful questions are the first thing the user will see. </p>
            </Col>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-thread.png" />
              <p>On the individual discussion pages, to keep responses sometimes separate user can create a thread commenting on a specific response. Threads also have a light gray background breaking up the long stretch of text. Also, a user can save a discussion so it's easy to find again and follow a discussion that interests them. </p>
            </Col>
          </Row>
        </Container>
        <Container className="examples">
          <Row>
            <Col xs="12">
              <h2 className="examples__heading">Connect with people who understand</h2>
              <div className="examples__heading-border"></div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-discover.png" />
              <p>This section of the app is all about making connections. There are two groups in this section. First, a user can connect to an individual. The user can see an about section and instagram feed, giving the user a sense of who the person is and if they share a similar story.</p>
            </Col>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-discover-group.png" />
              <p>Second, if a user is intimidated by reaching out to an individual the group discover may be a better option for them. Groups can bond over similar interests either pertaining to their condition or a hobby completely unrelated.</p>
            </Col>
          </Row>
        </Container>
        <Container className="examples">
          <Row>
            <Col xs="12">
              <h2 className="examples__heading">Private support network</h2>
              <div className="examples__heading-border"></div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-popup.png" />
              <p>Privacy was a popular feature request. Facebook has the ability to create message boards, but your picture, name, and sometimes entire profile is always visible. ChronBond allows you to create an anonymous account. You can post questions, respond to discussions, and directly message users anonymously.</p>
            </Col>
            <Col xs="12" sm="6">
              <img src="../images/iphonex-settings.png" />
              <p>In your privacy settings you can make your profile visible or not. You can also decide to keep your name private. You can always view groups to connect with, but if you're profile is not visible you cannot connect with individuals. </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="column">
        <Row>
          <Col xs="12">
            <h2 className="column__heading">Outcome</h2>
          </Col>
          <Col xs="12">
            <p>This product is not in a production environment. However, I am currently using React.js, Firebase, and Webpack to build this product. Being a front-end developer really helps my design process because I understand what is feasible.</p>
            <p>Please enjoy playing around with my prototype!</p>
          </Col>
        </Row>
      </Container>
      <div className="gray-bkg no-margin-bottom">
        <Container>
          <Row>
            <Col xs="12" className="prototype">
              <iframe width="442" height="935" src="//invis.io/NEGQE1BK8RP" frameBorder="0" allowFullScreen></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </Layout>
)

export default Home;