import React from "react";
import "./style.css";
import Resume from "./Resume.pdf";

function BlurbCard() {
  return (
    <div className="col-md-8 blurb">
      <p>
        Hi my name is Thokozile Soko. I am a certified full stack web developer
        with a focus on UI/UX and mobile app development. I’m New York City
        based. Currently working as an analyst at a NYC startup. The startup
        helps other startups raise capital and find talent.
      </p>
      <button type="button" className="btn btn-light">
        <a
          href="https://github.com/TASoko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </button>
      &nbsp;&nbsp;
      <button type="button" className="btn btn-light">
        <a
          href="https://www.linkedin.com/in/thokozile-soko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </button>
      &nbsp;&nbsp;
      <button type="button" className="btn btn-light">
        <a
          href= {Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </button>
    </div>
  );
}

export default BlurbCard;