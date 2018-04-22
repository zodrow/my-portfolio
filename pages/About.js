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
         <h1>hello</h1>
        </div>
      </Layout>
    )
  }
}

export default About;