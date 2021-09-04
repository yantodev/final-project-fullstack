/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */

import { Nav, Body, Footer } from "./template";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Nav />
        <Body />
        <Footer />
      </>
    );
  }
}

export default App;