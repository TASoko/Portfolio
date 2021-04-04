import React from "react";
import Navbar from "./navbar"

function Home (){
    return (
      <div className="container">
        <div className="jumbotron">
          <Navbar />
          <h1>Employee Directory</h1>
          <p>Welcome to your employee directory</p>
        </div>
      </div>
    );
}

export default Home;