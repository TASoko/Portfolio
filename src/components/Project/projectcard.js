import React from "react";
import "./style.css";

function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.media} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Languages:</strong> {props.languages}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;