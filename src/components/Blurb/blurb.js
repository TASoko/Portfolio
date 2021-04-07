import React from "react";
import "./style.css";
import BlurbCard from "./blurbcard";
import BlurbTitle from "./blurbtitle";
import BlurbContact from "./blurbcontact";

function Blurb () {
    return (
      <div className="blurb">
        <BlurbTitle />
      <BlurbContact />
        <BlurbCard />

      </div>
    );
}

export default Blurb;