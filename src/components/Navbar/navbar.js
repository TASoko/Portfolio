import React from "react";
import Navtitles from "../Navtitles/Navtitles";
import "./style.css";

function Navbar (){
    return (
      // <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="navbar-brand" href="#">
              Thokozile Soko
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>{" "}
                  <span className="sr-only">(current)</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Portfolio">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
        </nav>
     /* </div> */
    );
}

export default Navbar;