import React from "react";
import "./style.css";
import BlurbContact from "./blurbcontact";
import BlurbCard from "./blurbcard";


function BlurbTitle () {
    return (
      <div className="blurb">
          <div className="col-9 backdrop">
            <header>Freelance Full Stack Web Developer</header>
            <BlurbContact />
            <BlurbCard />
          </div>
      </div>
    );
}

export default BlurbTitle;