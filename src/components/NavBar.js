import React from "react";
import myLogo from "../assets/img/logo.png";
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark navbar-dark border-bottom shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="Webcesar" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#f8f8ff"}}/>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">about me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">portfolio</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>


  )
}

export default NavBar
