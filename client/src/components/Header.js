import React, { Component } from "react";
// import blur from '../blur.png'
import camera from "../images/camera.png";
import keyboard from "../images/keyboard.png";

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <img className="navbar-image" src={camera}></img>
          <a class="active" href="#home">
            Home
          </a>
          <a href="#news">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <p className="signature">Made by Gaganpreet</p>
          <img className="navbar-image-right" src={keyboard}></img>
        </div>
      </div>
    );
  }
}

export default Header;
