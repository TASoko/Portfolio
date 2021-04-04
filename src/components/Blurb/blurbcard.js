import React from "react";
import "./style.css";

function BlurbCard() {
  return (
    <div className="card-body col-md-4">
      <h2 className="card-title">About Me</h2>
      <p className="card-text">
        Hi my name is Thokozile Soko. I am a certified full stack web developer
        with focus on UI/UX and mobile app development. I’m New York City based.
        I’m currently an analyst at a NYC startup.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
}

export default BlurbCard;