import React from "react";
import Navbar from "../components/navbar"

function About (){
    return (
      <div className="container">
        <div className="jumbotron">
          <Navbar />
          <h2>Freelance Full Stack Web Developer</h2>
          <p>
            Hi my name is Thokozile Soko. I am a certified full stack web
            developer with focus on UI/UX and mobile app development. I’m New
            York City based. I’m currently an analyst at a NYC startup.{" "}
          </p>
        </div>
      </div>
    );
}

export default About;