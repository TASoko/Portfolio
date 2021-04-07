import React from "react";
import ProjectCard from "../components/Project/projectcard"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"

function Portfolio (){
    return (
      <div>
        <Navbar />
        <br></br>
        <h1>Portfolio</h1>
        <ProjectCard />
      </div>
    );
}

export default Portfolio;