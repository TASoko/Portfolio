import React, { Component } from "react";
import "./App.css";
import About from "./pages/about";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "./projects.json";
import Portfolio from "./pages/portfolio";


class App extends Component {
   state = {
    projects
  };
  render () {
  return (
    <div className="main">
      {/* <About /> */}
      {this.state.projects.map((project) => (
        <Portfolio
          id={project.id}
          key={project.id}
          name={project.name}
          media={project.media}
          description={project.description}
          languages={project.languages}
        />
      ))}
    </div>
  );
  }
}

export default App;
