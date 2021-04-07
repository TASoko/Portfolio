import React from "react";
import "./style.css";

function Projects(props) {
  return (
    <div className="card">
    {/* <img src={props.media} alt={props.name}/> */}
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
    </div>
    <div className="card-body">
      <a href={props.github} target="_blank" rel="noopener noreferrer" className="card-link">Github</a>
      <a href={props.deployed} target="_blank" rel="noopener noreferrer" className="card-link">Deployed Link</a>
    </div>
  </div>
  );
}

export default Projects;