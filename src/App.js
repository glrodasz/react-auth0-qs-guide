import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

import Footer from "./components/Footer";
import Home from "./views/Home";

// styles
import "samples-bootstrap-theme/dist/css/auth0-theme.css";
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

class App extends Component {
  render() {
    return (
      <div id="app">
        <Container className="mt-5">
          <Home/>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;