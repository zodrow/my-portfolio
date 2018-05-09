import * as React from "react";
import Head from "react-helmet";

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div>
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Laura Zodrow Design and Development</title>
      <meta name="description" content="Laura Zodrow Design and Development" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <meta http-equiv="Content-Language" content="en"/>
    </Head>
    <Header/>
    {children}
    <Footer />
  </div>
);

export default Layout;