import React from "react";
import "./style.css";

function Navtitles() {
  return (
    <div className="collapse navbar-collapse">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">Home</a> <span className="sr-only">(current)</span>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio.html">Portfolio</a></li>
    </div>
  );
}

export default Navtitles;
