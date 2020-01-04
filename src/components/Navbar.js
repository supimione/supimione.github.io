import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand text-white" to="#"><h2><span class="logo-title">S</span>upratim.</h2></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="#">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Work</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Experience</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Education</Link>
                </li>
              </ul>
              <div class="resume">
                <Link to="/resume.pdf" target="_blank" class="cmn-link resume-btn">Resume</Link>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;