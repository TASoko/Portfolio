import React from "react";
import "./style.css";

function BlurbCard() {
  return (
    <div>
      <p>
        My name is Thokozile Soko and I am currently an analyst at Phi Networks
        Group. Phi, as we call it, is a startup that helps startups raise
        capital and find talent. My role includes market research, brand and
        operational management. I ended up in the startup space after graduating
        May 2020 with a BA in economics. I'm currently transitioning career
        paths and moving into web development.
      </p>
      <button type="button" class="btn btn-light git">
        <a
          href="https://github.com/TASoko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </button>
      <button type="button" class="btn btn-light">
        <a
          href="https://www.linkedin.com/in/thokozile-soko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </button>
      <button type="button" class="btn btn-light">
        <a
          href="Resume copy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Resume"
        >
          Resume
        </a>
      </button>
    </div>
  );
}

export default BlurbCard;