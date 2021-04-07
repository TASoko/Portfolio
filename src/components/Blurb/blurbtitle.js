import React from "react";
import "./style.css";
import BlurbContact from "./blurbcontact";


function BlurbTitle () {
    return (
      <div className="blurb">
        <div className="col-9 bg-secondary">
          <header>Freelance Full Stack Web Developer</header>
          <BlurbContact />
        </div>
      </div>
    );
}

export default BlurbTitle;