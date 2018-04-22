
import * as React from "react"
import Head from "react-helmet"
import { Router, Route, browserHistory } from "react-router"
import {
  createApp,
  renderApp
} from "@phenomic/preset-react-app/lib/client"

import Home from './pages/Home'
import About from './pages/About'
import PageError from './pages/PageError'

import './index.scss'
import './normalize.css'

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={PageError} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}