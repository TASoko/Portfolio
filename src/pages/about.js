import React from "react";
import Navbar from "../components/Navbar/navbar"
import Blurb from "../components/Blurb/blurb"
import Container from "../components/Container/container"

function About (){
    return (
      <Container>
        {/* <div className="jumbotron"> */}
          <Navbar />
          <Blurb />
        {/* </div> */}
      </Container>
    );
}

export default About;