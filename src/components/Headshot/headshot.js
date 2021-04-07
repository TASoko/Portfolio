import React from "react";
import image from "./headshot.JPG"

function Headshot (){
    return (
      <div>
        <img src={image} className="img-fluid profile" alt={"headshot"}></img>
      </div>
    );
}

export default Headshot;