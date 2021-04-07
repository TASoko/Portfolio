import React from "react";
import { projects } from "../../projects"
import "./style.css";

function Projects() {
  
  return projects.map((project) => {
    return (
      <div className="card">
        <img src={project.media} alt={project.name} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="card-body">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Github
          </a>
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Deployed Link
          </a>
        </div>
      </div>
    );
  }
  );
}

export default Projects;