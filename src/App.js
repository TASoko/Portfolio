import React, { Component } from "react";
import "./App.css";
import About from "./pages/about";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "./projects.json";
import Portfolio from "./pages/portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/contact"
import Navbar from "../src/components/Navbar/navbar"


class App extends Component {
   state = {
    projects
  };
  render () {
  return (
    <Router>
      <div className="main">
        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact}/>
      </div>
    </Router>
  );
  }
}

export default App;
