import React from "react";


function Navbar (){
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              About
            </a>
            <a className="navbar-brand" href="#">
              Portfolio
            </a>
            <a className="navbar-brand" href="#">
              Contact
            </a>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;