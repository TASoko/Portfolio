import React from "react";
import Navtitles from "../Navtitles/Navtitles";

function Navbar (){
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Navtitles/>
        </nav>
      </div>
    );
}

export default Navbar;