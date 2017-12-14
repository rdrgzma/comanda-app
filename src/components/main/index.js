import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../app";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
export default Main;
